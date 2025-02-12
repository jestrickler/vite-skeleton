import type { Meta, StoryObj } from '@storybook/react'
import { Component as Home } from './Home'

const meta: Meta<typeof Home> = {
  component: Home
}

export default meta
type Story = StoryObj<typeof Home>

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Home'
  }
}
