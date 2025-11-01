import styles from './LevelsFilter.module.css';
import clsx from 'clsx';

import { useState } from 'react';
import { useField } from 'formik';

import { FiChevronDown } from 'react-icons/fi';

export default function LevelsFilter({ name }) {
  const levels = ['A2', 'B1', 'B2'];

  const [isOpen, setIsOpen] = useState(false);
  const [field, , helpers] = useField(name);

  const handleSelect = (level) => {
    helpers.setValue(level);
    setIsOpen(false);
  };

  return (
    <div className={styles.wrapper}>
      <p className={styles.label}>Levels</p>
      <button
        className={styles.dropdownBtn}
        type="button"
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        <span>{field.value || levels[0]}</span>
        <FiChevronDown className={clsx(styles.icon, isOpen && styles.activeIcon)} width={20} height={20} />
      </button>
      {isOpen && (
        <ul className={styles.dropdownMenu}>
          {levels.map((level, i) => {
            return (
              <li
                key={i}
                className={clsx(styles.option, level === field.value && styles.activeOption)}
                onClick={() => handleSelect(level)}
              >
                {level}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
