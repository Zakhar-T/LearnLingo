import styles from './Header.module.css';

import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import LogIn from '../LogIn/LogIn';

export default function Header() {
  return (
    <header>
      <nav className={styles.container}>
        <Logo />
        <Navigation />
        <LogIn />
      </nav>
    </header>
  );
}
