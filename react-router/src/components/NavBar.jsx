import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <h2 className="logo">MyStore</h2>

      <div className="nav-links">
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          to="/"
          end
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          to="/contact"
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
