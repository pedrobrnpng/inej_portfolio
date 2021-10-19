import ErrorPage from 'next/error'
import { useRouter } from 'next/dist/client/router';
import Animation from '../../components/project/animation';
import Drawing from '../../components/project/drawing';
import { getAllPosts, getPostByName } from '../../lib/projects'
import markdownToHtml from '../../lib/markdownToHtml'
import { GetStaticPaths } from 'next';

const Post = ({ post }) => {

  const router = useRouter();
  if (!router.isFallback && !post?.project) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <>
      {
        post.type == 'Animation' ?
          <Animation post={post}/>
          :
          <Drawing post={post}/>
      }
    </>
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
