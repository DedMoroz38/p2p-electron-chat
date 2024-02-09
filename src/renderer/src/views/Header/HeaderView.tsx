import { ThemeSwitch } from '@renderer/components/ui/ThemeSwitch'
import { observer } from 'mobx-react-lite'
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
  grid-area: header;
  border-bottom: black 1px solid;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
