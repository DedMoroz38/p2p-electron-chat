import { MessageFlow } from '@renderer/enums/MessageFlow'
import { Message } from '@renderer/types/Message'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'

type ChatAreaPorps = {
  messages: Message[]
}

export const ChatArea = observer(({ messages }: ChatAreaPorps) => {
  return (
    <Wrapper>
      {messages.map((message: Message, i: number) => {
        if (message.flow === MessageFlow.Incoming) {
          return <IncommingMessage key={i}>{message.text}</IncommingMessage>
        }
        return <OutgoingMessage key={i}>{message.text}</OutgoingMessage>
      })}
    </Wrapper>
  )
})

const Wrapper = styled.div`
  height: 100%;
  padding: 15px;
  overflow-y: scroll;
`

const MessageWrapper = styled.p`
  width: fit-content;
  max-width: 70%;
  color: black;
  margin-bottom: 20px;
  padding: 4px 8px;
  border-radius: 2px 8px 8px 8px;
  word-wrap: break-word;
  overflow-wrap: break-word;
`

const IncommingMessage = styled(MessageWrapper)`
  background: #f6fc93;
`

const OutgoingMessage = styled(MessageWrapper)`
  background: #b786f4;
  border-radius: 8px 2px 8px 8px;
  color: white;
  margin-left: auto;
`
