import React from 'react';
// import { GitPullRequest, AlertCircle, Messages, Database } from 'tabler-icons-react';
import { ThemeIcon, UnstyledButton, Group, Text, Box, Divider } from '@mantine/core';
import { NavLink } from "react-router-dom";

export function MainLink({ icon, color, label, link }) {
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
        transition: "font-weight 0.1s linear",

        '&:hover': {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        },
        '&.active': {
          fontWeight: "bold",
        }
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
    icon: <i className="bi bi-sun" />, color: 'blue', label: 'My Day', link: "/tasks/my-day"
  },
  { icon: <i className="bi bi-star" />, color: 'teal', label: 'Important', link: "/tasks/important" },
  { icon: <i className="bi bi-calendar3" />, color: 'violet', label: 'Planned', link: "/tasks/planned" },
  { icon: <i className="bi bi-infinity" />, color: 'orange', label: 'All', link: "/tasks/all" },
  { icon: <i className="bi bi-check-circle" />, color: 'teal', label: 'Completed', link: "/tasks/completed" },
  { icon: <i className="bi bi-person" />, color: 'grape', label: 'Assigned to me', link: "/tasks/assigned-to-me" },
  { icon: <i className="bi bi-clipboard-check" />, color: 'yellow', label: 'Tasks', link: "/tasks/inbox" },
  { icon: <i className="bi bi-stars" />, color: 'pink', label: 'Starred', link: "/tasks/starred" },
];

export function NavLinks() {
  const links = data.map((link) => <MainLink {...link} key={link.label} />);
  return (
    <div>
      {links}
      <Divider />
    </div>
  )
}