import { useState } from "react";
import { useSelector } from "react-redux";

import Logo from "../assets/icons/Logo";
import Cart from "../assets/icons/Cart";
import Burger from "../assets/icons/Burger";

import Nav from "./Nav";
import CartModal from "./CartModal";

export default function Header() {

  const cart = useSelector((state) => state.cart);
  const [cartIsOpen, setCartIsOpen] = useState(false);

  return (
    <>
      <header>
        <div className="header-container">
          <button className="cart-button">
            <Burger />
          </button>
          <Logo />
          <Nav />
          <button
            className="cart-button"
            onClick={() => setCartIsOpen(!cartIsOpen)}
          >
            {cart.length ? (
              <span className="cart-quantity-label">{cart.length}</span>
            ) : (
              ""
            )}

            <Cart />
          </button>
        </div>
      </header>
      {cartIsOpen ? <CartModal setCartIsOpen={setCartIsOpen} /> : ""}
    </>
  );
}
