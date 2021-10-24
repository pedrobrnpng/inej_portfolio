import utilStyles from './showcase.module.css'
import { Post } from '../../../types/post'
import ProjectCard from '../card'
import Masonry from 'react-masonry-css'
import { motion } from 'framer-motion'

type Props = {
  allPosts: Post[]
}

const breakpoints = {
  default: 3,
  1100: 2,
  700: 1
}

export default function Gallery({ allPosts }: Props) {

  const filteredPosts = allPosts.filter(post => post.project !== undefined)

  console.log(filteredPosts);

  return (
    <Masonry
      breakpointCols={breakpoints}
      className={`${utilStyles.my_masonry_grid}`}
      columnClassName={`${utilStyles.my_masonry_grid_column}`}
    >
      {filteredPosts.map((post, index) => {
        const onTopRow = index < 3;
        return (
          <ProjectCard
            onTopRow={onTopRow}
            title={post.title}
            project={post.project}
            img={post.img}
          />
        )
      })}
    </Masonry>
  )
}