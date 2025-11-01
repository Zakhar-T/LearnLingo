import styles from './LanguagesFilter.module.css';
import clsx from 'clsx';

import { useState } from 'react';
import { useField } from 'formik';

import { FiChevronDown } from 'react-icons/fi';

export default function LanguagesFilter({ name }) {
  const languages = ['eng', 'fr', 'ger'];

  const [isOpen, setIsOpen] = useState(false);
  const [field, , helpers] = useField(name);

  const handleSelect = (lang) => {
    helpers.setValue(lang);
    setIsOpen(false);
  };

  return (
    <div className={styles.wrapper}>
      <p className={styles.label}>Languages</p>
      <button
        className={styles.dropdownBtn}
        type="button"
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        <span>{field.value || languages[0]}</span>
        <FiChevronDown className={clsx(styles.icon, isOpen && styles.activeIcon)} width={20} height={20} />
      </button>
      {isOpen && (
        <ul className={styles.dropdownMenu}>
          {languages.map((lang, i) => {
            return (
              <li
                key={i}
                className={clsx(styles.option, lang === field.value && styles.activeOption)}
                onClick={() => handleSelect(lang)}
              >
                {lang}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
