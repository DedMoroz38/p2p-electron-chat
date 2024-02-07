import styled, { ThemeProvider } from 'styled-components'
import { SideBarView } from './views/SideBar/SideBarView'
import { ChatView } from './views/Chat/ChatView'
import { HeaderView } from './views/Header/HeaderView'
import { useStores } from './hooks/use-stores'
import { observer } from 'mobx-react'
import { useEffect } from 'react'

const App = observer((): JSX.Element => {
  const { theme } = useStores().themeStore

  useEffect(() => {
    console.log(theme)
  }, [theme])

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <HeaderView />
        <SideBarView />
        <ChatView />
      </Wrapper>
    </ThemeProvider>
  )
})

export default App

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'header header header'
    'sidebar chat chat';
  grid-template-rows: 50px calc(100vh - 50px);
  grid-template-columns: 300px 1fr;
  background: ${({ theme }) => theme.bgColor};
`
