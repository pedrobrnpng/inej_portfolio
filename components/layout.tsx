import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = '[Inês Pinheiro]'
export const siteTitle = 'Inês Pinheiro'

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
      
      <main>{children}</main>
      
    </div>
  )
}
