import styles from './CardHeading.module.css';

import { LuBookOpen } from 'react-icons/lu';
import { TbStarFilled } from 'react-icons/tb';
import { FiHeart } from 'react-icons/fi';

export default function CardHeading({ teacher }) {
  const { name, surname, lessons_done, rating, price_per_hour } = teacher;

  const handleClick = () => {};

  return (
    <div className={styles.heading}>
      <h2 className={styles.title}>
        <span>Languages</span>
        {name + ' ' + surname}
      </h2>
      <div>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <LuBookOpen />
            Lessons online
          </li>
          <li className={styles.listItem}>Lessons done: {lessons_done}</li>
          <li className={styles.listItem}>
            <TbStarFilled fill="#ffc531" />
            Rating: {rating}
          </li>
          <li className={styles.listItem}>
            Price / 1 hour: <span>{price_per_hour}$</span>
          </li>
        </ul>
        <button className={styles.likeBtn} type="button" onClick={handleClick}>
          <FiHeart className={styles.iconHeart} />
        </button>
      </div>
    </div>
  );
}
