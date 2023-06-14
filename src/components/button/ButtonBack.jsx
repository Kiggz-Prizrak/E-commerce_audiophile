import { useNavigate } from "react-router-dom";

const ButtonBack = ({pageLink}) => {

 
  
  const navigate = useNavigate();

   const goBack = () => {
     navigate(-1);
   };

  return (
    <div className="buttonBack-container">
      {/* <button className="buttonBack" onClick={() => navigate(`/${pageLink}`)}> */}
      <button className="buttonBack" onClick={goBack}>
        Go Back
      </button>
    </div>
  );
};
export default ButtonBack;
