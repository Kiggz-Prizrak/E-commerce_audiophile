import { useNavigate } from "react-router-dom";

const ButtonBack = ({pageLink}) => {
  
  const navigate = useNavigate();
  return (
    <div className="buttonBack-container">
      <button className="buttonBack" onClick={() => navigate(`/${pageLink}`)}>
        Go Back
      </button>
    </div>
  );
};
export default ButtonBack;
