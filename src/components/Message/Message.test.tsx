import { fireEvent, render, screen } from '@testing-library/react'
import Message from '.'
import MessageContext from '../../contexts/MessageContext'

describe('Message Component', () => {
  test('Deve renderizar component Message', () => {
    render(
      <MessageContext.Provider
        value={{ message: 'message test', setMessage: () => null }}
      >
        <Message />
      </MessageContext.Provider>
    )

    const element = screen.getByText('message test')

    expect(element).toBeInTheDocument()
  })

  test('Não deve renderizar component Message', () => {
    render(
      <MessageContext.Provider value={{ message: '', setMessage: () => null }}>
        <Message />
      </MessageContext.Provider>
    )

    const element = screen.getByTestId('notMessage')

    expect(element).toBeInTheDocument()
  })
  test('Testa função setMessage', () => {
    render(
      <MessageContext.Provider
        value={{ message: 'message test', setMessage: () => null }}
      >
        <Message />
      </MessageContext.Provider>
    )

    const element = screen.getByTestId('closebtn')
    fireEvent.click(element)
    expect(element).toBeInTheDocument()
  })
})
