import Button from '@mui/material/Button'
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material'
import Typography from '@mui/material/Typography'
function App() {
  return (
    <>
      <div>nguyentanquang</div>
      <Typography variant='h1' color='text.secondary'> abc </Typography>
      <AccessAlarm color='success' />
      <ThreeDRotation fontSize='large' />
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </>
  )
}

export default App
