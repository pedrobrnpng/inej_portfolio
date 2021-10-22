import { motion } from "framer-motion";
import utilStyles from './styles.module.css'
import { FaVimeoV, FaInstagram, FaEnvelope, FaWpforms } from 'react-icons/fa'

const socials = [
  {
    id: 'instagram',
    Icon: FaInstagram,
    href: 'https://www.instagram.com/inej.png/'
  },
  {
    id: 'vimeo',
    Icon: FaVimeoV,
    href: 'https://vimeo.com/inespinheiro'
  },
  {
    id: 'email',
    Icon: FaEnvelope,
    href: 'mailto:inej.pinheiro@gmail.com'
  },
  {
    id: 'curriculum',
    Icon: FaWpforms,
    href: '/Ines-Pinheiro-CV.pdf',
  }
]

export default function SocialIcons() {

  return (
    <div
      className={`${utilStyles.icons}`}
    >
      {socials.map(({ id, Icon, href }, index) => (
        <motion.a
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: (index / 2) * 0.8 }}
          key={`social-icon-${id}`}
          href={href}
        >
          <Icon />
        </motion.a>
      ))}
    </div>
  )
}