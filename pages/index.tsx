import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { Post } from '../types/post'
import { getSelectedPosts } from '../lib/projects'
import Gallery from '../components/shared-components/gallery'
import LandingPage from '../components/landingPage'
import Vimeo from "@u-wave/react-vimeo"
import utilStyles from '../styles/utils.module.css'
import ContactForm from '../components/contact-form'
import React from 'react'
import IndexContact from '../components/index-contact'

type Props = {
  allPosts: Post[]
}

export default function Home({ allPosts }: Props) {

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <Layout>

        {/* background */}
        <section>
          <LandingPage />
        </section>

        <section id="projects">
          <style>{`
            .content {
              padding-top: 150px;
            }

            @media only screen and (max-width: 1150px){
              .content {
                padding-top: 0;
              }
            }
            }
            `}
          </style>
          <div>



            {/* SHOWCASE */}
            <div className={`content`}>
              <div className={`centerPage ${utilStyles.showReel}`}>
                <h1>Showreel</h1>
                <div style={{ width: "100%", paddingBottom: "50px" }}>
                  <Vimeo
                    video={"https://vimeo.com/543139546"}
                    dnt={true}
                    showPortrait={false}
                    showTitle={false}
                    showByline={false}
                    responsive={true}
                    width={50}
                  />
                </div>
              </div>

              <div className={`centerPage ${utilStyles.worksHeading}`}>
                <h6>Selected</h6>
                <h1>Work</h1>
                <Gallery allPosts={allPosts} />
              </div>

              <div className={`${utilStyles.contactRow} centerPage`}>
                <IndexContact />
                <div className={`${utilStyles.form}`}>
                  <ContactForm showSocials={false} />
                </div>
              </div>
            </div>

            {/* FOOTER */}

          </div>

        </section>
      </Layout>

    </>
  )
}

export async function getStaticProps() {

  const allPosts = await getSelectedPosts([
    'project',
    'title',
    'img'
  ])


  const posts = await Promise.all(allPosts);

  return {
    props: {
      allPosts: posts as unknown as Post[]
    }
  }
}