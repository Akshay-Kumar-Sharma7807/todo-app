import React from 'react';
// import { GitPullRequest, AlertCircle, Messages, Database } from 'tabler-icons-react';
import { ThemeIcon, UnstyledButton, Group, Text, Box, Divider } from '@mantine/core';
import { NavLink } from "react-router-dom";

function MainLink({ icon, color, label, link }) {
  return (
    <UnstyledButton
      component={NavLink}
      to={link}

      sx={(theme) => ({
        display: 'block',
        width: '100%',
        padding: theme.spacing.xs,
        borderRadius: theme.radius.sm,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
        textDecoration: 'none',

        '&:hover': {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        },
        '&.active': {
          borderLeft: '4px solid ' + color,
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
    icon: <i className="bi bi-house" />, color: 'blue', label: 'Home', link: "/"
  },
  { icon: <i className="bi bi-info" />, color: 'teal', label: 'Info', link: "/about" },
  { icon: <i className="bi bi-gear" />, color: 'violet', label: 'Settings', link: "/settings" },
  { icon: <i className="bi bi-share" />, color: 'grape', label: 'Share', link: "/share" },
];

export function MainLinks() {
  const links = data.map((link) => <MainLink {...link} key={link.label} />);
  return (
    <div>
      {links}
      <Divider />
    </div>
  )
}