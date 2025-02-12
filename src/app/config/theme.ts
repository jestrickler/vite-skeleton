import { createTheme } from '@mui/material'

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f50b5'
    },
    secondary: {
      main: '#C75000'
    }
  }
})

export const getTheme = () => theme
