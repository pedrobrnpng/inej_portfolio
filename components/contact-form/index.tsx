import utilStyles from './contact-form.module.css'
import { FaVimeoV, FaInstagram, FaEnvelope, FaWpforms, FaVimeoSquare } from 'react-icons/fa'

const socials = [
  {
    id: 'instagram',
    Icon: FaInstagram,
    href: 'https://www.instagram.com/inej.png/',
    text: '@inej.png'
  },
  {
    id: 'vimeo',
    Icon: FaVimeoV,
    href: 'https://vimeo.com/inespinheiro',
    text: '@inespinheiro'
  },
  {
    id: 'curriculum',
    Icon: FaWpforms,
    href: 'https://8cb1e5e5-3042-4c42-95ff-64c690ee536b.filesusr.com/ugd/de5a7f_c0834ed978d645babfb863eff3881d6e.pdf',
    text: 'Curriculum'
  }
]

export default function ContactForm() {

  return (
    <div className={`${utilStyles.contactForm}`}>
      <div className={`${utilStyles.getInTouch}`}>
        <h2> Let's get in touch</h2>
        <div className={`${utilStyles.form}`}>
          <form>
            <div className={`${utilStyles.row}`}>
              <input
                type="text"
                maxLength={100}
                name="name"
                data-name="Name"
                placeholder="Name"
                className={`${utilStyles.input}`}
                id="name"
              />
              <input
                type="text"
                maxLength={100}
                name="email"
                data-name="Email"
                placeholder="Email"
                className={`${utilStyles.input}`}

                id="email"
              />
            </div>
            <div className={`${utilStyles.row}`}>
              <input
                type="text"
                maxLength={100}
                name="subject"
                data-name="Subject"
                placeholder="Subject"
                className={`${utilStyles.input}`}

                style={{ width: "100%" }}
                id="subject"
              />
            </div>
            <div className={`${utilStyles.row}`}>
              <textarea
                placeholder="Message"
                maxLength={5000}
                id="Message"
                name="Message"
                style={{ width: "100%", height: "100px" }}
                className={`${utilStyles.input}`}
                data-name="Message"
              />
            </div>
            <button
              className={`${utilStyles.submitButton}`}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className={`${utilStyles.verticalLine}`}> </div>
      <div className={`${utilStyles.contacts}`}>
        <h2>Don't feel like talking? </h2>
        <h5>Follow me on Social Media and check my curriculum </h5>
        <div className={`${utilStyles.form}`}>
          {socials.map(({ id, Icon, href, text }) => (
            <div
              className={`${utilStyles.contact}`}
            >
              <div style={{ display: "flex" }}>
                <a
                  key={`social-icon-${id}`}
                  href={href}
                  style={{ paddingLeft: "20px", display: "flex" }}
                >
                  <Icon
                    fontSize={"1.5em"}
                    style={{ alignItems: "center", marginRight: "15px" }}
                  />
                  {text}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}