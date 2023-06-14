import { useNavigate } from "react-router-dom";

const Button = ({ link, className, title}) => {
  const navigate = useNavigate();

  return (
    <button className={className} onClick={() => navigate(`/${link}`)}>
      {title || "SEE PRODUCT"}
    </button>
  );
};

export default Button;
