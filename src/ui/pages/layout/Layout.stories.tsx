import type { Meta, StoryObj } from '@storybook/react'
import { Component as Layout } from './Layout'
import { MemoryRouter } from 'react-router-dom'

const meta: Meta<typeof Layout> = {
  component: Layout,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ]
}

export default meta
type Story = StoryObj<typeof Layout>

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Layout'
  }
}
