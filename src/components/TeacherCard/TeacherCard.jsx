import styles from './TeacherCard.module.css';

import { useState } from 'react';
import { Link } from 'react-router-dom';

import CardHeading from '../CardHeading/CardHeading';
import TeacherInfo from '../TeacherInfo/TeacherInfo';
import Reviews from '../Reviews/Reviews';
import TeacherLevels from '../TeacherLevels/TeacherLevels';

export default function TeacherCard({ teacher }) {
  const { avatar_url, levels, experience, reviews } = teacher;

  const [extend, setExtend] = useState(false);

  return (
    <li className={styles.card}>
      <div className={styles.imgWrapper}>
        <img className={styles.img} src={avatar_url} width="120" height="120" />
      </div>
      <div className={styles.teacherInfo}>
        <CardHeading teacher={teacher} />
        <TeacherInfo teacher={teacher} />
        {!extend && (
          <button className={styles.btn} type="button" onClick={() => setExtend(true)}>
            Read more
          </button>
        )}
        {extend && (
          <>
            <p className={styles.experience}>{experience}</p>
            <Reviews reviews={reviews} />
          </>
        )}
        <TeacherLevels levels={levels} extend={extend} />
        {extend && (
          <Link to="/" className={styles.link}>
            Book trial lesson
          </Link>
        )}
      </div>
    </li>
  );
}
