import React, { useState } from 'react'
import { Button, Group, TextInput } from "@mantine/core"

export default function TodoForm({ todos, setTodos }) {

  const [text, setText] = useState("")
  const handleClick = (e) => {
    console.log(todos)
    e.preventDefault();
    setTodos((p) => {
      console.log(p)
      return [...p, { completed: false, text }]
    })
    setText("");
  }

  return (
    <form className="form">
      {/* <Input type="text"  required /> */}
      <Group position="center">
        <TextInput
          placeholder="Your name"
          // label="Full name"
          required
          value={text}
          onChange={(e) => setText(e.target.value)}
          size="md"
        />
        <Button onClick={handleClick} type="submit" className='add-button' size="md">
          <i className="bi bi-check-lg"></i>
        </Button>
      </Group>
    </form>
  )
}
