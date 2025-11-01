import styles from './FiltersForm.module.css';

import { Form, Formik } from 'formik';

import LanguagesFilter from '../LanguagesFilter/LanguagesFilter';
import LevelsFilter from '../LevelsFilter/LevelsFilter';
import PriceFilter from '../PriceFilter/PriceFilter';

const initialValues = {
  language: '',
  level: '',
  price: '',
};

export default function FiltersForm() {
  return (
    <Formik initialValues={initialValues}>
      <Form className={styles.form}>
        <LanguagesFilter name="language" />
        <LevelsFilter name="level" />
        <PriceFilter name="price" />
      </Form>
    </Formik>
  );
}
