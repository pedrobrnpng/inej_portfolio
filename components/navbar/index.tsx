import utilStyles from './navbar.module.css';
import Link from 'next/link'
import { useEffect, useState } from 'react';
import getWindowDimensions from '../../utils/windowUtils';
import Hamburger from './hamburger';
import { motion } from 'framer-motion';
import SocialIcons from '../shared-components/social-icons';
import Cross from './cross';

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState<number>();

  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const { width } = getWindowDimensions();
    setWidth(width);
  }, []);

  useEffect(() => {
    function handleResize() {
      const { width } = getWindowDimensions();
      setWidth(width);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: '-100%' },
  };

  const transition = {
    type: 'spring',
    mass: 0.7,
    damping: (width < 1150) ? 13 : 10,
    delay: (width < 1150) ? 0 : 0.5,
  };

  const navigationLinks = [
    {
      text: 'Animation',
      href: '/animation',
    },
    {
      text: 'Illustration',
      href: '/illustration',
    },
    {
      text: 'About',
      href: '/about',
    }
  ]

  return (
    <>
      <Hamburger onClick={openMenu} />
      <motion.div
        initial={'closed'}
        animate={!isOpen && (width < 1150) ? 'closed' : 'open'}
        variants={variants}
        transition={transition}
        className={`${utilStyles.navbar}`}
      >
        <Cross onClick={closeMenu} />
        <div
          role="menuitem"
          className={`${utilStyles.navbarLogo}`}>
          <Link href="/">
            <h3 onClick={closeMenu}>INÊS PINHEIRO</h3>
          </Link>
        </div>
        <div className={`${utilStyles.navbarLinkContainer}`}>
          <ul
            role="menubar"
          >
            {
              navigationLinks.map(({ text, href }) => {
                return (
                  <li
                    role="menuitem"
                    onClick={closeMenu}
                  >
                    <Link href={href}>
                      {text}
                    </Link>
                  </li>
                )
              })
            }
          </ul>
        </div>
        {width < 1150 ?
          <div className={`${utilStyles.socials}`}>
            <SocialIcons />
          </div>
          :
          <></>
        }

      </motion.div>
    </>

  )
}