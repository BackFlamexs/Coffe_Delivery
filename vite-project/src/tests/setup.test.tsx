import { render, screen } from '@testing-library/react'
import { App } from '@/App'
import { DELIVERY_FEE_IN_CENTS, STORAGE_KEYS } from '@/config/constants'

describe('test setup', () => {
  it('resolves the @ alias and renders with jsdom', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: 'Coffee Delivery' })).toBeInTheDocument()
  })

  it('exposes centralized constants', () => {
    expect(DELIVERY_FEE_IN_CENTS).toBe(500)
    expect(STORAGE_KEYS.cart).toBe('coffee-delivery:cart:v1')
  })
})
