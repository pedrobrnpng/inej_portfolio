import utilStyles from './navbar.module.css';
import Link from 'next/link'

export default function Navbar() {

  return (
    <div className={`${utilStyles.navbar}`}>
      <div>
        <Link href="/">
          <h3>INÊS PINHEIRO</h3>
        </Link>
      </div>
      <div className={`${utilStyles.navbarLinkContainer}`}>
        <ul>
          <li>
            <Link href="">Animation</Link>
            </li>
          <li>
            <Link href="">Portfolio</Link>
            </li>
          <li>
            <Link href="/about/me">About</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}