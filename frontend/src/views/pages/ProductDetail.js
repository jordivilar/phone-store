import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useCart } from "../../context/CartContext";

import { getProduct } from "../../redux/features/product/productSlice";

import { Button, RadioButton, StyledRadioWrapper } from "../../styles/Button.styles";
import { ProductName, ProductPrice, ProductOptions, H2, SmText } from "../../styles/Text.styles";

import Specifications from "../components/product_details/Specifications";
import SimilarProducts from "../components/product_details/SimilarProducts";

export default function ProductDetail() {
   const dispatch = useDispatch();
   const { product, isLoading } = useSelector((state) => state.product);

   const { id } = useParams();

   const { addToCart } = useCart(); // Función para añadir al carrito

   useEffect(() => {
      dispatch(getProduct(id));
   }, [dispatch, id]);

   return (
      <>
         <Link to="/">
            <SmText>
               <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="20px"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path d="M15.28 5.22a.75.75 0 0 1 0 1.06L9.56 12l5.72 5.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-6.25-6.25a.75.75 0 0 1 0-1.06l6.25-6.25a.75.75 0 0 1 1.06 0Z"></path>
               </svg>
               BACK
            </SmText>
         </Link>
         <div className="container">
            {!isLoading && product.length === 0 && (
               <div className="col-span-12">
                  <p className="text-center mx-auto">No products available...</p>
               </div>
            )}
            {product && product.colorOptions && product.colorOptions.length > 0 && (
               <>
                  <section className="product-detail">
                     <div>
                        <img src={product.colorOptions[0].imageUrl} alt={product.name} />
                     </div>
                     <div>
                        <ProductName>{product.name.toUpperCase()}</ProductName>
                        <ProductPrice>From {product.basePrice} EUR</ProductPrice>

                        <div className="product-options">
                           <ProductOptions>STORAGE: HOW MUCH SPACE DO YOU NEED?</ProductOptions>
                           {product.storageOptions.map((item, index) => (
                              <label key={`capacity_${index}`}>
                                 <RadioButton id={`option_${index}`} name="options" value={item.capacity} />
                                 <StyledRadioWrapper htmlFor={`option_${index}`}>{item.capacity}</StyledRadioWrapper>
                              </label>
                           ))}
                        </div>

                        <div className="product-options">
                           <ProductOptions>COLOR. PICK YOUR FAVOURITE</ProductOptions>
                           <ul>
                              {product.colorOptions.map((item, index) => (
                                 <li key={`color_${index}`} style={{ backgroundColor: item.hexCode }}>
                                    {item.name}
                                 </li>
                              ))}
                           </ul>
                        </div>

                        <Button $dark onClick={() => addToCart(product)}>
                           ADD TO CART
                        </Button>
                     </div>
                  </section>

                  <section>
                     <div className="">
                        <H2>SPECIFICATIONS</H2>
                        <Specifications data={product} />
                     </div>
                  </section>

                  <section>
                     <H2>SIMILAR ITEMS</H2>
                     {product.similarProducts && product.similarProducts.length > 0 && (
                        <SimilarProducts data={product.similarProducts} />
                     )}
                  </section>
               </>
            )}
         </div>
      </>
   );
}
