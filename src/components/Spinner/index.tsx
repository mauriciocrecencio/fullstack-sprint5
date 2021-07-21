import { useContext } from 'react'
import LoadingContext from '../../contexts/LoadingContext'
import './Spinner.css'

function Spinner() {
  const { isLoading } = useContext(LoadingContext)

  return isLoading() ? (
    <div data-testid="loading" className="loading"></div>
  ) : (
    <div data-testid="Notloading"></div>
  )
}

export default Spinner
