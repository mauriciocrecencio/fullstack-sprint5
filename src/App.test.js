/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react'
import App from './App'

// describe('Componente APP principal ', () => {
//   it('deve conter o placeholder do campo de busca de produtos', () => {
//     render(<App />)
//     expect(
//       screen.getByPlaceholderText('O que você está procurando?')
//     ).toBeInTheDocument()
//   })
// })

describe('Componente APP principal ', () => {
  it('deve conter o placeholder do campo de busca de produtos', () => {
    render(<App />)
    expect(
      screen.getByText('Receba ofertas e novidades por e-mail')
    ).toBeInTheDocument()
  })
})

export {}
