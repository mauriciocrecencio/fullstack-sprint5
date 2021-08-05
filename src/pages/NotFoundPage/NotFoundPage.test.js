import { render, screen } from '@testing-library/react'
import NotFoundPage from '.'
import { BrowserRouter as Router } from 'react-router-dom'

describe('NotFoundPage Component', () => {
  test('O título está correto', () => {
    render(
      <Router>
        <NotFoundPage />
      </Router>,
    )
    const titleNotFound = screen.getByText('Página não encontrada!')
    expect(titleNotFound).toBeInTheDocument()
  })
})
