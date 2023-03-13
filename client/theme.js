import { createTheme } from '@mui/material/styles'
import { orange } from '@mui/material/colors'

const customTheme = createTheme({
  palette: {
    status: {
      light: orange[500],
      dark: orange[200]
    }
  }
})

export default customTheme
