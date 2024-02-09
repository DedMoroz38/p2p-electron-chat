import { MutableRefObject, useEffect } from 'react'

export const useKeyPressed = (
  inputRef: MutableRefObject<HTMLInputElement>,
  callBack: () => void,
  key: KeyboardEvent['key']
) => {
  useEffect(() => {
    const handleEnterKey = (event: KeyboardEvent) => {
      if (event.key === key) {
        callBack()
      }
    }

    inputRef.current?.addEventListener('keydown', handleEnterKey)

    return () => {
      inputRef.current?.removeEventListener('keydown', handleEnterKey)
    }
  }, [inputRef, callBack, key])
}
