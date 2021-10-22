import utilStyles from './contact.module.css'
import { FaInstagram, FaVimeoV, FaWpforms } from 'react-icons/fa'

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
    id: 'curriculum',
    Icon: FaWpforms,
    href: 'https://8cb1e5e5-3042-4c42-95ff-64c690ee536b.filesusr.com/ugd/de5a7f_c0834ed978d645babfb863eff3881d6e.pdf'
  }
]

const email = {
  id: 'email',
  href: 'mailto:inej.pinheiro@gmail.com',
  text: 'inej.pinheiro@gmail.com'
}

export default function IndexContact() {

  return (
    <>
      <div className={`${utilStyles.text}`}>
        <div className={`${utilStyles.line}`}></div>

        <h3>Like what you see?</h3>
        <p>
          Follow my social media and connect with me
          through this form, or directly. You can also check
          my Curriculum
        </p>
        <a
          key={`index-email`}
          href={email.href}
        >
          {email.text}
        </a>
      </div>
      <div className={`${utilStyles.socials}`}>
        {socials.map(({ id, href, Icon }) => {
          return (
            <a
              key={`social-index-${id}`}
              href={href}
            >
              <Icon />
            </a>
          )
        })}
      </div>
    </>
  )
}