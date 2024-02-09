import { MessageFlow } from '@renderer/enums/MessageFlow'

export type Message = {
  text: string
  flow: MessageFlow
}

export type IncomingMessage = Message & { flow: MessageFlow.Incoming }

export type OutgoingMessage = Message & { flow: MessageFlow.Outgoing }
