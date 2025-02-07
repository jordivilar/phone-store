import axios from "axios";
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const getProducts = async () => {
   const response = await axios.get(`${BACKEND_URL}/products/getPhones`);
   return response.data.slice(0, 20);
};

const getProduct = async (id) => {
   const response = await axios.get(`${BACKEND_URL}/products/getPhone/${id}`);
   return response.data.data;
};

const getProductsByQuery = async (query) => {
   const response = await axios.get(`${BACKEND_URL}/products/getPhonesByQuery/${query}`);
   return response.data;
};

const productService = {
   getProducts,
   getProduct,
   getProductsByQuery,
};

export default productService;
