import utilStyles from './navbar.module.css'

export default function Hamburger({ onClick }) {
  const hamburger = [];
  for (let i = 0; i < 3; i += 1) {
    hamburger.push(
      <span
        key={`hamburger-${i}`}
        className={`${utilStyles.hamburgerLines}`}
      />
    );
  }

  return (
    <div
      onClick={onClick}
      role="button"
      tabIndex={0}
      className={`${utilStyles.hamburgerContainer}`}
    >
      {hamburger}
    </div>
  );
}