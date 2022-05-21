import React from 'react';
// import { GitPullRequest, AlertCircle, Messages, Database } from 'tabler-icons-react';
import { ThemeIcon, UnstyledButton, Group, Text } from '@mantine/core';

function MainLink({ icon, color, label }) {
  return (
    <UnstyledButton
      sx={(theme) => ({
        display: 'block',
        width: '100%',
        padding: theme.spacing.xs,
        borderRadius: theme.radius.sm,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

        '&:hover': {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        },
      })}
    >
      <Group>
        <ThemeIcon color={color} variant="light">
          {icon}
        </ThemeIcon>

        <Text size="sm">{label}</Text>
      </Group>
    </UnstyledButton>
  );
}

const data = [
  {
    icon: <i className="bi bi-house" />, color: 'blue', label: 'Home'
  },
  { icon: <i className="bi bi-info" />, color: 'teal', label: 'Info' },
  { icon: <i className="bi bi-gear" />, color: 'violet', label: 'Settings' },
  { icon: <i className="bi bi-share" />, color: 'grape', label: 'Share' },
];

export function MainLinks() {
  const links = data.map((link) => <MainLink {...link} key={link.label} />);
  return <div>{links}</div>;
}