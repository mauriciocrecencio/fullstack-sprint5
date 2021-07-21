import { render, screen } from '@testing-library/react'
import Footer from '.'

describe('Footer Component', () => {
  test('Deve conter o texto de novidades', () => {
    render(<Footer />)
    const element = screen.getByTestId('footer')
    expect(element).toBeInTheDocument()
  })
})
