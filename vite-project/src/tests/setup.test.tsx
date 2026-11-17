import { render, screen } from '@testing-library/react'

describe('test setup', () => {
  it('renders with jsdom and jest-dom matchers', () => {
    render(<p>Coffee Delivery</p>)
    expect(screen.getByText('Coffee Delivery')).toBeInTheDocument()
  })
})
