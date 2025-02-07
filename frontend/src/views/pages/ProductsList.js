import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getProducts } from "../../redux/features/product/productSlice";
import SearchBar from "../components/SearchBar";
import ProductCard from "../components/ui/ProductCard";

export default function ProductsList() {
   const dispatch = useDispatch();
   const { products } = useSelector((state) => state.product);

   useEffect(() => {
      dispatch(getProducts());
   }, [dispatch]);

   return (
      <>
         <SearchBar />
         <div className="product-grid">
            {products && products.length > 0 && products.map((item, index) => <ProductCard key={index} data={item} />)}
         </div>
      </>
   );
}
