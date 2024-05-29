import Box from '@mui/material/Box'
import React, { useState } from 'react'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Divider from '@mui/material/Divider'
import ListItemIcon from '@mui/material/ListItemIcon'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import Avatar from '@mui/material/Avatar'
import PersonAdd from '@mui/icons-material/PersonAdd'
import Settings from '@mui/icons-material/Settings'
import Logout from '@mui/icons-material/Logout'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import ModeSelect from '~/components/ModeSelect/ModeSelect'
function Profile() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [openTheme, setOpenTheme] = useState(false)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
    
  }
  const handleTheme = (event) => {
    setOpenTheme(event.currentTarget)
  }
  const handleCloseTheme = () => {
    setOpenTheme(false)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
       
    <Box >
      <Tooltip title="Account settings">
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ padding: 0 }}
          aria-controls={open ? 'basic-button-profile' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
        </IconButton>
      </Tooltip>
      <Menu
        id="basic-menu-profile"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button-profile'
        }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar sx={{ width : 34, height : 34, mr : 2 }} /> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar sx={{ width : 28, height : 28, mr : 2 }} /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <Box
          sx={{ ':hover' : {
            backgroundColor : 'gray'
          }, display : 'flex', paddingLeft : 2, paddingY : 0.8, justifyContent : 'space-between', cursor : 'pointer', position : 'relative', '&::before' : {
            content: '""',
            // backgroundColor : 'red',
            position: 'absolute',
            left: 0,
            bottom: 0,
            height : '100%',
            borderLeft: '3px solid #0c66e4',
            borderRadius : 5
          }
          }}
          aria-label="more"
          id="long-button"
          aria-controls={openTheme ? 'long-menu' : undefined}
          aria-expanded={openTheme ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleTheme}
        >
          Theme
          <ListItemIcon
          >
            <NavigateNextIcon fontSize="small" />
          </ListItemIcon>      
        </Box>
        <Menu
          id="long-menu"
          MenuListProps={{
            'aria-labelledby': 'long-button'
          }}
          anchorEl={openTheme}
          open={openTheme}
          onClose={handleCloseTheme}
          sx={{ display : 'list-item', position : 'absolute', top : -10, left : '-12%', bottom : 0 }}
        >
          <MenuItem 
            sx={{ display : 'list-item' }}  
          > 
            <ModeSelect/>
          </MenuItem>
        </Menu>
        
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </Box>
  )
}

export default Profile