import { useNavigate } from "react-router-dom";

const Button2 = ({ link }) => {
  const navigate = useNavigate();

  return (
    <button className="Button2" onClick={() => navigate(`/${link}`)}>
      SHOP
    </button>
  );
};

export default Button2;
