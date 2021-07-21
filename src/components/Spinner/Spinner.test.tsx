import { render, screen } from '@testing-library/react'
import LoadingContext from '../../contexts/LoadingContext'
import Spinner from './index'

describe('Spinner component', () => {
  test('Renderizar component Spinner', () => {
    render(
      <LoadingContext.Provider
        value={{
          addRequest: () => null,
          removeRequest: () => null,
          isLoading: () => true
        }}
      >
        <Spinner />
      </LoadingContext.Provider>
    )
    const element = screen.getByTestId('loading')
    expect(element).toBeInTheDocument()
  })
  test('Não deve renderizar component Spinner', () => {
    render(
      <LoadingContext.Provider
        value={{
          addRequest: () => null,
          removeRequest: () => null,
          isLoading: () => false
        }}
      >
        <Spinner />
      </LoadingContext.Provider>
    )
    const element = screen.getByTestId('Notloading')
    expect(element).toBeInTheDocument()
  })
})
