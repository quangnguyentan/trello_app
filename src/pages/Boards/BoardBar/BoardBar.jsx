import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import { capitalizeFirstLetter } from '~/utils/formatter'
const MENU_STYLES = {
  px : '5px', color : 'white', backgroundColor : 'transparent', border : 'none', borderRadius : '4px', '.MuiSvgIcon-root' : {
    color : 'white'
  }, '&:hover' : {
    backgroundColor : 'primary.50' 
  }
}
function BoardBar({ board }) {
  return (
    <Box sx={{ 
      width : '100%',
      height :  (theme) => theme.trello.boardBarHeight,
      display : 'flex',
      alignItems : 'center',
      justifyContent : 'space-between',
      gap : 2,
      paddingX : 2,
      overflowX : 'auto',
      '&::-webkit-scrollbar-track' : {
        m : 2
      },
      bgcolor : (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2')
    }}> 
      <Box sx={{ display: 'flex', gap : 2, alignItems : 'center' }} > 
        <Chip 
          sx={ MENU_STYLES }
          icon={<DashboardIcon />} clickable label={board?.title} />
        <Chip 
          sx={MENU_STYLES}
          icon={<VpnLockIcon />} clickable label={capitalizeFirstLetter(board?.type)}/>
        <Chip 
          sx={MENU_STYLES}
          icon={<AddToDriveIcon />} clickable label="Add To Google Drive" />
        <Chip 
          sx={MENU_STYLES}
          icon={<BoltIcon />} clickable label="Automation" />
        <Chip 
          sx={MENU_STYLES}
          icon={<FilterListIcon />} clickable label="Filters" />
      </Box>
      <Box sx={{ display: 'flex', gap : 2, alignItems : 'center' }} > 
        <Button variant='outlined' startIcon={<PersonAddIcon/>} sx={{ color : 'white', borderColor : 'white', '&:hover' : {
          borderColor : 'white'
        } }} >
          Invite
        </Button>
        <AvatarGroup total={24}
          max={7}
          sx={{ gap : '10px', '& .MuiAvatar-root' : {
            width : 34,
            height : 34,
            fontSize : 16,
            border : 'none',
            color : 'white',
            cursor : 'pointer',
            '&:first-of-type' : {
              bgcolor : '#a4b0be'
            }
          } }}
        >
          <Tooltip title={board?.title}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar