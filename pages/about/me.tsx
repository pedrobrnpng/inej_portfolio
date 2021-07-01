import Navbar from "../../components/navbar"
import { getData } from '../../lib/aboutme'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import utilStyles from './aboutme.module.css'


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
      <Navbar />
      <div className={`${utilStyles.aboutContainer}`}>
        <h3>AbOuT mE</h3>
        <div dangerouslySetInnerHTML={{ __html: pageData.contentHtml }} />
      </div>
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