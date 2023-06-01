import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import Logo from "../assets/icons/Logo";
import Cart from "../assets/icons/Cart";
import Burger from "../assets/icons/Burger";

export default function Header() {
  return (
    <>
      <header>
        <div className="header-container">
          <button className="cart-button">
            <Burger />
          </button>

          <Logo />
          <nav>
            <NavLink to="/" className="home-link">
              HOME
            </NavLink>
            <NavLink to="/headphones">HEADPHONES</NavLink>
            <NavLink to="/speakers">SPEAKERS</NavLink>
            <NavLink to="/earphones">EARPHONES</NavLink>
          </nav>
          <button>
            <Cart />
          </button>
        </div>
      </header>
    </>
  );
}
