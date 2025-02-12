import { render, waitFor } from '@testing-library/react'
import { Component as Home } from './Home'
import { HelmetProvider } from 'react-helmet-async'

const renderHome = () =>
  render(
    <HelmetProvider>
      <Home />
    </HelmetProvider>
  )

test('renders the page title', async () => {
  renderHome()
  await waitFor(() => expect(document.title).toBe('Home'))
})
