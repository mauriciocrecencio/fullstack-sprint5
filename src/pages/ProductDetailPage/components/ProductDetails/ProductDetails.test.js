/* eslint-disable no-undef */
import { render } from '@testing-library/react'
import ProductDetails from './index'

describe('Componente página do produto', () => {
  it('O snapshot do component deve permanecer sempre o mesmo', () => {
    const { container } = render(
      <ProductDetails name="Nome teste" price="R$3,40" />
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})

export {}
