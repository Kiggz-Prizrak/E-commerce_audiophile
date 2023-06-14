import { useState } from "react";
import ButtonBack from "../components/button/ButtonBack";
import CheckoutForm from "../components/CheckoutForm";
import CheckoutValidationModal from "../components/CheckoutValidationModal";

const Checkout = () => {

  const [isValid, setIsValid] = useState(false);

  return (
    <div>
      <h1>chechout</h1>
      <ButtonBack />
      <div>
        <CheckoutForm setIsValid={setIsValid} />
      </div>
      {isValid ? <CheckoutValidationModal /> : ""}
    </div>
  );
};

export default Checkout;