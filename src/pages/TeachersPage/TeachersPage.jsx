import styles from './TeachersPage.module.css';
import clsx from 'clsx';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectTeachers } from '../../redux/teachers/selectors';
import { fetchTeachers } from '../../redux/teachers/operations';

import Layout from '../../components/Layout';
import TeacherCard from '../../components/TeacherCard/TeacherCard';
import FiltersForm from '../../components/FiltersForm/FiltersForm';

export default function TeachersPage() {
  const dispatch = useDispatch();
  const teachers = useSelector(selectTeachers);

  useEffect(() => {
    dispatch(fetchTeachers());
  }, [dispatch]);

  const handleClick = () => {};

  return (
    <Layout>
      <section className={clsx('container', styles.container)}>
        <FiltersForm />
        <ul className={styles.teachersList}>
          {teachers.map((teacher, i) => (
            <TeacherCard key={i} teacher={teacher} />
          ))}
        </ul>
        <button className={styles.loadMoreBtn} type="button" onClick={handleClick}>
          Load more
        </button>
      </section>
    </Layout>
  );
}
