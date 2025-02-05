import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getProducts } from "../../redux/features/product/productSlice";
import SearchBar from "../components/SearchBar";

export default function ProductsList() {
   const dispatch = useDispatch();
   const { products, isLoading } = useSelector((state) => state.product);

   useEffect(() => {
      dispatch(getProducts());
   }, [dispatch]);

   return (
      <>
         <SearchBar />
         <div className="product-grid">
            {!isLoading && products.length === 0 && (
               <div className="col-span-12">
                  <p className="text-center mx-auto">No products available...</p>
               </div>
            )}
            {products &&
               products.length > 0 &&
               products.slice(0, 20).map((item, index) => (
                  <Link to={`/detail/${item.id}`}>
                     <div className="product-card" key={index}>
                        <div className="image">
                           <img src={item.imageUrl} alt={item.name} />
                        </div>
                        <div className="">
                           {item.brand}
                           {item.name}
                           {item.basePrice} EUR
                        </div>
                     </div>
                  </Link>
               ))}
         </div>
      </>
   );
}
