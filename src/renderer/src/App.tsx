import styled from 'styled-components'
import { SideBarView } from './views/SideBar/SideBarView'
import { ChatView } from './views/Chat/ChatView'

function App(): JSX.Element {
  return (
    <Wrapper>
      <SideBarView />
      <ChatView />
    </Wrapper>
  )
}
export default App

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-template-rows: 100vh;
`
