import React from 'react'
import { Group, MultiSelect, Stack, Text } from "@mantine/core"

const filters = [
  { value: 'my-day', label: 'My Day' },
  { value: 'starred', label: 'Starred' },
  { value: 'important', label: 'Important' },
  { value: 'completed', label: 'Completed' },
  { value: 'planned', label: 'Planned' },
];

const sorts = [
  { value: 'importance', label: 'By Importance' },
  { value: 'completed', label: 'By Completed' },
  { value: 'starred', label: 'By Starred' },
  { value: 'alphabetically', label: 'Alphabetically' },
  { value: 'dueDate', label: 'Due Date' },
]


export default function Filters() {
  return (
    <>
      <Stack position="center">
        <MultiSelect
          data={filters}
          placeholder="Filters"
          width={20}
        />
        <MultiSelect
          data={sorts}
          placeholder="Sort By"
        />
      </Stack>
    </>
  )
}
