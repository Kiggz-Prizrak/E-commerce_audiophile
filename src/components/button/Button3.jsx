import { NavLink } from "react-router-dom";

import OrangeArrrow from "../../assets/icons/OrangeArrow";

const Button3 = (link) => {
  return (
    <button className="Button3">
      <NavLink to={link}>SHOP</NavLink>
      <OrangeArrrow />
    </button>
  );
};

export default Button3;