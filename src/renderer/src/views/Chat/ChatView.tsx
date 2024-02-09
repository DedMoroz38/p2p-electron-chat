import styled from 'styled-components'
import { ChatArea } from './components/ChatArea'
import { InputArea } from './components/InputArea'
import { useChatController } from './useChatController'

export const ChatView = () => {
  const { inputRef, sendMessage, messages } = useChatController()

  return (
    <Wrapper>
      <ChatArea messages={messages} />
      <InputArea inputRef={inputRef} sendMessage={sendMessage} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  grid-area: chat;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 15px;
`
