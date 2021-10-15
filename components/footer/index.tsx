import utilStyles from './footer.module.css'

import SocialIcons from '../shared-components/social-icons';

export default function Footer() {

  return (
    <div className={`${utilStyles.footer}`}>
      <div className={`${utilStyles.icons}`}>
        <SocialIcons/>
      </div>
      <div className={`${utilStyles.footerCopyright}`}>
        <h5>© Pedro Brandão - 2021</h5>
      </div>
    </div>
  )
}