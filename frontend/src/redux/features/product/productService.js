import axios from "axios";
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
// export const API_URL = `${BACKEND_URL}/`;

// Subscribe
const getProducts = async () => {
   const response = await axios.get(`${BACKEND_URL}/products/getPhones`);
   console.log(response.data);
   return response.data;
};

const getProduct = async (id) => {
   const response = await axios.get(`${BACKEND_URL}/products/getPhone/${id}`);
   console.log(response.data.data);
   return response.data.data;
};

const getFeaturedProducts = async (lang) => {
   const response = await axios.get(`${BACKEND_URL}/fake_data/products_${lang}.json`);
   return response.data.filter((product) => product.featured === true);
};

const authService = {
   getProducts,
   getProduct,
};

export default authService;
