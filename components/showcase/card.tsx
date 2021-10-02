import utilStyles from './showcase.module.css'
import { Post } from '../../types/post'
import Link from 'next/link'

type Props = {
  title: string
  project: string
  img: string
}

export default function ProjectCard({
  title,
  project,
  img
}: Props) {

  return (
    <div className={`${utilStyles.project}`}>
      <div className="card-img">
        <img
          src={img}
          alt="Cat"
        />
      </div>
      <Link as={`/projects/${project}`} href={`/projects/[project]`}>
        <a>{title}</a>
      </Link>
    </div>
  )
}