import Box from '@mui/material/Box'
import AppIcons from '@mui/icons-material/Apps'
import { ReactComponent as TrelloIcon } from '~/assets/trello.svg'
import SvgIcon from '@mui/material/SvgIcon'
import Typography from '@mui/material/Typography'
import Workspaces from './Menus/Workspaces'
import Recent from './Menus/Recent'
import Started from './Menus/Started'
import Templates from './Menus/Templates'
import Created from './Menus/Created'
import TextField from '@mui/material/TextField'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import Badge from '@mui/material/Badge'
import Tooltip from '@mui/material/Tooltip'
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined'
import Profile from './Menus/Profile'
function AppBar() {
  return (
    <Box px={2} sx={{ width : '100%',
      height : (theme) => theme.trello.appBarHeight,
      display : 'flex',
      alignItems : 'center',
      justifyContent : 'space-between',
      gap : 2,
      overflowX : 'auto'
    }}> 
      <Box sx={{ display: 'flex', gap : 2, alignItems : 'center' }} > 
        <AppIcons sx={{ color: 'primary.main' }} />
        <Box sx={{ display: 'flex', gap : .5, alignItems : 'center' }}> 
          <SvgIcon component={TrelloIcon} fontSize='small' inheritViewBox sx={{ color: 'primary.main' }} />
          <Typography variant='span' sx={{ fontSize : '1.2rem', fontWeight : 'bold', color : 'primary.main' }} >Trello </Typography>
        </Box>
        <Box sx={{ display : { xs : 'none', md : 'flex' }, gap  : 1 }}>
          <Workspaces/>
          <Recent/>
          <Started/>
          <Templates/>
          <Created/>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', gap : 2, alignItems : 'center' }}>
        <TextField
          id="outlined-search"
          label="Search field"
          type="search"
          size='small'
          sx={{ minWidth : 120 }}
        />
        <Tooltip title="Notification">
          <Badge color="secondary" variant="dot" sx={{ cursor : 'pointer' }} >
            <NotificationsNoneOutlinedIcon sx={{ color : 'primary.main' }} />
          </Badge>
        </Tooltip>
        <Tooltip title="Information" >
          <HelpOutlineOutlinedIcon sx={{ cursor : 'pointer', color : 'primary.main' }} />
        </Tooltip>
        <Profile/>
      </Box>
    </Box>
  )
}

export default AppBar