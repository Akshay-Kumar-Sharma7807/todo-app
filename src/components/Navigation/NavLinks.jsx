import React, { useState } from 'react';
// import { GitPullRequest, AlertCircle, Messages, Database } from 'tabler-icons-react';
import { ThemeIcon, UnstyledButton, Group, Text, Box, Divider, Stack } from '@mantine/core';
import { NavLink as RouterLink } from "react-router-dom";
import { NavLink } from '@mantine/core';
import { useLocation } from 'react-router-dom';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../firebase"
import { getDoc, onSnapshot, doc } from 'firebase/firestore';
import { useEffect } from 'react';
import { useLocalStorage } from '@mantine/hooks';


export function MainLink({ icon, color, label, link }) {

  const location = useLocation();
  return (
    <NavLink
      component={RouterLink}
      to={link}
      label={label}
      icon={<ThemeIcon color={color} variant="light">{icon}</ThemeIcon>}
      active={location.pathname == link}
      sx={(theme) => ({
        // display: 'block',
        width: '100%',
        padding: theme.spacing.xs,
        borderRadius: theme.radius.sm,
        // color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
        textDecoration: 'none',
        transition: "font-weight 0.1s linear",

        // '&:hover': {
        //   backgroundColor:
        //     theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        // },
        '&.active': {
          fontWeight: "bold",
        }
      })}
    >
      {/* <Group>
        <ThemeIcon color={color} variant="light">
          {icon}
        </ThemeIcon>

        <Text size="sm">{label}</Text>
      </Group> */}
    </NavLink>
  );
}

const data = [
  {
    icon: <i className="bi bi-sun" />, color: 'blue', label: 'My Day', link: "/tasks/my-day", id: "myDay"
  },
  { icon: <i className="bi bi-star" />, color: 'yellow', label: 'Important', link: "/tasks/important", id: "important" },
  { icon: <i className="bi bi-calendar3" />, color: 'violet', label: 'Planned', link: "/tasks/planned", id: "planned" },
  { icon: <i className="bi bi-infinity" />, color: 'orange', label: 'All', link: "/tasks/all", id: "all" },
  { icon: <i className="bi bi-check-circle" />, color: 'teal', label: 'Completed', link: "/tasks/completed", id: "completed" },
  { icon: <i className="bi bi-person" />, color: 'grape', label: 'Assigned to me', link: "/tasks/assigned-to-me", id: "assigned" },
  { icon: <i className="bi bi-clipboard-check" />, color: 'yellow', label: 'Tasks', link: "/tasks/inbox", id: "inbox" },
  { icon: <i className="bi bi-stars" />, color: 'pink', label: 'Starred', link: "/tasks/starred", id: "starred" },
];

export function NavLinks() {
  const [user, loading] = useAuthState(auth);
  // const [linksData, setLinksData] = useLocalStorage({ key: "linksData", defaultValue: data });
  const [linksData, setLinksData] = useState(data);

  useEffect(() => {
    let unsubscribe;
    if (user && !loading) {
      unsubscribe = onSnapshot(doc(db, "Users", user?.uid), (snapshot) => {
        console.log("snapshot: ", snapshot.data());
        let settings = snapshot.data().settings;
        let allowedIds = []
        for (let setting in settings) {
          if (settings[setting]) {
            allowedIds.push(setting)
          }
        }
        console.log(allowedIds);
        setLinksData(() => {
          let res = data.filter((link) => allowedIds.includes(link.id))
          console.log(res)
          return res
        })
      })
    }


    return () => {
      if (user) {
        unsubscribe();
      }
    }
  }, [user])

  console.log("links Data", linksData)
  // const links = ;
  return (
    <Stack spacing={2}>
      {linksData.map((link) => <MainLink {...link} key={link.label} />)}
      <Divider my={4} />
    </Stack>
  )
}