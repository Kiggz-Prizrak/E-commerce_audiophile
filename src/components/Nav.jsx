import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <NavLink to="/" className="home-link">
        HOME
      </NavLink>
      <NavLink to="/headphones">HEADPHONES</NavLink>
      <NavLink to="/speakers">SPEAKERS</NavLink>
      <NavLink to="/earphones">EARPHONES</NavLink>
    </nav>
  );
};

export default Nav
