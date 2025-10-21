import styles from './Logo.module.css';

import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link to="/" className={styles.logo}>
      <svg width="28" height="28">
        <use href="/icons.svg#ukraine" />
      </svg>
      <span>Learn Lingo</span>
    </Link>
  );
}
