import type { Meta, StoryObj } from '@storybook/react'
import { ErrorBoundary } from './ErrorBoundary'

const meta: Meta<typeof ErrorBoundary> = {
  component: ErrorBoundary
}

export default meta
type Story = StoryObj<typeof ErrorBoundary>

export const Primary: Story = {
  render: () => {
    const TestComponent = () => {
      throw new Error('An error occurred')
    }
    return (
      <ErrorBoundary>
        <TestComponent />
      </ErrorBoundary>
    )
  }
}

export const NoErrors: Story = {
  render: () => {
    const TestComponent = () => <div>No Errors!!!</div>
    return (
      <ErrorBoundary>
        <TestComponent />
      </ErrorBoundary>
    )
  }
}
