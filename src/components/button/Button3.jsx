import { useNavigate } from "react-router-dom";

import OrangeArrrow from "../../assets/icons/OrangeArrow";

const Button3 = ({ link }) => {
  const navigate = useNavigate();
  return (
    <button className="Button3" onClick={() => navigate(`/${link}`)}>
      SHOP
      <OrangeArrrow />
    </button>
  );
};

export default Button3;
