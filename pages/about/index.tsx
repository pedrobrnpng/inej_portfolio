import Navbar from "../../components/navbar"
import { getData } from '../../lib/aboutme'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import utilStyles from './aboutme.module.css'
import Image from 'next/image'
import InstagramIcon from '@material-ui/icons/Instagram'
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import MovieIcon from '@material-ui/icons/Movie';
import Layout from "../../components/layout"


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
            <div className={`${utilStyles.imageContainer}`}>
              <Image width={800} height={1000} alt="profile" src="/images/yo.webp" quality={100} />
            </div>
            <div className={`${utilStyles.textContainer}`}>
              <h3>AbOuT mE</h3>
              <div dangerouslySetInnerHTML={{ __html: pageData.contentHtml }} />
              <div className={`${utilStyles.icons}`}>
                <div>
                  <h3>Feel free to contact me</h3>
                  <a href="https://www.instagram.com/inej.png/">
                    <InstagramIcon />
                  </a>
                  <a href="https://vimeo.com/inespinheiro">
                    <MovieIcon />
                  </a>
                  <a href="https://8cb1e5e5-3042-4c42-95ff-64c690ee536b.filesusr.com/ugd/de5a7f_c0834ed978d645babfb863eff3881d6e.pdf">
                    <AssignmentIndIcon />
                  </a>
                  <a href="mailto:inej.pinheiro@gmail.com">
                    <MailOutlineIcon />
                  </a>
                </div>

              </div>
            </div>
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