import { TextInput, Checkbox, Slider, Button, Group, Box, ActionIcon, Tooltip, Menu, Divider, Popover, Badge } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useState } from 'react';
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { db, auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Calendar, TimeInput } from '@mantine/dates';

import uuid from 'react-uuid';
import { useEffect } from 'react';

export default function AddTodo({ close, setTodos }) {
  const [dueDate, setDueDate] = useState(null);
  useEffect(() => {
    console.log(dueDate);
  }, [dueDate])
  const [dueMenu, setDueMenu] = useState(false);
  const [user] = useAuthState(auth)
  const form = useForm({
    initialValues: {
      id: uuid(),
      task: '',
      completed: false,
      importance: 25,
      favourite: false,
      myDay: false,
      categories: [],
      created: serverTimestamp(),
    }
  });


  const MARKS = [
    { value: 0, label: 'Not Important' },
    { value: 25, label: 'Less Important' },
    { value: 50, label: 'Important' },
    { value: 75, label: 'Very Important' },
    { value: 100, label: 'Must Do' },
  ];

  const addNewTask = (values) => {
    if (user) {


      setDoc(doc(db, "Users", user.uid, "Tasks", values.id), values)
    }
    else {
      console.log("user not signed in");
    }
    setTodos((t) => [values, ...t])
    close()
  }

  return (
    <Box mx="auto">
      <form onSubmit={form.onSubmit(addNewTask)}>
        <TextInput
          required
          label="Task's Name"
          placeholder="Task"
          {...form.getInputProps('task')}
        />

        <Slider
          mt="md"
          label={(val) => MARKS.find((mark) => mark.value === val).label}
          marks={MARKS}
          step={25}
          styles={{ markLabel: { display: 'none' } }}
          {...form.getInputProps('importance')}
        />

        <Group mt="md">
          <Menu
            transition="rotate-right"
            transitionDuration={100}
            transitionTimingFunction="ease"
            width={200}
            closeOnItemClick={false}
          >
            <Menu.Target >
              <Tooltip label="Add Due Date" withArrow>
                <Group spacing={2}>
                  <ActionIcon color="green" title="Add Due Date">
                    <i className="bi bi-calendar" />
                  </ActionIcon>
                  {dueDate &&
                    <Badge>
                      {dueDate.toDateString()}
                    </Badge>
                  }
                </Group>
              </Tooltip>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Label position="center">Due</Menu.Label>
              <Divider my={4} />
              <Menu.Item onClick={() => setDueDate(new Date())}>Today</Menu.Item>
              <Menu.Item onClick={() => setDueDate(new Date(Date.now() + (25 * 60 * 60 * 1000)))}>Tomorrow</Menu.Item>
              <Menu.Item onClick={() => setDueDate(new Date(Date.now() + (25 * 60 * 60 * 1000 * 7)))}>Next Week</Menu.Item>
              <Divider my={4} />
              <Popover position="right" withArrow>
                <Popover.Target>
                  <Menu.Item rightSection={<i className="bi bi-arrow-right"></i>}>Pick Date</Menu.Item>
                </Popover.Target>
                <Popover.Dropdown>
                  <Calendar onChange={setDueDate} value={dueDate} />

                </Popover.Dropdown>
              </Popover>

            </Menu.Dropdown>

          </Menu>
          <Menu
            transition="rotate-right"
            transitionDuration={100}
            transitionTimingFunction="ease"
            width={200}
          // closeOnItemClick={false}
          >
            <Menu.Target>

              <Tooltip label="Remind Me" withArrow>
                <ActionIcon color="blue" title="Remind Me"><i className="bi bi-bell" /></ActionIcon>
              </Tooltip>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Label position="center">Add Reminder</Menu.Label>
              <Divider />
              <Menu.Item>Later Today</Menu.Item>
              <Menu.Item>Tomorrow</Menu.Item>
              <Menu.Item>Next Week</Menu.Item>

              <Menu.Label position="center">Custom</Menu.Label>
              <Divider my={4} />
              {/* <Menu.Item rightSection={<i className="bi bi-arrow-right" />}>Pick Date & Time</Menu.Item> */}
              {/* <Menu.Item> */}
              <TimeInput format="12" defaultValue={new Date()} />
              {/* </Menu.Item> */}

            </Menu.Dropdown>

          </Menu>
          <Menu
            transition="rotate-right"
            transitionDuration={100}
            transitionTimingFunction="ease"
            width={200}

          >
            <Menu.Target><Tooltip label="Repeat" withArrow>
              <ActionIcon color="indigo" title="Repeat"><i className="bi bi-alarm" /></ActionIcon>
            </Tooltip></Menu.Target>

            <Menu.Dropdown>
              <Menu.Label position="center">Repeat</Menu.Label>
              <Divider />
              <Menu.Item>Daily</Menu.Item>
              <Menu.Item>WeekDays</Menu.Item>
              <Menu.Item>Weekly</Menu.Item>
              <Menu.Item>Monthly</Menu.Item>
              <Menu.Item>Yearly</Menu.Item>
              <Menu.Item rightSection={<i className="bi bi-arrow-right" />}>Custom</Menu.Item>
            </Menu.Dropdown>

          </Menu>

        </Group>
        <Checkbox label="Add to My Day" mt="sm" {...form.getInputProps('myDay')} />
        <Group position="right" mt="md">
          <Button type="submit">Add</Button>
        </Group>
      </form >
    </Box >
  );
}