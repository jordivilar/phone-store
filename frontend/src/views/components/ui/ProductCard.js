import React from "react";
import { Link } from "react-router-dom";
import { XsText, SmText } from "../../../styles/Text.styles";

// import { Nav, Logo, NavLinks, NavLink } from "./Navbar.styles";

export default function ProductCard({ data }) {
   return (
      <Link to={`/detail/${data.id}`} aria-label={`Product: ${data.name}`}>
         <div className="product-card">
            <div className="image" style={{ backgroundImage: `url('${data.imageUrl}')` }}></div>
            <div className="">
               <div>
                  <XsText $muted>{data.brand.toUpperCase()}</XsText>
               </div>
               <div className="product-card-info-wrapper">
                  <SmText>{data.name.toUpperCase()}</SmText>
                  <SmText>{data.basePrice} EUR</SmText>
               </div>
            </div>
         </div>
      </Link>
   );
}
