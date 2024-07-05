import Container from '@mui/material/Container'
import BoardBar from './BoardBar/BoardBar'
import AppBar from '~/components/AppBar/AppBar'
// One of them is the way to import absolute
import BoardContent from './BoardContent/BoardContent'
// import BoardContent from '~/pages/Boards/BoardContent'
import { mockData } from '~/apis/mock-data'
function Board() {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      <AppBar/>
      <BoardBar board={mockData?.board}/>
      <BoardContent board={mockData?.board}/>
    </Container>
  )
}

export default Board