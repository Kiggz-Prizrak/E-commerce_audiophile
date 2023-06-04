import { useNavigate } from "react-router-dom";

const Button1 = ({ link, className}) => {
  const navigate = useNavigate();

  return (
    <button className={className} onClick={() => navigate(`/${link}`)}>
      SEE PRODUCT
    </button>
  );
};

export default Button1;
