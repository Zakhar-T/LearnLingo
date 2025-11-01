import { useLocation } from 'react-router-dom';

import Header from './Header/Header';

export default function Layout({ children }) {
  const url = useLocation();
  const background = {
    backgroundColor: url.pathname === '/teachers' && '#f8f8f8',
  };

  return (
    <>
      <Header />
      <main style={background}>{children}</main>
    </>
  );
}
