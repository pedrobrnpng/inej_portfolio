import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Navbar from '../components/navbar'
import Showcase from '../components/shared-components/gallery'
import Footer from '../components/footer'
import Image from 'next/image'
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

  const [width, setWidth] = useState<number>();
  const [height, setHeight] = useState<number>();

  useEffect(() => {
    const { width, height } = getWindowDimensions();
    setWidth(width);
    setHeight(height);
  }, []);

  useEffect(() => {
    function handleResize() {
      const { width, height } = getWindowDimensions();
      setWidth(width);
      setHeight(height);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
          <div>

            {/* SHOWCASE */}
            <div className="centerPage">
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