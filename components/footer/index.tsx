import utilStyles from './footer.module.css'
import InstagramIcon from '@material-ui/icons/Instagram'
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import MovieIcon from '@material-ui/icons/Movie';

export default function Footer() {

  return (
    <div className={`${utilStyles.footer}`}>
      <div className={`${utilStyles.icons}`}>
        <a href="https://www.instagram.com/inej.png/">
          <InstagramIcon />
        </a>
        <a href="https://vimeo.com/inespinheiro">
          <MovieIcon/>
        </a>
        <a href="https://8cb1e5e5-3042-4c42-95ff-64c690ee536b.filesusr.com/ugd/de5a7f_c0834ed978d645babfb863eff3881d6e.pdf">
          <AssignmentIndIcon />
        </a>
        <a href="mailto:inej.pinheiro@gmail.com">
          <MailOutlineIcon />
        </a>
        
      </div>
      <div className={`${utilStyles.footerCopyright}`}>
        <h5>© Pedro Brandão - 2021</h5>
      </div>
    </div>
  )
}