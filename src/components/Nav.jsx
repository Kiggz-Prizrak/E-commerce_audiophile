import { NavLink } from "react-router-dom";

const Nav = ({ navIsOpen }) => {
  return (
    <nav className={navIsOpen ? "nav-open" : "nav-closed"}>
      <NavLink to="/" className="home-link">
        HOME
      </NavLink>
      <NavLink to="/category/headphones">HEADPHONES</NavLink>
      <NavLink to="/category/speakers">SPEAKERS</NavLink>
      <NavLink to="/category/earphones">EARPHONES</NavLink>
    </nav>
  );
};

export default Nav
