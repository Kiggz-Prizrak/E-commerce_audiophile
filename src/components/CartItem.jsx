import Image from "./Image";
import ButtonQuantity from "./button/ButtonQuantity";

import Plus from "../assets/icons/Plus";
import Less from "../assets/icons/Less";

import { useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from "../store/cartSlice";

const CartItem = ({ id, image, name, price, productQuantity, link }) => {
  const dispatch = useDispatch();
  return (
    <>
      <Image image={image} link={link}/>
      <div className="cartItem-text">
        <p>{name}</p>
        <p className="subtitle">{price} $</p>
      </div>
      <div className="buttonQuantity-container">
        <button
          onClick={() => {
            if (productQuantity > 1) {
              dispatch(decrementQuantity(id));
            }
          }}
        >
          <Less />
        </button>
        <h6>{productQuantity}</h6>

        <button
          className="more"
          onClick={() => dispatch(incrementQuantity(id))}
        >
          <Plus />
        </button>
      </div>
    </>
  );
};

export default CartItem;
