import utilStyles from './styles.module.css'
import Link from 'next/link'

type Props = {
  title: string
  project: string
  img: string
  color: string
}


export default function ProjectCard({
  project,
  img,
  title,
  color
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

          <div className={`overlay`} >
            <style jsx>{`
                .overlay {
                  position: absolute;
                  top: 0;
                  bottom: 0;
                  left: 0;
                  right: 0;
                  height: 100%;
                  width: 100%;
                  opacity: 0;
                  transition: .5s ease;
                  background-color: rgba(17, 17, 17, 0.8);
                }

                .overlay:hover{
                  opacity: 1;
                }
              `}</style>
            <div className={`${utilStyles.text}`}>
              {title}
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}