import { render, screen } from '@testing-library/react'
import NotFoundPage from '.'
import { BrowserRouter as Router } from 'react-router-dom'

describe('NotFoundPage Component', () => {
  test('O título está correto', () => {
    // render(<Routes />)
    render(
      <Router>
        <NotFoundPage />
      </Router>,
    )
    const titleNotFound = screen.getByText('Página não encontrada!')
    expect(titleNotFound).toBeInTheDocument()
  })
  // test('O link para voltar a página inicial deve funcionar', () => {
  //   // render(<Routes />)
  //
  //   render(
  //     <Router>
  //       <NotFoundPage />
  //     </Router>
  //   )
  //   const titleNotFound = screen.getByText('Página não encontrada!')
  //   const linkToHome = screen.getByRole('link')
  //   // eslint-disable-next-line no-debugger
  //   debugger
  //   // eslint-disable-next-line no-undef
  //   fireEvent.click(linkToHome)
  //   expect(titleNotFound).toBeInTheDocument()
  // })
})
