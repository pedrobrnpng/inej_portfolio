import utilStyles from './contact.module.css'
import { FaInstagram, FaVimeoV, FaWpforms } from 'react-icons/fa'

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
          href="mailto:inej.pinheiro@gmail.com"
        >
          inej.png@gmail.com
        </a>
      </div>
      <div className={`${utilStyles.socials}`}>
        <a> <FaVimeoV /> </a>
        <a> <FaInstagram /> </a>
        <a> <FaWpforms /> </a>
      </div>
    </>
  )
}