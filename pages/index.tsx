import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { useEffect, useState } from 'react'
import getWindowDimensions from '../utils/windowUtils'
import { Post } from '../types/post'
import { getAllPosts } from '../lib/projects'
import Gallery from '../components/shared-components/gallery'
import LandingPage from '../components/landingPage'

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
            <div className={`centerPage content`}>
              <Gallery allPosts={allPosts} />
            </div>

            {/* FOOTER */}

          </div>

        </section>
      </Layout>

    </>
  )
}

export async function getStaticProps() {

  const allPosts = await getAllPosts([
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