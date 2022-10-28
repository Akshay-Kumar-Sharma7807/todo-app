import { Navbar, Text, Box, ThemeIcon, Group, UnstyledButton, ScrollArea } from "@mantine/core";
import { NavLinks, MainLink } from "./NavLinks";
import NavBtn from "./NavBtn";
import { useLocation } from "react-router-dom";

import React from 'react'

export default function Navigation({ opened }) {
  const location = useLocation();
  console.log(location)

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
    <Navbar p="xs" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 300, lg: 300, base: "100%" }}>
      <ScrollArea>
        <Navbar.Section grow>
          <NavLinks />
          <NavBtn icon={<i className="bi bi-share"></i>} color="cyan" label="Share" onClick={share} />
        </Navbar.Section>

      </ScrollArea>
    </Navbar>
  )
}
