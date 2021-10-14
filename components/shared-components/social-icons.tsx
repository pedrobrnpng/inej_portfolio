import InstagramIcon from '@material-ui/icons/Instagram'
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import MovieIcon from '@material-ui/icons/Movie';
import { motion } from "framer-motion";
import utilStyles from './styles.module.css'


export default function SocialIcons() {

  return (
    <div
      className={`${utilStyles.icons}`}
    >
      <motion.a
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: .8 }}
        href="https://www.instagram.com/inej.png/"
      >
        <InstagramIcon />
      </motion.a>

      <motion.a
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
        href="https://vimeo.com/inespinheiro"
      >
        <MovieIcon />
      </motion.a>

      <motion.a
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2 }}
        href="https://8cb1e5e5-3042-4c42-95ff-64c690ee536b.filesusr.com/ugd/de5a7f_c0834ed978d645babfb863eff3881d6e.pdf">
        <AssignmentIndIcon />
      </motion.a>

      <motion.a
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.4 }}
        href="mailto:inej.pinheiro@gmail.com"
      >
        <MailOutlineIcon />
      </motion.a>
    </div>
  )
}