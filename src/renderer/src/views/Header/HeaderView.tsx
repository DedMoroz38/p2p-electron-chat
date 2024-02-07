import { ThemeSwitch } from '@renderer/components/ui/ThemeSwitch'
import { observer } from 'mobx-react'
import styled from 'styled-components'
import { useHeaderController } from './useHeaderController'

export const HeaderView = observer(() => {
  const { toggleTheme, checked } = useHeaderController()

  return (
    <Wrapper>
      <ThemeSwitch handleChange={toggleTheme} checked={checked} />
    </Wrapper>
  )
})

const Wrapper = styled.header`
  border: 1px solid green;
  grid-area: chat;
`
