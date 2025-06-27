import { render, waitFor } from '@testing-library/react'
import { Component as Home } from './Home'

const renderHome = () => render(<Home />)

test('renders the page title', async () => {
  renderHome()
  await waitFor(() => expect(document.title).toBe('Home'))
})
