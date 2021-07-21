import React from 'react'

const MessageContext = React.createContext<{
  message: string
  setMessage: (message: string) => void
}>(null!)

export default MessageContext
