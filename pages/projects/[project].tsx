import ErrorPage from 'next/error'
import { useRouter } from 'next/dist/client/router';
import Animation from '../../components/project/animation';
import Drawing from '../../components/project/drawing';
import { GetStaticPaths } from 'next';
import { createClient } from '../../prismic-config';
import { convertPrismicToPost } from '../../utils/prismicConversions';

const Post = ({ post }) => {

  const router = useRouter();
  if (!router.isFallback && !post?.project) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <>
      {
        post.type === 'Film' || post.type === 'Other Projects' ?
          <Animation post={post} />
          :
          <Drawing post={post} />
      }
    </>
  )
}

export default Post;


export async function getStaticProps(context) {

  const client = await createClient();
  const post = await client.getByUID('post', context.params.project)

  return {
    props: {
      post: convertPrismicToPost(post)
    }
  }
}


export const getStaticPaths: GetStaticPaths = async () => {

  try {
    const client = await createClient();
    var data = await client.getByType('post');

    return {
      paths: data.results.map((doc) => {
        return {
          params: {
            project: doc.uid
          }
        }
      }),
      fallback: false
    }
  } catch (err) {
    console.error(err);
    return { paths: [], fallback: false }
  }

}
