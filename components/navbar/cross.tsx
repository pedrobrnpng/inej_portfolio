import utilStyles from './navbar.module.css'

export default function Cross({ onClick }) {
  return (
    <div
      aria-label="Close Menu Button"
      role="button"
      tabIndex={0}
      onClick={onClick}
      className={`${utilStyles.cross}`}
    >
      <span style={{ backgroundColor: '#141414', width: 40, height: 4, transform: 'rotate(45deg)' }} />
      <span style={{ backgroundColor: '#141414', width: 40, height: 4, transform: 'rotate(-45deg)', marginTop: '-3px' }} />
    </div>
  );
}
