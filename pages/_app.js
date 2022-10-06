import '../styles/globals.css'
import { ThemeProvider } from '@mui/material/styles';
import Theme from "../styles/theme"

function MyApp({ Component, pageProps }) {
  return <ThemeProvider theme={Theme}>
    <Component {...pageProps} />
  </ThemeProvider>
  
}

export default MyApp
