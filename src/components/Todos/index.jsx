import { Container, Button, Table } from '@mantine/core'
import React, { useState } from 'react'

export default function Todos() {
  const [todos, setTodos] = useState([])

  const rows = (<tr>
    <td>aklsjf</td>
    <td>aklsjf</td>
    <td>aklsjf</td>
    <td>aklsjf</td>
  </tr>)
  return (
    <Container>
      <Button leftIcon={<i className="bi bi-plus"></i>}>
        Add New Task
      </Button>
      <Table highlightOnHover verticalSpacing="md">
        <tr>
          <td></td>
          <td></td>
          <td>Symbol</td>
          <td>Atomic mass</td>
        </tr>
      </Table>
    </Container>
  )
}
