import { sendMessageIcon } from '@renderer/assets/icons'
import { MutableRefObject } from 'react'
import styled from 'styled-components'

type InputAreaProps = {
  inputRef: MutableRefObject<HTMLInputElement>
  sendMessage: () => void
}

export const InputArea = ({ inputRef, sendMessage }: InputAreaProps) => {
  return (
    <Wrapper>
      <input ref={inputRef} placeholder="Write a message..." type="text" />
      <button onClick={sendMessage}>
        <img src={sendMessageIcon} alt="" />
      </button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50px;
  border-radius: 10px;
  padding: 0 15px 0 5px;
  background: ${({ theme }) => theme.bgColor.secondary};
  align-items: center;

  & > input {
    width: 80%;
    padding: 0 10px;
    background: transparent;
    color: white;
    font-size: 16px;
    &::placeholder {
      padding-left: 5px;
    }
  }

  & > button {
    background: #f6fc93;
    height: 32px;
    width: 32px;
    border-radius: 12px;
    padding-left: 4px;
    & > img {
      height: 18px;
      width: 18px;
      transform: rotate(-45deg);
    }
  }
`
