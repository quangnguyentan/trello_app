import LightModeIcon from '@mui/icons-material/LightMode'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Box from '@mui/material/Box'
import {
  useColorScheme
} from '@mui/material/styles'
function ModeSelect() {
  
  const { mode, setMode } = useColorScheme()
  const handleChange = (event) => {
    const selectedMode = event.target.value
    setMode(selectedMode)
  }
  return (
    <FormControl sx={{ minWidth : 120 }} size="small" >
      <InputLabel sx={{ color : 'blue' }} id="label-select-dark-light-mode">Mode</InputLabel>
      <Select
        labelId="label-select-dark-light-mode"
        id="select-dark-light-mode"
        value={mode}
        label="Mode"
        onChange={handleChange}
        sx={{ border : 'none' }}
      > 
        <MenuItem value="light">
          <Box sx={{ display : 'flex', alignItems : 'center', gap: 1 }}>
            <LightModeIcon/> Light
          </Box>
        </MenuItem>
        <MenuItem value="dark">
          <Box sx={{ display : 'flex', alignItems : 'center', gap: 1 }}>
            <DarkModeIcon/> Dark
          </Box>
        </MenuItem>
        <MenuItem value="system">
          <Box sx={{ display : 'flex', alignItems : 'center', gap: 1 }}>
            <SettingsBrightnessIcon/>
            System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  )
}

export default ModeSelect