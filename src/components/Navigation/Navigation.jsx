import styles from './Navigation.module.css';

import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <ul className={styles.list}>
      <li className={styles.listItem}>
        <NavLink to="/" className={styles.link}>
          Home
        </NavLink>
      </li>
      <li className={styles.listItem}>
        <NavLink to="/teachers" className={styles.link}>
          Teachers
        </NavLink>
      </li>
    </ul>
  );
}
