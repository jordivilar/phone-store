import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

export default function Navbar() {
   const { cart } = useCart();

   return (
      <nav>
         <Link to="/">
            <img src="/assets/img/logo.jpg" alt="Logo" />
         </Link>

         <Link to="/cart">
            <img className="cart-icon" src="/assets/img/cart.jpg" alt="Cart" /> {cart.length}
         </Link>
      </nav>
   );
}
