import utilStyles from './styles.module.css'
import Link from 'next/link'
import { motion } from 'framer-motion'
import useAnimationOnScroll from '../../hooks/useAnimationOnScroll';

type Props = {
  onTopRow: any
  title: string
  project: string
  img: string
  color: string
}

const variants = {
  hide: {
    y: 300,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
  },
};

const transition = {
  ease: 'easeOut',
  duration: 0.5,
};

export default function ProjectCard({
  onTopRow,
  project,
  img,
  title
}: Props) {
  const scrollThreshold = onTopRow ? 0 : 0.5;
  const [viewRef, animate, setAnimationHasRun] = useAnimationOnScroll('show', scrollThreshold);
  return (
    <div ref={viewRef} className={`${utilStyles.card}`}>
      <motion.div
        initial="hide"
        animate={animate}
        variants={variants}
        transition={transition}
        onAnimationComplete={setAnimationHasRun}
      >
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
              `}
              </style>
              <div className={`${utilStyles.text}`}>
                {title}
              </div>
            </div>

          </div>
        </Link>
      </motion.div>
    </div>
  )
}