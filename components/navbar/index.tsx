import utilStyles from './navbar.module.css';
import Link from 'next/link'
import { useEffect, useState } from 'react';
import getWindowDimensions from '../../utils/windowUtils';

export default function Navbar({ dark }) {

  const navigationLinks = [
    {
      text: 'Animation',
      href: '/animation',
      last: false
    },
    {
      text: 'Portfolio',
      href: '/portfolio',
      last: false
    },
    {
      text: 'About Me',
      href: '/about/me',
      last: true
    }
  ]

  const [width, setWidth] = useState<number>();
  const [height, setHeight] = useState<number>();
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  }

  useEffect(() => {
    const { width, height } = getWindowDimensions();
    setWidth(width);
    setHeight(height);
  }, []);

  useEffect(() => {
    function handleResize() {
      const { width, height } = getWindowDimensions();
      setWidth(width);
      setHeight(height);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={`${utilStyles.navbar}`}>
      <div className={`${utilStyles.navbarLogo}`}>
        <Link href="/">
          <h3>INÊS PINHEIRO</h3>
        </Link>
      </div>
      {width > 1150 ?
        <div className={`${utilStyles.navbarLinkContainer} ${dark ? utilStyles.white : utilStyles.dark}`}>
          <ul>
            {
              navigationLinks.map(({ text, href, last }) => {
                if (last) {
                  return (
                    <li>
                      <Link href={href}>{text}</Link>
                    </li>
                  )
                } else {
                  return (
                    <li style={{ marginRight: 48 }}>
                      <Link href={href}>{text}</Link>
                    </li>
                  )
                }

              })
            }
          </ul>
        </div>
        :
        <div
          className={`${dark ? utilStyles.menuDark : utilStyles.menuWhite} ${utilStyles.navbarMenu} `}
          onClick={handleClick}
        >
          <div></div>
        </div>
      }
    </div>
  )
}