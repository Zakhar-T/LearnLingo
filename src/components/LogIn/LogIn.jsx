import styles from './LogIn.module.css';

import { LuLogIn } from 'react-icons/lu';

export default function LogIn() {
  return (
    <div className={styles.container}>
      <button type="button" className={styles.logInBtn}>
        <LuLogIn className={styles.icon} />
        Log in
      </button>
      <button type="button" className={styles.registrationBtn}>
        Registration
      </button>
    </div>
  );
}
