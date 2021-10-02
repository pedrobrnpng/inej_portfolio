import ErrorPage from 'next/error'
import { useRouter } from 'next/dist/client/router';
import { getAllPosts, getPostByName } from '../../lib/projects'

import markdownToHtml from '../../lib/markdownToHtml'
import { GetStaticPaths } from 'next';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer'


const Post = ({post}) => {

  const router = useRouter();
  if (!router.isFallback && !post?.project) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <div>
      <Navbar/>


      {post.content}

      <Footer />
    </div>
  )
}

export default Post


export async function getStaticProps({ params }) {

  const post = await getPostByName(params.project, [
    'title',
    'img',
    'content',
    'project'
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

  try{
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
    return { paths: [], fallback: false}
  }

}
