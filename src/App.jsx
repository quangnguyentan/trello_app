import Button from '@mui/material/Button'
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material'

function App() {
  return (
    <>
      <AccessAlarm color='success' />
      <ThreeDRotation fontSize='large'/>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </>
  )
}

export default App
