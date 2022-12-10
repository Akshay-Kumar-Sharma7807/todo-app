import { ActionIcon, Aside, Container, Divider, Drawer, Group, Stack, Switch, Text, Title, Tooltip } from '@mantine/core'
import React, { useState } from 'react'
import { db, auth } from "../../firebase"
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from 'react';
import { doc, getDoc, setDoc } from 'firebase/firestore';

export default function Settings() {
  const [user] = useAuthState(auth);
  const [open, setOpen] = useState();

  // Settings state
  const [completionSound, setCompletionSound] = useState(true);

  // Smart Lists State
  const [myDay, setMyDay] = useState(true);
  const [important, setImportant] = useState(true);
  const [planned, setPlanned] = useState(true);
  const [all, setAll] = useState(true);
  const [completed, setCompleted] = useState(true);
  const [assigned, setAssigned] = useState(true);

  const [email, setEmail] = useState(false);
  const [pushNotifications, setPushNotifications] = useState(false);

  const toggleSettings = () => {
    setOpen((o) => !o)
  }

  // On toggle of settings sidebar sync the settings.
  useEffect(() => {
    // read settings
    if (user && open) {
      getDoc(doc(db, "Users", user.uid))
        .then((res) => {
          let settings = res.data().settings;
          console.log(settings)
          for (let setting in settings) {
            setting = setting.trim();
            switch (setting) {
              case "completionSound":
                setCompletionSound(settings[setting])
                break;
              case "important":
                setImportant(settings[setting])
                break;
              case "planned":
                setPlanned(settings[setting])
                break;
              case "all":
                setAll(settings[setting])
                break;
              case "completed":
                setCompleted(settings[setting])
                break;
              case "assigned":
                setAssigned(settings[setting])
                break;
              case "email":
                setEmail(settings[setting])
                break;
              case "pushNotifications":
                setPushNotifications(settings[setting])
                break;
              case "myDay":
                setMyDay(settings[setting])
                break;
              default:
                console.log("unknown setting: ", setting);
                break;
            }

          }
        })

    }

    // save changed settings.
    if (user && open === false) {
      let data = {
        completionSound,
        important,
        planned,
        all,
        completed,
        assigned,
        email,
        pushNotifications,
        myDay
      }
      setDoc(doc(db, "Users", user.uid), {
        settings: data
      }).then(() => {
        // Settings updated on the server
        // console.log("updated settings ")
      })
    }
  }, [open])

  return (
    <>
      <Tooltip label="Settings" withArrow>
        <ActionIcon variant="default" onClick={() => toggleSettings()}>
          <i className='bi bi-gear'></i>
        </ActionIcon>
      </Tooltip>
      <Drawer
        position="right"
        opened={open}
        onClose={() => setOpen((o) => !o)}
        title={<Title order={4}>Settings</Title>}
        padding="md"
        size={400}
        shadow="lg"
        sx={{
          "& .mantine-Drawer-drawer": {
            overflowY: "auto",
          }
        }}
      >
        <Title order={4} mb="sm">
          General
        </Title>
        <Stack>
          <Switch size="md" label="Turn on reminder notifications" name="notification"></Switch>
          <Switch size="md" checked={completionSound} onChange={(e) => setCompletionSound(e.currentTarget.checked)} label="Play Completion Sound" name="notification"></Switch>
        </Stack>
        <Title order={4} my="sm">Smart Lists</Title>
        <Stack>
          <Switch size="md" checked={myDay} onChange={(e) => setMyDay(e.target.checked)} label="My Day" name="myDay"></Switch>
          <Switch size="md" checked={important} onChange={(e) => setImportant(e.target.checked)} label="Important" name="notification"></Switch>
          <Switch size="md" checked={planned} onChange={(e) => setPlanned(e.target.checked)} label="Planned" name="notification"></Switch>
          <Switch size="md" checked={all} onChange={(e) => setAll(e.target.checked)} label="All" name="notification"></Switch>
          <Switch size="md" checked={completed} onChange={(e) => setCompleted(e.target.checked)} label="Completed" name="notification"></Switch>
          <Switch size="md" checked={assigned} onChange={(e) => setAssigned(e.target.checked)} label="Assigned to me" name="notification"></Switch>
        </Stack>
        <Title order={4} my="sm">Notifications</Title>
        <Stack>
          <Switch size="md" checked={email} onChange={(e) => setEmail(e.target.checked)} label="Email" name="notification"></Switch>
          <Switch size="md" checked={pushNotifications} onChange={(e) => setPushNotifications(e.target.value)} label="Push Notifications" name="notification"></Switch>
        </Stack>
      </Drawer>
    </>
  )
}
