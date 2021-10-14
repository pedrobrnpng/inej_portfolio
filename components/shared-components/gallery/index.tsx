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

  const colors = [
    "126, 89, 32, 0.9",
    "113, 52, 129, 0.9",
    "243, 222, 138, 0.9",
    "98, 168, 124, 0.9",
    "206, 236, 151, 0.9",
    "244, 179, 147, 0.9"
  ]

  function randomInteger() {
    return Math.floor(Math.random() * colors.length);
  }

  return (
    <Masonry
      breakpointCols={breakpoints}
      className={`${utilStyles.my_masonry_grid}`}
      columnClassName={`${utilStyles.my_masonry_grid_column}`}
    >
      {allPosts.map((post, index) => {
        const onTopRow = index < 3;
        return (
          <ProjectCard
            onTopRow={onTopRow}
            title={post.title}
            project={post.project}
            img={post.img}
            color={colors[randomInteger()]}
          />
        )
      })}
    </Masonry>
  )
}