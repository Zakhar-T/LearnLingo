import styles from './Hero.module.css';

import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.titleWrapper}>
        <h1 className={styles.title}>
          Unlock your potential with the best <span className={styles.titlePart}>language</span> tutors
        </h1>
        <p className={styles.text}>
          Embark on an Exciting Language Journey with Expert Language Tutors: Elevate your language proficiency to new
          heights by connecting with highly qualified and experienced tutors.
        </p>
        <Link className={styles.link}>Get started</Link>
      </div>
      <img src="hero-yellow@1x.jpg" className={styles.img} width="568" height="530" />
    </div>
  );
}
