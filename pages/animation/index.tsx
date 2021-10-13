import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import Gallery from '../../components/shared-components/gallery'
import utilStyles from './animation.module.css'
import { useEffect, useState } from 'react'
import getWindowDimensions from '../../utils/windowUtils'
import { Post } from '../../types/post'
import { getAllPosts } from '../../lib/projects'

type Props = {
  allPosts: Post[]
}

export default function Animation({ allPosts }: Props) {

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

  var uniqueTypes = allPosts.map((post) => post.type.trim())
    .filter((value, index, self) => self.indexOf(value) === index)
  
  return (
    <Layout home>
      <Head>
        <title>Animation | {siteTitle}</title>
      </Head>

      <div className="darkPage">

        <section className="centerPage">
          
          {uniqueTypes.map(type => {
            return (
              <section>
                <div className={`${utilStyles.text}`}>
                  <h5>{type}</h5>
                </div>
                <Gallery
                  allPosts={allPosts.filter(post => post.type === type)}
                />
              </section>
            )
          })
          }
        </section>


      </div>

    </Layout>
  )
}

export async function getStaticProps() {

  const allPosts = await getAllPosts([
    'project',
    'title',
    'img',
    'type',
  ])


  const posts = await Promise.all(allPosts);

  const finalPosts = posts.filter(post => post.type === 'Animation')

  return {
    props: {
      allPosts: finalPosts as unknown as Post[]
    }
  }
}