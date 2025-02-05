import React from "react";
import { Link } from "react-router-dom";

// import { Nav, Logo, NavLinks, NavLink } from "./Navbar.styles";

export default function Navbar() {
   return (
      <nav>
         <Link to="/">
            <img src="/assets/img/logo.jpg" alt="Logo" title="" />
         </Link>

         <Link to="/cart">Shopping cart</Link>
      </nav>
   );
}
