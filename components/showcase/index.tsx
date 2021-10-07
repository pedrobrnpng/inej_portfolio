import utilStyles from './showcase.module.css'
import { Post } from '../../types/post'
import ProjectCard from '../shared-components/card'

type Props = {
  allPosts: Post[]
}

export default function Showcase({ allPosts }: Props) {

  return (
    <div className={`${utilStyles.gallery}`}>
      {allPosts.map((post) => (
        <ProjectCard
          title={post.title}
          project={post.project}
          img={post.img}
        />
      ))}
    </div>
  )
}