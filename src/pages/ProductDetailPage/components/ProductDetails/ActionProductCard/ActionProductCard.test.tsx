import { render, screen } from '@testing-library/react'
import ActionProductCard from '.'

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}))

describe('Action Product Card Component', () => {
  test('Deve renderizar componente', () => {
    render(<ActionProductCard price="44,50" />)
    const element = screen.getByText('Adicionar à sacola')
    expect(element).toBeInTheDocument()
  })
  test('Deve renderizar componente', () => {
    render(<ActionProductCard price="44,50" />)
    const element = screen.getByTestId('homebtn')
    const element2 = screen.getByTestId('homebtn2')
    element2.click()
    element.click()
    screen.debug
    expect(element).toBeInTheDocument()
  })
})
