import '../styles/globals.css'
import { createTheme, ThemeProvider } from '@mui/material'

const theme = createTheme({
  palette: {
    primary: {
      main: '#256D85'
    },
    secondary: {
      main: '#DFF6FF'
    }
  },
  typography: {
    fontFamily: 'Montserrat',
    h6: {
      fontFamily: 'Ubuntu'
    }
  }
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
