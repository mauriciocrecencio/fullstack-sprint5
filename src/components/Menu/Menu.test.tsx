import { screen } from '@testing-library/dom'
import { render } from '@testing-library/react'
import CategoriesContext from '../../contexts/CategoriesContext'
import Menu from './index'

describe('Menu Component', () => {
  test('Deve renderizar o Menu', () => {
    render(
      <CategoriesContext.Provider
        value={{
          categories: {
            all: [{ id: 0, label: 'Novidades', link: '#' }],
            current: [{ id: 0, link: '#', name: 'BreadCrumb Test' }],
          },
          setCategories: () => null,
        }}
      >
        <Menu />
      </CategoriesContext.Provider>,
    )

    const element = screen.getByText(/Novidades/i)
    expect(element).toBeInTheDocument()
  })
})
