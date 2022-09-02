import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

function Layout() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<h2>Завантаження триває...</h2>}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default Layout;
