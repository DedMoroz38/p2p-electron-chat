import { observer } from 'mobx-react-lite'
import styled, { ThemeProvider } from 'styled-components'
import { useStores } from './hooks/useStores'
import { ChatView, HeaderView, SideBarView } from './views'

const App = observer((): JSX.Element => {
  const { theme } = useStores().themeStore

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
  background: ${({ theme }) => theme.bgColor.primary};
`
