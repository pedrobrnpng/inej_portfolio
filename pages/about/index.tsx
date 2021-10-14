import { getData } from '../../lib/aboutme'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import utilStyles from './aboutme.module.css'
import Image from 'next/image'
import Layout from "../../components/layout"
import { motion } from 'framer-motion'
import SocialIcons from '../../components/shared-components/social-icons'

export default function AboutMe({
  pageData
}: {
  pageData: {
    contentHtml: string
  }
}) {
  return (
    <div>
      <Head>
        <title>About Me</title>
      </Head>
      <div>
        <Layout>
          <div className={`${utilStyles.aboutContainer}`}>
            <div className={`${utilStyles.row}`}>
              <motion.div
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: .4 }}
                className={`${utilStyles.imageContainer}`}
              >
                <Image width={800} height={1000} alt="profile" src="/images/yo.webp" quality={100} />
              </motion.div>
              <motion.div
                initial={{ x: 200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: .4 }}
                className={`${utilStyles.textContainer}`}
              >
                <h3>AbOuT mE</h3>
                <div dangerouslySetInnerHTML={{ __html: pageData.contentHtml }} />
                <div className={`${utilStyles.icons}`}>
                  <div>
                    <h3>Feel free to contact me</h3>
                    <SocialIcons />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </Layout>
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const pageData = await getData('itsme')

  return {
    props: {
      pageData
    }
  }
}