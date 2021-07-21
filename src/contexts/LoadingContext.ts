import React from 'react'

const LoadingContext = React.createContext<{
  addRequest: () => void
  removeRequest: () => void
  isLoading: () => boolean
}>(null!)

export default LoadingContext
