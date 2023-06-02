import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Logo from "../assets/icons/Logo";
import Cart from "../assets/icons/Cart";
import Burger from "../assets/icons/Burger";

import Nav from "./Nav";

export default function Header() {
  return (
    <>
      <header>
        <div className="header-container">
          <button className="cart-button">
            <Burger />
          </button>
          <Logo />
          <Nav />
          <button>
            <Cart />
          </button>
        </div>
      </header>
    </>
  );
}
