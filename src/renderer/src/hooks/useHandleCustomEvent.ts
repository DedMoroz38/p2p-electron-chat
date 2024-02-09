import { CustomEvents } from '@renderer/enums/CustomEvents'
import { useEffect } from 'react'

export const useHandleCustomEvent = <T>(callBack: (param: T) => void, event: CustomEvents) => {
  useEffect(() => {
    const handleNewMessage = (e: { detail: T }) => {
      callBack(e.detail)
    }

    // @ts-ignore
    window.addEventListener(event, handleNewMessage)

    return () => {
      // @ts-ignore
      window.removeEventListener(event, handleNewMessage)
    }
  })
}
