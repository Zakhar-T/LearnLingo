import styles from './Stats.module.css';

export default function Stats() {
  return (
    <ul className={styles.list}>
      <li className={styles.listItem}>
        <p>32,000 +</p>
        <p>Experienced tutors</p>
      </li>
      <li className={styles.listItem}>
        <p>300,000 +</p>
        <p>5-star tutor reviews</p>
      </li>
      <li className={styles.listItem}>
        <p>120 +</p>
        <p>Subjects taught</p>
      </li>
      <li className={styles.listItem}>
        <p>200 +</p>
        <p>Tutor nationalities</p>
      </li>
    </ul>
  );
}
