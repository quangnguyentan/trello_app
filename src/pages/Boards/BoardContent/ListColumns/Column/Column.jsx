import { useState } from 'react'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import Box from '@mui/material/Box'
import MenuItem from '@mui/material/MenuItem'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import ContentCut from '@mui/icons-material/ContentCut'
import ContentCopy from '@mui/icons-material/ContentCopy'
import ContentPaste from '@mui/icons-material/ContentPaste'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import Cloud from '@mui/icons-material/Cloud'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Tooltip from '@mui/material/Tooltip'
import AddCardIcon from '@mui/icons-material/AddCard'
import Button from '@mui/material/Button'
import DragHandleIcon from '@mui/icons-material/DragHandle'
import ListCards from './ListCards/ListCards'
function Column() {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <Box sx={{
      minWidth : '300px',
      maxWidth : '300px',
      bgcolor : (theme) => (theme.palette.mode === 'dark' ? '#333643' : '#ebecf0'),
      ml : 2,
      borderRadius : '6px',
      height : 'fit-content',
      maxHeight : (theme) => `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)})` 
    }}>
      {/* Board Header */}
      <Box sx={{
        height : (theme) => theme.trello.columnHeaderHeight,
        p : 2,
        display : 'flex', 
        alignItems : 'center',
        justifyContent : 'space-between'
      }} >
        <Typography 
          variant='h6'
          sx={{ fontWeight: 'bold', cursor: 'pointer', fontSize : '1rem' }}
        >Column Title</Typography>
        <Box>
          <Tooltip title='More Options'>
            <ExpandMoreIcon 
              sx={{ cursor: 'pointer', color : 'text.primary' }}
              id="basic-column-dropdown"
              aria-controls={open ? 'basic-menu-dropdown' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            />
          </Tooltip>
          <Menu
            id="basic-menu-dropdown"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-column-dropdown'
            }}
          >
            <MenuItem>
              <ListItemIcon>
                <ContentCut fontSize="small" />
              </ListItemIcon>
              <ListItemText>Cut</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <AddCardIcon fontSize="small" />
              </ListItemIcon> 
              <ListItemText>Add New Card</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <ContentCopy fontSize="small" />
              </ListItemIcon>
              <ListItemText>Copy</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <ContentPaste fontSize="small" />
              </ListItemIcon>
              <ListItemText>Past</ListItemText>
            </MenuItem>
            <Divider />
            <MenuItem>
              <ListItemIcon>
                <DeleteForeverIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Remove this column</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <Cloud fontSize="small" />
              </ListItemIcon>
              <ListItemText>Archive this column</ListItemText>
            </MenuItem>
          </Menu>
        </Box>
      </Box>
      <ListCards/>
      {/* Board Footer */}
      <Box sx={{
        height : (theme) => theme.trello.columnFooterHeight,
        p : 2,
        display : 'flex', 
        alignItems : 'center',
        justifyContent : 'space-between'
      }} >
        <Button startIcon={<AddCardIcon/>}>
          Add New Card
        </Button>
        <Tooltip title="Drag to move">
          <DragHandleIcon sx={{ cursor : 'pointer' }} />
        </Tooltip>
      </Box>
    </Box>
  )
}

export default Column