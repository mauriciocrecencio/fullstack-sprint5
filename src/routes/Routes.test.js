import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import App from '../App'
import CategoriesContext from '../contexts/CategoriesContext'
import FilterContext from '../contexts/FilterContext'
import LoadingContext from '../contexts/LoadingContext'
import MessageContext from '../contexts/MessageContext'
let filter = ''
let message = ''
let categories = {
  all: [
    {
      id: 1,
      label: 'Novidades',
      link: '#home',
    },
  ],
  current: [
    {
      id: 1,
      link: '#home',
      name: 'Home',
    },
  ],
}
describe('Routes Component', () => {
  test('Deve renderizar o componente', () => {
    let setFilter = (term) => (filter = term)
    let setMessage = (term) => (message = term)
    let setCategories = (newCategories) => (categories = newCategories)
    render(
      <FilterContext.Provider value={{ filter, setFilter }}>
        <LoadingContext.Provider
          value={{
            addRequest: () => null,
            removeRequest: () => null,
            isLoading: () => false,
          }}
        >
          <MessageContext.Provider value={{ message, setMessage }}>
            <CategoriesContext.Provider
              value={{
                categories,
                setCategories,
              }}
            >
              <App />
            </CategoriesContext.Provider>
          </MessageContext.Provider>
        </LoadingContext.Provider>
      </FilterContext.Provider>,
    )
    screen.debug
  })
})
