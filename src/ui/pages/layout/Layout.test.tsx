import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Component as Layout } from './Layout'
import { MemoryRouter } from 'react-router-dom'

const renderLayout = () => {
  render(
    <MemoryRouter>
      <Layout />
    </MemoryRouter>
  )
}

test('has semantic html', () => {
  renderLayout()
  expect(screen.getByRole('banner')).toBeInTheDocument()
  expect(screen.getByRole('navigation')).toBeInTheDocument()
  expect(screen.getByRole('main')).toBeInTheDocument()
  expect(screen.getByRole('contentinfo')).toBeInTheDocument()
})

test('displays skipLink', async () => {
  renderLayout()
  const skipLink = screen.getByRole('link', { name: 'Skip to main content' })
  await userEvent.tab()
  expect(skipLink).toHaveFocus()
  expect(skipLink).toHaveAttribute('href', '#main')
})
