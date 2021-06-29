import utilStyles from './navbar.module.css';

export default function Navbar() {

  return (
    <div className={`${utilStyles.navbar}`}>
      <div>
        <h3>INES PINHEIRO</h3>
      </div>
      <div className={`${utilStyles.navbarLinkContainer}`}>
        <ul>
          <li>Animation</li>
          <li>Portfolio</li>
          <li>About</li>
        </ul>
      </div>
    </div>
  )
}