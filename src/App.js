import { useEffect, useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header/'
import Spinner from './components/Spinner'
import CategoriesContext from './contexts/CategoriesContext'
import FilterContext from './contexts/FilterContext'
import LoadingContext from './contexts/LoadingContext'
import MessageContext from './contexts/MessageContext'
import useLoading from './hooks/useLoading'
import Routes from './routes/Routes'
import CategoriesService from './services/CategoriesService'
import { GlobalStyle } from './styles/GlobalStyle'

function App() {
  const [filter, setFilter] = useState('')
  const [message, setMessage] = useState('')
  const [categories, setCategories] = useState({})
  const [addRequest, removeRequest, isLoading] = useLoading()

  // eslint-disable-next-line
  useEffect(() => loadCategories(), [])

  function loadCategories() {
    addRequest()
    CategoriesService.get()
      .then((c) => setCategories(c))
      .catch(() => setMessage('Ocorreu um erro ao carregar as categorias...'))
      .finally(() => removeRequest())
  }

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      <LoadingContext.Provider value={{ addRequest, removeRequest, isLoading }}>
        <MessageContext.Provider value={{ message, setMessage }}>
          <CategoriesContext.Provider value={{ categories }}>
            <Spinner></Spinner>
            <div className="page-container">
              <Header></Header>

              <GlobalStyle />
              <Routes />
            </div>
            <Footer></Footer>
          </CategoriesContext.Provider>
        </MessageContext.Provider>
      </LoadingContext.Provider>
    </FilterContext.Provider>
  )
}

export default App
