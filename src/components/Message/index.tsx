import { useContext } from 'react'
import MessageContext from '../../contexts/MessageContext'
import './Message.css'

function Message() {
  const { message, setMessage } = useContext(MessageContext)

  return message ? (
    <div data-testid="message" className="alert">
      <span
        data-testid="closebtn"
        className="closebtn"
        onClick={() => setMessage('')}
      >
        &times;
      </span>
      {message}
    </div>
  ) : (
    <div data-testid="notMessage"></div>
  )
}

export default Message
