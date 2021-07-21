import { render } from '@testing-library/react'
import CategoriesContext from '../../contexts/CategoriesContext'
import FilterContext from '../../contexts/FilterContext'
import LoadingContext from '../../contexts/LoadingContext'
import MessageContext from '../../contexts/MessageContext'
import ProductsPage from './ProductsPage'

describe('ProductsPage Component', () => {
  test('Deve renderizar o Component', () => {
    let filter = ''
    let message = ''
    let categories = {
      all: [
        {
          id: 1,
          label: 'Novidades',
          link: '#home'
        }
      ],
      current: [
        {
          id: 1,
          link: '#home',
          name: 'Home'
        }
      ]
    }
    let setFilter = (term) => (filter = term)
    let setMessage = (term) => (message = term)
    let setCategories = (newCategories) => (categories = newCategories)
    render(
      <FilterContext.Provider value={{ filter, setFilter }}>
        <LoadingContext.Provider
          value={{
            addRequest: () => null,
            removeRequest: () => null,
            isLoading: () => false
          }}
        >
          <MessageContext.Provider value={{ message, setMessage }}>
            <CategoriesContext.Provider
              value={{
                categories,
                setCategories
              }}
            >
              <ProductsPage />
            </CategoriesContext.Provider>
          </MessageContext.Provider>
        </LoadingContext.Provider>
      </FilterContext.Provider>
    )
  })
})
