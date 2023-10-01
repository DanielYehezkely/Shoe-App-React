import { Outlet, NavLink } from 'react-router-dom';

const SharedLayout = ({ user }) => {

  return (
    <div className="container">
      <header>
        <h1>Shoe Daniel's ?</h1>
        <div className="header-right">
          {user && <span>Hello, {user.name}</span>}
        </div>
      </header>
      <nav>
        <ul className="nav-links">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => isActive ? 'active' : undefined}
            >Home</NavLink>
          </li>
          <li>
            <NavLink
              to="/add"
              className={({ isActive }) => isActive ? 'active' : undefined}
            >Add Shoe</NavLink>
          </li>
          <li>
            <NavLink
              to="/add"
              className={({ isActive }) => isActive ? 'active' : undefined}
            >Shoes</NavLink>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default SharedLayout;