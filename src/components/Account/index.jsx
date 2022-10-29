import { ActionIcon, Aside, Avatar, Box, Button, Container, Drawer, Group, Stack, Switch, Text, Title, Tooltip, UnstyledButton } from '@mantine/core'
import React, { useState } from 'react'
import { auth } from "../../firebase";
import { signInWithPopup, GoogleAuthProvider, GithubAuthProvider, signOut } from 'firebase/auth';
import { useAuthState } from "react-firebase-hooks/auth";

export default function Account() {
  const [user] = useAuthState(auth);

  const [open, setOpen] = useState();
  const toggleAccount = () => {
    setOpen((o) => !o)
  }


  const signInGoogle = () => {
    const googleProvider = new GoogleAuthProvider();

    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
      })

  }

  const signInGithub = () => {
    const githubProvider = new GithubAuthProvider();

    signInWithPopup(auth, githubProvider)
      .then((result) => {
        console.log(result.user);
      })
  }

  const logout = () => {
    signOut(auth)
      .then(() => {
        console.log("logout");
      })
  }

  return (
    <>
      <Tooltip label="Account" withArrow>
        {/* <ActionIcon variant="default" onClick={() => toggleAccount()}>

          <i className='bi bi-person-circle'></i>
        </ActionIcon> */}
        <UnstyledButton>
          <Avatar src={user?.photoURL} radius="xl" onClick={() => toggleAccount()}></Avatar>

        </UnstyledButton>
      </Tooltip>
      <Drawer
        position="right"
        opened={open}
        onClose={() => setOpen((o) => !o)}
        title={<Title order={4}>Account</Title>}
        padding="md"
        size={400}
        shadow="lg"
        sx={{
          "& .mantine-Drawer-drawer": {
            overflowY: "auto",
          }
        }}
      >
        {user ?
          <Stack align="center">
            <Avatar src={user.photoURL} size="xl" radius="lg"></Avatar>
            <Box mb="lg">
              <Title order={4}>Hi! {user.displayName}</Title>
              <Text>{user.email}</Text>
            </Box>

            <Button variant='outline' onClick={logout}>
              Logout
            </Button>
          </Stack>
          :
          <Stack>
            <Button onClick={signInGoogle} leftIcon={<i className="bi bi-google"></i>} variant="outline">
              Continue with Google
            </Button>
            <Button onClick={signInGithub} leftIcon={<i className="bi bi-github"></i>} variant="outline">
              Continue with Github
            </Button>
          </Stack>
        }
      </Drawer>
    </>
  )
}
