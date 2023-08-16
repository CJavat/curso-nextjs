import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { lightTheme, darkTheme } from '@/themes'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={ darkTheme }>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
