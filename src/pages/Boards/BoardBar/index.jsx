import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
const MENU_STYLES = {
  px : 5, color : 'primary.main', backgroundColor : 'white', border : 'none', borderRadius : '4px', '& .MuiSvgIcon-root' : {
    color : 'primary.main'
  }, '&:hover' : {
    backgroundColor : 'primary.50' 
  }
}
function BoardBar() {
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
      borderTop : '1px solid #00bfa5'
    }}> 
      <Box sx={{ display: 'flex', gap : 2, alignItems : 'center' }} > 
        <Chip 
          sx={ MENU_STYLES }
          icon={<DashboardIcon />} clickable label="Dash Board" />
        <Chip 
          sx={MENU_STYLES}
          icon={<VpnLockIcon />} clickable label="Public/Private Workspace" />
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
        <AvatarGroup total={24}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar