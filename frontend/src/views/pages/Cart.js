import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

import { Button } from "../../styles/Button.styles";
import { H2, SmText } from "../../styles/Text.styles";
import { VisibilityFlexContainer } from "../../styles/Visibility.styles";

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

               <VisibilityFlexContainer $xs className="cart-footer">
                  <div>
                     <SmText $bold>TOTAL</SmText>
                  </div>
                  <div>
                     <SmText $bold>{getTotalPrice()} EUR</SmText>
                  </div>
               </VisibilityFlexContainer>
               <div className="cart-footer">
                  <Link to="/">
                     <Button>CONTINUE SHOPPING</Button>
                  </Link>
                  <div>
                     <VisibilityFlexContainer $lg>
                        <SmText $bold>TOTAL {getTotalPrice()} EUR</SmText>
                     </VisibilityFlexContainer>
                     <Button $black>PAY</Button>
                  </div>
               </div>
            </div>
         )}
      </>
   );
}
