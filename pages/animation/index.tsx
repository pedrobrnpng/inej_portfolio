import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import Gallery from '../../components/shared-components/gallery'
import utilStyles from './animation.module.css'
import { Post } from '../../types/post'
import { motion } from 'framer-motion'
import { createClient } from '../../prismic-config'
import { convertPrismicToAnimations } from '../../utils/prismicConversions'

type Props = {
  allPosts: Post[]
}

export default function Animation({ allPosts }: Props) {

  var uniqueTypes = allPosts.map((post) => post.type.trim())
    .filter((value, index, self) => self.indexOf(value) === index)
  
  return (
    <Layout home>
      <Head>
        <title>Animation | {siteTitle}</title>
      </Head>

      <div className={`${utilStyles.content}`}>

        <section className="centerPage">
          
          {uniqueTypes.map(type => {
            return (
              <section>
                <motion.div
                  initial={{ x: -200, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: .4 }}
                  className={`${utilStyles.text}`}
                >
                  <h5>{type}</h5>
                </motion.div>
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

  const client = await createClient();
  const data = await client.getAllByType('post')

  return {
    props: {
      allPosts: convertPrismicToAnimations(data)
    }
  }
}