import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import Counter from './Counter.tsx'

describe('CounterButton', () => {
  it('renders with initial count of 0', () => {
    render(<Counter />)
    expect(screen.getByText('count is 0')).toBeInTheDocument()
  })

  it('increments count when clicked', async () => {
    const user = userEvent.setup()
    render(<Counter />)

    await user.click(screen.getByText('count is 0'))
    expect(screen.getByText('count is 1')).toBeInTheDocument()
  })

  it('resets count to 0 when reset is clicked', async () => {
    const user = userEvent.setup()
    render(<Counter />)

    await user.click(screen.getByText('count is 0'))
    await user.click(screen.getByText('count is 1'))
    expect(screen.getByText('count is 2')).toBeInTheDocument()

    await user.click(screen.getByText('reset'))
    expect(screen.getByText('count is 0')).toBeInTheDocument()
  })
})
