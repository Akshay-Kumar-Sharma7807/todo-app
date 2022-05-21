import { Navbar, Text, Box, ThemeIcon, Group, UnstyledButton } from "@mantine/core";
import { MainLinks } from "./MainLinks";

import React from 'react'

export default function TodoNavbar({ opened }) {
  return (
    <Navbar p="xs" hiddenBreakpoint="xs" hidden={!opened} width={{ xs: 300, lg: 300 }}>
      <Navbar.Section grow>
        <MainLinks />
        {/* <UnstyledButton
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
            <ThemeIcon color="blue" variant="light">
              <i className="bi bi-house"></i>
            </ThemeIcon>

            <Text size="sm">Home</Text>
          </Group>
        </UnstyledButton> */}
      </Navbar.Section>
    </Navbar>
  )
}
