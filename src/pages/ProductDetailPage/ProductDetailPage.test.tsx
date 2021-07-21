import { render } from '@testing-library/react'
import ProductDetailPage from '.'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    state: {
      product: {
        image: 'assets/c1.webp',
        name: 'Jaqueta Puffer Juvenil Com Capuz Super Mario Branco Tam 10 a 18',
        price: '199,90'
      }
    }
  })
}))

describe('ProductDetailPage Component', () => {
  test('Renderizar component ProductDetailPage', () => {
    render(<ProductDetailPage />)
  })
})
