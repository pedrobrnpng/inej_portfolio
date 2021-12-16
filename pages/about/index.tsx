import { GetStaticProps } from 'next'
import Head from 'next/head'
import utilStyles from './aboutme.module.css'
import Image from 'next/image'
import Layout from "../../components/layout"
import { motion } from 'framer-motion'
import ContactForm from '../../components/contact-form'
import { createClient } from '../../prismic-config'
import { convertPrismicToAbout } from '../../utils/prismicConversions'
import { RichText } from 'prismic-reactjs'
import { AboutPage } from '../../types/aboutPage'

export default function AboutMe(data: AboutPage) {

  const {img, description} = data;

  return (
    <div>
      <Head>
        <title>About Me</title>
      </Head>

      <Layout>
        <div className={`${utilStyles.aboutContainer}`}>
          <div className={`${utilStyles.row}`}>
            <motion.div
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: .4 }}
              className={`${utilStyles.imageContainer}`}
            >
              <Image width={800} height={1000} alt={img.alt} src={img.url} quality={100} />
            </motion.div>
            <motion.div
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: .4 }}
              className={`${utilStyles.textContainer}`}
            >
              <h3>AbOuT mE</h3>
              <RichText
                render={description}
              />
            </motion.div>
          </div>
          <ContactForm showSocials={true} />
        </div>
      </Layout>
      <div>

      </div>

    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  const client = await createClient();
  const pageData = await client.getSingle('about_page');

  const data = convertPrismicToAbout(pageData)

  return {
    props: data as AboutPage
  }
}