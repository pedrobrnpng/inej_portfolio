import utilStyles from './navbar.module.css'

export default function Cross({ onClick }) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      className={`${utilStyles.cross}`}
    >
      <span style={{backgroundColor: '#f9f1f1', width: 40, height: 4, transform: 'rotate(45deg)'}} />
      <span style={{backgroundColor: '#f9f1f1', width: 40, height: 4, transform: 'rotate(-45deg)', marginTop: '-3px' }} />
    </div>
  );
}
