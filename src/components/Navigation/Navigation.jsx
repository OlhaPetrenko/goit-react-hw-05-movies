import { NavLink, Outlet } from 'react-router-dom';
import s from './Navigation.module.css';
function Navigation() {
  return (
    <>
      <nav className={s.Nav}>
        <NavLink to="/" className={s.Link}>
          Головна
        </NavLink>
        <NavLink to="/movie" className={s.Link}>
          Фільми
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}

export default Navigation;
