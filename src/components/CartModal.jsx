import { useSelector, useDispatch } from "react-redux";

import ButtonSubmit from "./button/ButtonSubmit";
import CartItem from "./CartItem";

import { clearCart } from "../store/cartSlice";

const CartModal = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const totalPrice = cart.reduce(
    (accumulator, item) => accumulator + item.price * item.productQuantity,
    0
  );

  console.log(cart[0]);

  return (
    <div className="cartModal-background">
      <div className="cartModal-layout">
        <div className="cartModal-container">
          {cart.length ? (
            <>
              <div className="cart-header">
                <h5>CART ({cart.length})</h5>
                <button onClick={() => dispatch(clearCart())}>
                  <p>Remove all</p>
                </button>
              </div>
              <ul>
                {cart.map((e) => {
                  return (
                    <li>
                      <CartItem
                        id={e.id}
                        image={e.image}
                        name={e.name}
                        price={e.price}
                        productQuantity={e.productQuantity}
                      />
                    </li>
                  );
                })}
              </ul>
              <div className="cart-footer">
                <p>TOTAL</p>
                <h6>{totalPrice} $</h6>
              </div>
              <ButtonSubmit title='checkout' />
            </>
          ) : (
            <p>Votre panier est vide +</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartModal;
