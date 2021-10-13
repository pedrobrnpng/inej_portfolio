import '../styles/global.css'
import { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <Navbar dark={true} />

      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} />
      </AnimatePresence>

      <Footer />
    </>
  )
}
