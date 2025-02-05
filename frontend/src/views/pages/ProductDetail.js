import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getProduct } from "../../redux/features/product/productSlice";

import { Button } from "../../styles/Button.styles";
import { H1, H2 } from "../../styles/Text.styles";

import Specifications from "../components/product_details/Specifications";
import SimilarProducts from "../components/product_details/SimilarProducts";

export default function ProductDetail() {
   const dispatch = useDispatch();
   const { product, isLoading } = useSelector((state) => state.product);

   const { id } = useParams();

   useEffect(() => {
      dispatch(getProduct(id));
   }, [dispatch, id]);

   return (
      <>
         <Link to="/">
            <svg
               stroke="currentColor"
               fill="currentColor"
               stroke-width="0"
               viewBox="0 0 24 24"
               height="24px"
               width="24px"
               xmlns="http://www.w3.org/2000/svg"
            >
               <path d="M15.28 5.22a.75.75 0 0 1 0 1.06L9.56 12l5.72 5.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-6.25-6.25a.75.75 0 0 1 0-1.06l6.25-6.25a.75.75 0 0 1 1.06 0Z"></path>
            </svg>
            BACK
         </Link>
         <div className="">
            {!isLoading && product.length === 0 && (
               <div className="col-span-12">
                  <p className="text-center mx-auto">No products available...</p>
               </div>
            )}
            {product && product.colorOptions && product.colorOptions.length > 0 && (
               <>
                  <div className="product-detail">
                     <div className="image">
                        <img src={product.colorOptions[0].imageUrl} alt={product.name} />
                     </div>
                     <div className="">
                        <H1>{product.name.toUpperCase()}</H1>
                        <H2>From {product.basePrice} EUR</H2>
                        <p>STORAGE: HOW MUCH SPACE DO YOU NEED?</p>
                        <ul>
                           {product.storageOptions.map((item, index) => (
                              <li key={`storage_${index}`}>{item.capacity}</li>
                           ))}
                        </ul>
                        <p>COLOR. PICK YOUR FAVOURITE</p>
                        <ul>
                           {product.colorOptions.map((item, index) => (
                              <li key={`color_${index}`} style={{ backgroundColor: item.hexCode }}>
                                 {item.name}
                              </li>
                           ))}
                        </ul>

                        <Button $secondary>ADD</Button>
                     </div>
                  </div>
                  <div className="product-description">
                     <div className="">
                        <H2>SPECIFICATIONS</H2>
                        <Specifications data={product} />
                     </div>
                  </div>
                  <div className="product-related">
                     <H2>SIMILAR ITEMS</H2>
                     {product.similarProducts && product.similarProducts.length > 0 && (
                        <SimilarProducts data={product.similarProducts} />
                     )}
                  </div>
               </>
            )}
         </div>
      </>
   );
}
