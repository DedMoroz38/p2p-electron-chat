import { useLocalObservable } from 'mobx-react-lite'
import { useEffect, useRef } from 'react'
import { ChatViewModel } from './ChatViewModel'
import { MessageFlow } from '@renderer/enums/MessageFlow'

export const useChatController = () => {
  const chatVM = useLocalObservable(() => new ChatViewModel())
  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>

  const sendMessage = () => {
    const newMessage = inputRef.current.value.trim()
    chatVM.sendNewMessage({
      text: newMessage,
      flow: MessageFlow.Outgoing
    })

    clearInput()
  }

  const clearInput = () => {
    inputRef.current.value = ''
  }

  useEffect(() => {
    const listener = window.ElectronApi.onMessageReceived(chatVM.addReceivedMessage.bind(chatVM))

    return () => {
      window.ElectronApi.removeMessageReceivedListener(listener)
    }
  })

  return {
    inputRef,
    sendMessage,
    messages: chatVM.messages
  }
}
