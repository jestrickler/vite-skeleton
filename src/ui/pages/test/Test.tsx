import { Suspense, useState } from 'react'
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Skeleton,
  Stack,
  Typography
} from '@mui/material'
import { Await, useLoaderData } from 'react-router'
import { TestView } from './TestView'

/**
 * This is a sample Home Page Component
 */
export const Component = () => {
  const deferred = useLoaderData()
  const [id, setId] = useState(1)

  return (
    <>
      <title>Test</title>
      <Typography variant='h1' gutterBottom>
        Test
      </Typography>
      <Stack direction='row' spacing={2}>
        <FormControl
          sx={(theme) => ({
            m: 1,
            minWidth: theme.spacing(20)
          })}
        >
          <InputLabel id='todo-select-label'>Todo Id</InputLabel>
          <Select
            labelId='todo-select-label'
            id='todo-select'
            value={id}
            label='Todo Id'
            onChange={(e) => setId(e.target.value)}
          >
            {Array.from({ length: 10 }, (_, i) => i + 1).map((id) => (
              <MenuItem value={id}>{id}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <Suspense
          fallback={<Skeleton variant='rectangular' width={210} height={118} />}
        >
          <Await resolve={deferred}>
            <TestView id={id} />
          </Await>
        </Suspense>
      </Stack>
    </>
  )
}

Component.displayName = 'Test'
