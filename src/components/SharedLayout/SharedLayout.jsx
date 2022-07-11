import { Fragment, Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import s from './SharedLayout.module.css';
import routes from 'service/routes';
import Loader from 'components/Loader';

const SharedLayout = () => {
  return (
    <Fragment>
      <header className={s.header}>
        <nav className={s.nav}>
          <ul className={s.list}>
            <li className={s.elem}>
              <NavLink to={routes.home} className={s.link}>
                Home
              </NavLink>
            </li>
            <li className={s.elem}>
              <NavLink to={routes.movies} className={s.link}>
                Movies
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Fragment>
  );
};

export default SharedLayout;
