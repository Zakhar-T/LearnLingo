import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

const HomePage = lazy(() => import('../pages/HomePage'));
const TeachersPage = lazy(() => import('../pages/TeachersPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/teachers" element={<TeachersPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
