import ErrorPage from 'next/error'
import { useRouter } from 'next/dist/client/router';
import Layout, { siteTitle } from '../../components/layout';
import Head from 'next/head';
import { getAllPosts, getPostByName } from '../../lib/projects'
import utilStyles from "./project.module.css"

import markdownToHtml from '../../lib/markdownToHtml'
import { GetStaticPaths } from 'next';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer'
import Vimeo from '@u-wave/react-vimeo'
import Image from 'next/image'



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

      <div>
        <div className={`${utilStyles.container}`}>
          <div className={`${utilStyles.row}`}>
            <div className={`${utilStyles.title}`}>
              <h3>{post.title}</h3>
              <h5>{post.type}</h5>
            </div>
            <div className={`${utilStyles.aboutProject}`}>

              <div>
                <h5>School Project my duck</h5>
              </div>
              <div>
                <p>
                  <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </p>
              </div>

              <div className={`${utilStyles.metaRow}`}>
                {post.colaborators.length > 0 ?
                  <div className={`${utilStyles.colaborators}`}>
                    <h5>In colaboration with</h5>
                    {post.colaborators.map((name) => {
                      return (
                        <p>{name.trim()}</p>
                      )
                    })}
                  </div>
                  :
                  <div></div>
                }

                {post.sound.length > 0 ?
                  <div className={`${utilStyles.sound}`}>
                    <h5>Sound by</h5>
                    {post.sound.map((name) => {
                      return (
                        <p>{name.trim()}</p>
                      )
                    })}
                  </div>
                  :
                  <div></div>
                }
              </div>
            </div>
          </div>
          {post.videoUrl ?
            <div className={`${utilStyles.vimeoContainer}`}>
              <Vimeo
                video={post.videoUrl}
                responsive={true}
              />
            </div>
            :
            <div className={`${utilStyles.imageContainer}`}>
              <img
                src={`${post.img}`}
                alt={post.title}
                title={post.title}
              />
            </div>
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
