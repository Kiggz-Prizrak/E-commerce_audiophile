import { NavLink } from "react-router-dom";

const Nav = ({ setNavIsOpen, navIsOpen }) => {
  return (
    <nav className={navIsOpen ? "nav-open" : "nav-closed"}>
      <NavLink to="/" className="home-link" onClick={() => setNavIsOpen(false)}>
        HOME
      </NavLink>
      <NavLink to="/category/headphones" onClick={() => setNavIsOpen(false)}>
        HEADPHONES
      </NavLink>
      <NavLink to="/category/speakers" onClick={() => setNavIsOpen(false)}>
        SPEAKERS
      </NavLink>
      <NavLink to="/category/earphones" onClick={() => setNavIsOpen(false)}>
        EARPHONES
      </NavLink>
    </nav>
  );
};

export default Nav;
