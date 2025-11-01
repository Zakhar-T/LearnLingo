import styles from './TeacherInfo.module.css';

export default function TeacherInfo({ teacher }) {
  const { languages, lesson_info, conditions } = teacher;
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <span>Speaks: </span>
        <span className={styles.languages}>{languages.join(', ')}</span>
      </li>
      <li className={styles.item}>
        <span>Lesson info: </span>
        {lesson_info}
      </li>
      <li className={styles.item}>
        <span>Conditions: </span>
        {conditions.join(' ')}
      </li>
    </ul>
  );
}
