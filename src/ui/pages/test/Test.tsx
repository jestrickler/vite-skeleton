import { Suspense } from 'react'
import { Skeleton, Typography } from '@mui/material'
import { Helmet } from 'react-helmet-async'
import { Await, useLoaderData } from 'react-router-dom'
import { TestView } from './TestView'

/**
 * This is a sample Home Page Component
 */
export const Component = () => {
  const deferred = useLoaderData()

  return (
    <>
      <Helmet>
        <title>Test</title>
      </Helmet>
      <Typography variant='h1' gutterBottom>
        Test
      </Typography>
      <Suspense
        fallback={<Skeleton variant='rectangular' width={210} height={118} />}
        // fallback={<div>Loading...</div>}
      >
        <Await resolve={deferred}>
          <TestView />
        </Await>
      </Suspense>
    </>
  )
}

Component.displayName = 'Test'
