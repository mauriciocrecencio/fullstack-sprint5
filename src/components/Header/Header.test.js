import { fireEvent, render, screen } from '@testing-library/react'
import Header from '.'
import FilterContext from '../../contexts/FilterContext'
import Menu from '../Menu'

jest.mock('../Menu/index.tsx')

beforeEach(() => Menu.mockImplementation(() => <div>Menu Mock</div>))

describe('Header Component', () => {
  test('Deve renderizar o component Header', () => {
    render(
      <FilterContext.Provider value={{ filter: 'a', setFilter: () => null }}>
        <Header />
      </FilterContext.Provider>
    )
  })

  test('Deve testar a função de Filtrar', () => {
    let filter = 'a'
    const setFilter = (f) => (filter = f)
    render(
      <FilterContext.Provider value={{ filter, setFilter }}>
        <Header />
      </FilterContext.Provider>
    )
    const input = screen.getByRole('search')

    fireEvent.change(input, { target: { value: 'camisetas' } })

    expect(filter).toBe('camisetas')
  })
})
