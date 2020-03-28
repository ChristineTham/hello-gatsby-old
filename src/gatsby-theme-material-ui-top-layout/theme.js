import { createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme({
  typography: {
    fontFamily: ['Roboto', 'sans-serif'].join(','),
  },
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: '#ff0000',
    },
    background: {
      default: '#fff',
    },
  },
})

export default theme;
