import { cyan, deepOrange, orange, teal } from '@mui/material/colors'
import { experimental_extendTheme as extendTheme } from '@mui/material/styles'
// Create a theme instance.

const theme = extendTheme({
  trello : {
    appBarHeight : '58px',
    boardBarHeight : '60px'
  },
  colorSchemes: {
    light: {
      palette: {
        primary: teal,
        secondary : deepOrange
      }
    },
    dark: {
      palette: {
        primary : cyan,
        secondary : orange
      }
    }
  },
  components: {
    MuiCssBaseline : {
      styleOverrides :  {
        body : {
          '*::-webkit-scrollbar' :{
            width : 8,
            height : 8
          },
          '*::-webkit-scrollbar-thumb' :{
            backgroundColor : '#bdc3c7'
          },
          '*::-webkit-scrollbar-thumb:hover' :{
            backgroundColor : '#00b894'
          }
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          textTransform : 'none'
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        // Name of the slot
        root: ({ theme }) => (
          {
            color : theme.palette.primary.main,
            fontSize : '0.875 rem'  
          }
        )
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        // Name of the slot
        root: ({ theme }) => (
          {
            color : theme.palette.primary.main,
            fontSize : '0.875 rem',
            '.MuiOutlinedInput-notchedOutline' : {
              borderColor : theme.palette.primary.light
            },
            'MuiInputLabel': {
              borderColor : theme.palette.primary.light
            },
            '&:hover' : {
              '.MuiOutlinedInput-notchedOutline' : {
                borderColor : theme.palette.primary.light
              }
            },
            '& fieldset' : {
              borderWidth : '1px !important'
            }
          }
        )
      }
    }
  }
})
export default theme