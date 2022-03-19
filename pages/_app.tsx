import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { FilterProvider } from '../providers/FilterProvider'
import { ThemeProvider } from '../providers/ThemeProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <FilterProvider>
        <Component {...pageProps} />
      </FilterProvider>
    </ThemeProvider>
  )
}

export default MyApp
