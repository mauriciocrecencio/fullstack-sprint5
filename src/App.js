import { useContext, useEffect } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header/'
import Spinner from './components/Spinner'
import CategoriesContext from './contexts/CategoriesContext'
import LoadingContext from './contexts/LoadingContext'
import MessageContext from './contexts/MessageContext'
import Routes from './routes/Routes'
import CategoriesService from './services/CategoriesService'
import { GlobalStyle } from './styles/GlobalStyle'

function App() {
  const { setMessage } = useContext(MessageContext)
  const { setCategories } = useContext(CategoriesContext)

  const { addRequest, removeRequest } = useContext(LoadingContext)
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
    <>
      <Spinner />
      <div className="page-container">
        <Header />

        <GlobalStyle />
        <Routes />
      </div>
      <Footer />
    </>
  )
}

export default App
