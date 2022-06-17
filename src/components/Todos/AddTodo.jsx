import { TextInput, Checkbox, Slider, Button, Group, Box, ActionIcon, Tooltip, Menu, Divider } from '@mantine/core';
import { useForm } from '@mantine/form';

export default function AddTodo({ close, setTodos }) {
  const form = useForm({
    initialValues: {
      task: '',
      completed: false,
      importance: 25,
      favourite: false,
    }
  });


  const MARKS = [
    { value: 0, label: 'Not Important' },
    { value: 25, label: 'Less Important' },
    { value: 50, label: 'Important' },
    { value: 75, label: 'Very Important' },
    { value: 100, label: 'Must Do' },
  ];

  return (
    <Box mx="auto">
      <form onSubmit={form.onSubmit((values) => {
        setTodos((t) => [values, ...t])
        close()
      })}>
        <TextInput
          required
          label="Add a Task"
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
            <Menu.Item rightSection={<i className="bi bi-arrow-right" />}>Pick Date</Menu.Item>

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
        <Group position="right" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
}