import Head from 'next/head'
import styles from './layout.module.css'
import { motion } from 'framer-motion'

const name = '[Inês Pinheiro]'
export const siteTitle = 'Inês Pinheiro'

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
};

export default function Layout({
  children,
  home
}: {
  children: React.ReactNode
  home?: boolean
}) {

  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Personal Website"
        />
        <meta
          property="og:image"
          content={`https://i.vimeocdn.com/portrait/51114519_60x60.jpg?subrect=0%2C61%2C1080%2C1141&r=cover`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <motion.div
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ type: 'linear' }}
      >
        {/* <Navbar dark={false} /> */}
        <main>{children}</main>
        {/* <Footer /> */}
      </motion.div>
    </div>
  )
}
