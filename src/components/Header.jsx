import { useState } from "react";
import { useSelector } from "react-redux";

import Logo from "../assets/icons/Logo";
import Cart from "../assets/icons/Cart";
import Burger from "../assets/icons/Burger";
import CloseIcon from "../assets/icons/CloseIcon";

import Nav from "./Nav";
import CartModal from "./CartModal";

export default function Header() {

  const cart = useSelector((state) => state.cart);
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [navIsOpen, setNavIsOpen] = useState(false);

  return (
    <>
      <header>
        <div className="header-container">
          <div className="nav-button-container">
            <button
              className={
                navIsOpen ? "button-nav-invisible" : "button-nav-visible"
              }
              onClick={() => setNavIsOpen(true)}
            >
              <Burger />
            </button>
            <button
              className={
                navIsOpen ? "button-nav-visible" : "button-nav-invisible"
              }
              onClick={() => setNavIsOpen(false)}
            >
              x
            </button>
          </div>
          <Logo />
          <Nav setNavIsOpen={setNavIsOpen} navIsOpen={navIsOpen} />
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
