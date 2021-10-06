import utilStyles from './showcase.module.css'
import Link from 'next/link'

type Props = {
  title: string
  project: string
  img: string
}

export default function ProjectCard({
  project,
  img
}: Props) {

  return (
    <div className={`${utilStyles.project}`}>
      <Link as={`/projects/${project}`} href={`/projects/[project]`}>
        <div className="card-img">
          <img
            src={img}
            alt="Cat"
          />
        </div>
      </Link>
    </div>
  )
}