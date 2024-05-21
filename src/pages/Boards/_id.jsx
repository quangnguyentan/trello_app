import Container from '@mui/material/Container'
import BoardBar from './BoardBar'
import AppBar from '~/components/AppBar'
// One of them is the way to import absolute
import BoardContent from './BoardContent'
// import BoardContent from '~/pages/Boards/BoardContent'

function Board() {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      <AppBar/>
      <BoardBar/>
      <BoardContent/>
    </Container>
  )
}

export default Board