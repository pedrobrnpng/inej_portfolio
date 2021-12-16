import { getData } from '../../lib/aboutme'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import utilStyles from './aboutme.module.css'
import Image from 'next/image'
import Layout from "../../components/layout"
import { motion } from 'framer-motion'
import SocialIcons from '../../components/shared-components/social-icons'
import ContactForm from '../../components/contact-form'
import { createClient } from '../../prismic-config'
import { convertPrismicToAbout } from '../../utils/prismicConversions'
import { RichText } from 'prismic-reactjs'

export default function AboutMe({
  pageData
}) {
  console.log(pageData);
  const { data } = pageData;
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
              <Image width={data.img.width} height={data.img.height} alt={data.img.alt} src={data.img.url} quality={100} />
            </motion.div>
            <motion.div
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: .4 }}
              className={`${utilStyles.textContainer}`}
            >
              <h3>AbOuT mE</h3>
              <RichText
                render={data.description}
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
  const pageData = await client.getByType('about_page');

  return {
    props: {
      pageData: convertPrismicToAbout(pageData)
    }
  }
}