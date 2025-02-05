import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

import { Button } from "../../styles/Button.styles";
import { ProductName, ProductPrice, ProductOptions, H2, SmText } from "../../styles/Text.styles";

export default function Cart() {
   const { cart, removeFromCart, getTotalPrice } = useCart();

   return (
      <>
         <H2>CART ({cart.length})</H2>
         {cart.length > 0 && (
            <div>
               <div className="cart-items">
                  {cart.map((item) => (
                     <div key={item.id} className="cart-item">
                        <div>
                           <img src={item.colorOptions[0].imageUrl} alt={item.name} />
                        </div>
                        <div>
                           <SmText>{item.name.toUpperCase()}</SmText>
                           <SmText>
                              {item.storageOptions[0].capacity} | {item.colorOptions[0].name.toUpperCase()}
                           </SmText>
                           <SmText>{`${item.basePrice} EUR`}</SmText>
                           <button onClick={() => removeFromCart(item.id)}>Remove</button>
                        </div>
                     </div>
                  ))}
               </div>

               <Link to="/">
                  <Button>CONTINUE SHOPPING</Button>
               </Link>
               <SmText>TOTAL {getTotalPrice()} EUR</SmText>
               <Button $secondary>PAY</Button>
            </div>
         )}
      </>
   );
}
