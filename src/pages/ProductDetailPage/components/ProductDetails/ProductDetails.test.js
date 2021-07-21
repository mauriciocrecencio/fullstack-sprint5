/* eslint-disable no-undef */
import { render } from '@testing-library/react'
import ProductDetails from './index'

describe('Componente página do produto', () => {
  it('Deve renderizar o componente', () => {
    const { container } = render(
      <ProductDetails name="Nome teste" price="R$3,40" />
    )
    expect(container.firstChild).toBeInTheDocument()
  })
})

export {}
