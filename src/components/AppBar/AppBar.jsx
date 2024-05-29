import { useState } from 'react'
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
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'
function AppBar() {
  const [searchValue, setSearchValue] = useState('')
  return (
    <Box sx={{ width : '100%',
      height : (theme) => theme.trello.appBarHeight,
      display : 'flex',
      paddingX : 2,
      alignItems : 'center',
      justifyContent : 'space-between',
      gap : 2,
      overflowX : 'auto',
      '&::-webkit-scrollbar-track' : {
        m : 2
      },
      bgcolor : (theme) => (theme.palette.mode === 'dark' ? '#2c3e50' : '#1565c0')
    }}> 
      <Box sx={{ display: 'flex', gap : 2, alignItems : 'center' }} > 
        <AppIcons sx={{ color: 'white' }} />
        <Box sx={{ display: 'flex', gap : .5, alignItems : 'center' }}> 
          <SvgIcon component={TrelloIcon} fontSize='small' inheritViewBox sx={{ color: 'white' }} />
          <Typography variant='span' sx={{ fontSize : '1.2rem', fontWeight : 'bold', color : 'white' }} >Trello </Typography>
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
          type="text"
          size='small'
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          sx={{ 
            minWidth : 120,
            maxWidth : 170,
            '& label' : {
              color : 'white'
            },
            '& input' : {
              color : 'white'
            },
            '& label.Mui-focused' : {
              color : 'white'
            },
            '& .MuiOutlinedInput-root' : {
              '& fieldset' : {
                borderColor : 'white'
              },
              '&:hover fieldset' : {
                borderColor : 'white'
              },
              '&.Mui-focused fieldset' : {
                borderColor : 'white'
              }
            }

          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color : 'white' }} />
              </InputAdornment>
            ),
            endAdornment : (
              <InputAdornment position="end">
                <CloseIcon sx={{ color : searchValue ? 'white' : 'transparent', cursor : 'pointer' }} fontSize='small' onClick={() => setSearchValue('')} />
              </InputAdornment>
            )
          }}
        />
        <Tooltip title="Notification">
          <Badge color="warning" variant="dot" sx={{ cursor : 'pointer' }} >
            <NotificationsNoneOutlinedIcon sx={{ color : 'white' }} />
          </Badge>
        </Tooltip>
        <Tooltip title="Information" >
          <HelpOutlineOutlinedIcon sx={{ cursor : 'pointer', color : 'white' }} />
        </Tooltip>
        <Profile/>
      </Box>
    </Box>
  )
}

export default AppBar