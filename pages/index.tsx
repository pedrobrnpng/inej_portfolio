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
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      {/* background */}
      <section>
        <div className={`${utilStyles.test}`}>
          <div className={`${utilStyles.ParallaxVideo}`}>
            {width <= 1150 ?
              <Image
                className={`${utilStyles.test}`}
                alt="Background"
                src="/images/background_.jpg"
                layout="fill"
                objectFit="cover"
                quality={100}
              />
              :
              <Image
                className={`${utilStyles.test}`}
                src="/images/background2.gif"
                alt="Background"
                layout="fill"
                objectFit="cover"
                quality={100}
              />
              // <video
              //   className={`${utilStyles.video}`}
              //   autoPlay
              //   muted
              //   loop
              //   id='background'
              // >
              //   <source src="/videos/background.mp4" type="video/mp4" />
              // </video>
            }
          </div>
          <div className={`${utilStyles.content} ${utilStyles.videoText}`}>
            <h1 className={`${utilStyles.videoText}`}>INÊS PINHEIRO</h1>
            <h6 className={`${utilStyles.videoText2}`}>Animation and Illustration</h6>
          </div>
          <div>
            <a href="#projects" className={`${utilStyles.scrollDown}`} ></a>
          </div>
        </div>
      </section>

      <section id="#projects">
        <div className={`${utilStyles.ParallaxContent}`}>
          {/* NAVBAR */}
          <Navbar dark={true} />

          {/* SHOWCASE */}
          <div className="centerPage">
            <Gallery allPosts={allPosts} />
          </div>

          {/* FOOTER */}
          <Footer />
          <div>

          </div>
        </div>
      </section>
    </Layout>
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