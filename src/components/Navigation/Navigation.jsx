import clsx from 'clsx';
import styles from './Navigation.module.css';

import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <ul className={styles.list}>
      <li className={styles.listItem}>
        <NavLink
          to="/"
          className={({ isActive }) => {
            return clsx(isActive && styles.isActive, styles.link);
          }}
        >
          Home
        </NavLink>
      </li>
      <li className={styles.listItem}>
        <NavLink
          to="/teachers"
          className={({ isActive }) => {
            return clsx(isActive && styles.isActive, styles.link);
          }}
        >
          Teachers
        </NavLink>
      </li>
    </ul>
  );
}
