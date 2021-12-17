import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { Post } from '../types/post'
import Gallery from '../components/shared-components/gallery'
import LandingPage from '../components/landingPage'
import Vimeo from "@u-wave/react-vimeo"
import utilStyles from '../styles/utils.module.css'
import ContactForm from '../components/contact-form'
import React from 'react'
import IndexContact from '../components/index-contact'
import { createClient } from '../prismic-config'
import { convertPrismicToData } from '../utils/prismicConversions'
import * as prismic from '@prismicio/client'

type Props = {
  posts: Post[]
}

export default function Home({ posts }) {

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <Layout>

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
                <Gallery allPosts={posts} />
              </div>

              <div className={`${utilStyles.contactRow} centerPage`}>
                <IndexContact />
                <div className={`${utilStyles.form}`}>
                  <ContactForm showSocials={false} />
                </div>
              </div>
            </div>

          </div>

        </section>
      </Layout>

    </>
  )
}

export async function getStaticProps() {

  const client = await createClient();
  var data = await client.getAllByType('post', {
    predicates: [
      prismic.predicate.at('my.post.selected1', 'True')
    ],
    orderings: {
      field: 'my.post.frontpage_order'
    }
  });

  return {
    props: {
      posts: convertPrismicToData(data)
    }
  }

}