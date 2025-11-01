import styles from './PriceFilter.module.css';
import clsx from 'clsx';

import { useState } from 'react';
import { useField } from 'formik';

import { FiChevronDown } from 'react-icons/fi';

export default function PriceFilter({ name }) {
  const prices = ['20', '30', '40'];

  const [isOpen, setIsOpen] = useState(false);
  const [field, , helpers] = useField(name);

  const handleSelect = (price) => {
    helpers.setValue(price);
    setIsOpen(false);
  };

  return (
    <div className={styles.wrapper}>
      <p className={styles.label}>Price</p>
      <button
        className={styles.dropdownBtn}
        type="button"
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        <span>{field.value || prices[0]}</span>
        <FiChevronDown className={clsx(styles.icon, isOpen && styles.activeIcon)} width={20} height={20} />
      </button>
      {isOpen && (
        <ul className={styles.dropdownMenu}>
          {prices.map((price, i) => {
            return (
              <li
                key={i}
                className={clsx(styles.option, price === field.value && styles.activeOption)}
                onClick={() => handleSelect(price)}
              >
                {price}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
