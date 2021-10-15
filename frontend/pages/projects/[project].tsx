import ErrorPage from 'next/error'
import { useRouter } from 'next/dist/client/router';
import Layout, { siteTitle } from '../../components/layout';
import Head from 'next/head';
import { getAllPosts, getPostByName } from '../../lib/projects'
import utilStyles from "./project.module.css"
import markdownToHtml from '../../lib/markdownToHtml'
import { GetStaticPaths } from 'next';
import Vimeo from '@u-wave/react-vimeo'
import { motion } from 'framer-motion';

const Post = ({ post }) => {

  const router = useRouter();
  if (!router.isFallback && !post?.project) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout>
      <Head>
        <title> {post.title} | {siteTitle}</title>
      </Head>

      <div style={{ paddingTop: 140 }}>
        <div className={`${utilStyles.container}`}>
          <div className={`${utilStyles.row}`}>
            <motion.div
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: .2 }}
              className={`${utilStyles.title}`}
            >
              <h3>{post.title}</h3>
              <h5>{post.type}</h5>
            </motion.div>
            <motion.div
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: .2 }}
              className={`${utilStyles.aboutProject}`}
            >
              <div>
                <h5>School Project</h5>
              </div>
              <div>
                <p>
                  <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </p>
              </div>

              <div className={`${utilStyles.metaRow}`}>
                {post.colaborators.length > 0 ?
                  <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: .2 }}
                    className={`${utilStyles.colaborators}`}
                  >
                    <h5>In colaboration with</h5>
                    {post.colaborators.map((name) => {
                      return (
                        <p>{name.trim()}</p>
                      )
                    })}
                  </motion.div>
                  :
                  <div></div>
                }

                {post.sound.length > 0 ?
                  <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: .2 }}
                    className={`${utilStyles.sound}`}
                  >
                    <h5>Sound by</h5>
                    {post.sound.map((name) => {
                      return (
                        <p>{name.trim()}</p>
                      )
                    })}
                  </motion.div>
                  :
                  <div></div>
                }
              </div>
            </motion.div>
          </div>
          {post.videoUrl ?
            <motion.div
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: .2 }}
              className={`${utilStyles.vimeoContainer}`}
            >
              <Vimeo
                video={post.videoUrl}
                responsive={true}
              />
            </motion.div>
            :
            <motion.div
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: .2 }}
              className={`${utilStyles.imageContainer}`}
            >
              <img
                src={`${post.img}`}
                alt={post.title}
                title={post.title}
              />
            </motion.div>
          }
        </div>
      </div>
    </Layout>
  )
}

export default Post;


export async function getStaticProps({ params }) {

  const post = await getPostByName(params.project, [
    'title',
    'img',
    'content',
    'project',
    'sound',
    'colaborators',
    'videoUrl',
    'type'
  ]);

  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content
      }
    }
  }
}


export const getStaticPaths: GetStaticPaths = async () => {

  try {
    const posts = await getAllPosts(['project']);
    const post1 = await Promise.all(posts);
    const paths = post1.map((post) => {
      return {
        params: {
          project: post.project
        }
      }
    })
    return {
      paths: paths,
      fallback: false
    }
  } catch (err) {
    console.error(err);
    return { paths: [], fallback: false }
  }

}
