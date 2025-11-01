import styles from './TeacherLevels.module.css';
import clsx from 'clsx';

export default function TeacherLevels({ levels, extend }) {
  return (
    <ul className={styles.list}>
      {levels.map((level, i) => {
        return (
          <li key={i} className={clsx(styles.item, extend && styles.extended)}>
            #{level}
          </li>
        );
      })}
    </ul>
  );
}
