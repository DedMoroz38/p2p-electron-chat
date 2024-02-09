import { MessageFlow } from '@renderer/enums/MessageFlow'
import { Message, OutgoingMessage } from '@renderer/types/Message'
import { makeAutoObservable } from 'mobx'

export class ChatViewModel {
  private _messages: Message[] = []

  get messages() {
    return this._messages
  }

  constructor() {
    makeAutoObservable(this)
  }

  public addReceivedMessage(message: { message: string }) {
    this._messages.push({
      text: message.message,
      flow: MessageFlow.Incoming
    })
  }

  public sendNewMessage(message: OutgoingMessage) {
    if (this.isMessageValid(message)) {
      self.ElectronApi.sendMessage(message.text)
      this._messages.push(message)
    }
  }

  private isMessageValid(message: OutgoingMessage) {
    return message.text === '' ? false : true
  }
}
