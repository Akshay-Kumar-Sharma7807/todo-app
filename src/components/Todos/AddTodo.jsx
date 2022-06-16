import { TextInput, Checkbox, Button, Group, Box } from '@mantine/core';
import { useForm } from '@mantine/form';

export default function AddTodo({ close, setTodos }) {
  const form = useForm({
    initialValues: {
      task: '',
      completed: false,
    }
  });

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

        <Checkbox
          mt="md"
          label="Completed"
          disabled
          {...form.getInputProps('completed', { type: 'checkbox' })}
        />

        <Group position="right" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
}