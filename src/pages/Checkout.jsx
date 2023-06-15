import { useState } from "react";
import ButtonBack from "../components/button/ButtonBack";
import CheckoutForm from "../components/CheckoutForm";
import CheckoutValidationModal from "../components/CheckoutValidationModal";

const Checkout = () => {
  const [isValid, setIsValid] = useState(false);

  return (
    <div className="page-container checkout-container">
      <div className="page-content">
        <ButtonBack />
        <CheckoutForm setIsValid={setIsValid} />
        {isValid ? <CheckoutValidationModal /> : ""}
      </div>
    </div>
  );
};

export default Checkout;
