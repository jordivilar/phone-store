import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

import { Button } from "../../styles/Button.styles";
import { H2, SmText } from "../../styles/Text.styles";

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
                        <div>{<img src={item.image} alt={item.name} />}</div>
                        <div>
                           <div>
                              <SmText>{item.name.toUpperCase()}</SmText>
                              <SmText>
                                 {item.storage} | {item.color.toUpperCase()}
                              </SmText>
                           </div>
                           <div>
                              <SmText>{`${item.price} EUR`}</SmText>
                           </div>
                           <div>
                              <Button $cart onClick={() => removeFromCart(item.id)}>
                                 Remove
                              </Button>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>

               <div className="cart-footer">
                  <Link to="/">
                     <Button>CONTINUE SHOPPING</Button>
                  </Link>
                  <div>
                     <SmText>TOTAL {getTotalPrice()} EUR</SmText>
                     <Button $black>PAY</Button>
                  </div>
               </div>
            </div>
         )}
      </>
   );
}
