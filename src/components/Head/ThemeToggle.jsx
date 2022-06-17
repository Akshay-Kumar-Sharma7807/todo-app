import { ActionIcon, useMantineColorScheme, Tooltip } from '@mantine/core';

export default function ThemeToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <Tooltip label="Ctrl + J" withArrow>
      <ActionIcon
        variant="default"
        color={dark ? 'yellow' : 'blue'}
        onClick={() => toggleColorScheme()}
        title="Toggle color scheme"
      >
        {dark ? <i className="bi bi-sun" size={18} /> : <i className="bi bi-moon-stars" size={18} />}
      </ActionIcon>
    </Tooltip>
  );
}