import utilStyles from './showcase.module.css'
import Link from 'next/link'

type Props = {
  title: string
  project: string
  img: string
}

export default function ProjectCard({
  project,
  img,
  title
}: Props) {

  return (
    <div>
      <Link as={`/projects/${project}`} href={`/projects/[project]`}>
        <div className="card-img">
          <img
            src={img}
            alt={title}
            title={title}
          />
        </div>
      </Link>
    </div>
  )
}