import utilStyles from './styles.module.css'
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
    <div className={`${utilStyles.card}`}>
      <Link as={`/projects/${project}`} href={`/projects/[project]`}>
        <div className={`${utilStyles.container}`}>
          <div className={`${utilStyles.imageDiv}`}>
            <img
              className={`${utilStyles.image}`}
              src={img}
              alt={title}
              title={title}
            />
          </div>

          <div className={`${utilStyles.overlay}`}>
            <div className={`${utilStyles.text}`}>
              {title}
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}