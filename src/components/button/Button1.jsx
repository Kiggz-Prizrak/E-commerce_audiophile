import { useNavigate } from "react-router-dom";

const Button1 = ({ link }) => {
  const navigate = useNavigate();

  return (
    <button className="Button1" onClick={() => navigate(`/${link}`)}>
      SHOP
    </button>
  );
};

export default Button1;
