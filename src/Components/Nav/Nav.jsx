import { NavLink } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
  return (
    <nav>
      <ul className="NavList">
        <li className="NavList__item">
          <NavLink
            to="/"
            className="NavLink"
            activeClassName="NavLink--active"
            exact
          >
            На главную
          </NavLink>
        </li>
        <li className="NavList__item">
          <NavLink
            to="/counter"
            className="NavLink"
            activeClassName="NavLink--active"
          >
            Counter
          </NavLink>
        </li>
        <li className="NavList__item">
          <NavLink
            to="/signup"
            className="NavLink"
            activeClassName="NavLink--active"
          >
            Sign Up
          </NavLink>
        </li>
        <li className="NavList__item">
          <NavLink
            to="/clock"
            className="NavLink"
            activeClassName="NavLink--active"
          >
            Clock
          </NavLink>
        </li>
        <li className="NavList__item">
          <NavLink
            to="/news"
            className="NavLink"
            activeClassName="NavLink--active"
          >
            News
          </NavLink>
        </li>
        <li className="NavList__item">
          <NavLink
            to="/context"
            className="NavLink"
            activeClassName="NavLink--active"
          >
            Context
          </NavLink>
        </li>
        <li className="NavList__item">
          <NavLink
            to="/todos"
            className="NavLink"
            activeClassName="NavLink--active"
          >
            Todos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
