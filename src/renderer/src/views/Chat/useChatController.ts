import { CustomEvents } from '@renderer/enums/CustomEvents'
import { MessageFlow } from '@renderer/enums/MessageFlow'
import { useHandleCustomEvent } from '@renderer/hooks/useHandleCustomEvent'
import { useKeyPressed } from '@renderer/hooks/useKeyPressed'
import { useLocalObservable } from 'mobx-react-lite'
import { useRef } from 'react'
import { ChatViewModel } from './ChatViewModel'

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

  useKeyPressed(inputRef, sendMessage, 'Enter')
  useHandleCustomEvent(chatVM.addReceivedMessage.bind(chatVM), CustomEvents.MessageReceived)

  return {
    inputRef,
    sendMessage,
    messages: chatVM.messages
  }
}
