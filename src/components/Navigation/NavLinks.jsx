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
        transition: "border 0.2s ease-in-out",

        '&:hover': {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
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
    icon: <i className="bi bi-sun" />, color: 'blue', label: 'My Day', link: "/"
  },
  { icon: <i className="bi bi-star" />, color: 'teal', label: 'Important', link: "/about" },
  { icon: <i className="bi bi-calendar3" />, color: 'violet', label: 'Planned', link: "/settings" },
  { icon: <i className="bi bi-infinity" />, color: 'violet', label: 'All', link: "/settings" },
  { icon: <i className="bi bi-check-circle" />, color: 'violet', label: 'Completed', link: "/settings" },
  { icon: <i className="bi bi-person" />, color: 'violet', label: 'Assigned to me', link: "/settings" },
  { icon: <i className="bi bi-clipboard-check" />, color: 'violet', label: 'Tasks', link: "/settings" },
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