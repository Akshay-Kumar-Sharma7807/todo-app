import { Navbar, Text, Box, ThemeIcon, Group, UnstyledButton } from "@mantine/core";
import { NavLinks, MainLink } from "./NavLinks";
import NavBtn from "./NavBtn";

import React from 'react'

export default function Navigation({ opened }) {

  const share = (e) => {
    let shareData = {
      title: "AKS TODO",
      text: "Manage Tasks from anywhere",
      url: "https://aks-todo.web.app"
    }
    try {
      if (navigator.canShare(shareData)) {
        navigator.share(shareData)
      }
    }
    catch {
      console.log("Share isn't supported")
    }
  }

  return (
    <Navbar p="xs" hiddenBreakpoint="sm" hidden={!opened} width={{ xs: 300, lg: 300 }}>
      <Navbar.Section grow>
        <NavLinks />
        <NavBtn icon={<i className="bi bi-share"></i>} color="cyan" label="Share" onClick={share} />
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
