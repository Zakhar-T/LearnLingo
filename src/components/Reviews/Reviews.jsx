import styles from './Reviews.module.css';

import { TbStarFilled } from 'react-icons/tb';

export default function Reviews({ reviews }) {
  return (
    <ul className={styles.list}>
      {reviews.map((review, i) => {
        const { reviewer_name, reviewer_rating, comment } = review;
        return (
          <li key={i}>
            <p className={styles.name}>{reviewer_name}</p>
            <div className={styles.ratingWrapper}>
              <TbStarFilled fill="#ffc531" />
              <p>{reviewer_rating}</p>
            </div>
            <p>{comment}</p>
          </li>
        );
      })}
    </ul>
  );
}
