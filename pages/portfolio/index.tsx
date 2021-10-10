import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import utilStyles from './portfolio.module.css'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import Masonry from 'react-masonry-css'
import Gallery from '../../components/shared-components/gallery'
import ProjectCard from '../../components/shared-components/card'
import { useEffect, useState } from 'react'
import getWindowDimensions from '../../utils/windowUtils'
import { Post } from '../../types/post'
import { getAllPosts } from '../../lib/projects'

type Props = {
  allPosts: Post[]
}

export default function Portfolio({ allPosts }: Props) {

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

  const uniqueTypes = allPosts.map((post) => post.type.trim())
    .filter((value, index, self) => self.indexOf(value) === index)

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1
  }

  return (
    <Layout home>
      <Head>
        <title>Portfolio | {siteTitle}</title>
      </Head>

      <div className="darkPage">

        <Navbar dark={true} />

        <section className="centerPage">
          {uniqueTypes.map(type => {
            return (
              <section>
                <div>
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

        <Footer />

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

  return {
    props: {
      allPosts: posts as unknown as Post[]
    }
  }
}