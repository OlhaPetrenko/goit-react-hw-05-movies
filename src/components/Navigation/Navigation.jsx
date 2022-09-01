import { NavLink, Outlet } from 'react-router-dom';
import s from './Navigation.module.css';
function Navigation() {
  return (
    <>
      <nav className={s.Nav}>
        <NavLink
          to="/"
          className={props => {
            return props.isActive ? `${s.Active} ${s.Link}` : s.Link;
          }}
        >
          Головна
        </NavLink>
        <NavLink
          to="/movie"
          className={props => {
            return props.isActive ? `${s.Active} ${s.Link}` : s.Link;
          }}
        >
          Фільми
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}

export default Navigation;
