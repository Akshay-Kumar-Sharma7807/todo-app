import { TextInput, Checkbox, Slider, Button, Group, Box, ActionIcon, Tooltip, Menu, Divider } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useId } from 'react';
import { doc, setDoc } from "firebase/firestore";
import { db, auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function AddTodo({ close, setTodos }) {
  const [user] = useAuthState(auth)
  const form = useForm({
    initialValues: {
      id: useId(),
      task: '',
      completed: false,
      importance: 25,
      favourite: false,
      myDay: false,
      categories: [],
      created: Date.now(),
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


      setDoc(doc(db, "Tasks", user.uid, "Task", values.id), {
        task: values.task,
        completed: values.task,
        importance: values.importance,
        favourite: values.favourite,
        myDay: values.myDay,
        categories: values.categories,
        created: values.created,
      })
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

        {/* <Checkbox
          mt="md"
          label="Completed"
          disabled
          {...form.getInputProps('completed', { type: 'checkbox' })}
        /> */}
        <Group mt="md">

          <Menu
            transition="rotate-right"
            transitionDuration={100}
            transitionTimingFunction="ease"
            control={
              <Tooltip label="Add Due Date" withArrow>
                <ActionIcon color="green" title="Add Due Date"><i className="bi bi-calendar" /></ActionIcon>
              </Tooltip>
            }
          >

            <Menu.Label position="center">Add Due Date</Menu.Label>
            <Divider />
            <Menu.Item>Today</Menu.Item>
            <Menu.Item>Tomorrow</Menu.Item>
            <Menu.Item>Next Week</Menu.Item>
            <Menu.Item rightSection={<i className="bi bi-arrow-right" />}>
              <Menu
                transition="rotate-right"
                transitionDuration={100}
                transitionTimingFunction="ease"
                control={
                  <p>Pick Date</p>
                }>
                <Menu.Item>kjfdlkj</Menu.Item>
              </Menu>
            </Menu.Item>

          </Menu>
          <Menu
            transition="rotate-right"
            transitionDuration={100}
            transitionTimingFunction="ease"
            control={
              <Tooltip label="Remind Me" withArrow>
                <ActionIcon color="blue" title="Remind Me"><i className="bi bi-bell" /></ActionIcon>
              </Tooltip>
            }
          >

            <Menu.Label position="center">Add Reminder</Menu.Label>
            <Divider />
            <Menu.Item>Later Today</Menu.Item>
            <Menu.Item>Tomorrow</Menu.Item>
            <Menu.Item>Next Week</Menu.Item>
            <Menu.Item rightSection={<i className="bi bi-arrow-right" />}>Pick Date & Time</Menu.Item>

          </Menu>
          <Menu
            transition="rotate-right"
            transitionDuration={100}
            transitionTimingFunction="ease"
            control={
              <Tooltip label="Repeat" withArrow>
                <ActionIcon color="indigo" title="Repeat"><i className="bi bi-alarm" /></ActionIcon>
              </Tooltip>
            }
          >

            <Menu.Label position="center">Repeat</Menu.Label>
            <Divider />
            <Menu.Item>Daily</Menu.Item>
            <Menu.Item>WeekDays</Menu.Item>
            <Menu.Item>Weekly</Menu.Item>
            <Menu.Item>Monthly</Menu.Item>
            <Menu.Item>Yearly</Menu.Item>
            <Menu.Item rightSection={<i className="bi bi-arrow-right" />}>Custom</Menu.Item>

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