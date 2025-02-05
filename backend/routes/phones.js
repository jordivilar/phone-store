const express = require("express");
const router = express.Router();
const axios = require("axios");

const API_URL = `${process.env.API_URL}`;
const API_KEY = process.env.API_KEY;

router.get("/getPhones", async (req, res) => {
   try {
      const response = await axios.get(`${API_URL}/products`, {
         headers: {
            "x-api-key": API_KEY,
         },
      });
      res.status(200).json(response.data);
   } catch (error) {
      console.error(error);
      res.status(500).json("Cannot find products");
   }
});

router.get("/getPhone/:id", async (req, res) => {
   const id = req.params.id;
   try {
      const response = await axios.get(`${API_URL}/products/${id}`, {
         headers: {
            "x-api-key": API_KEY,
         },
      });
      res.status(200).json({
         success: true,
         data: response.data,
      });
   } catch (error) {
      console.error(error);
      res.status(500).json({
         success: false,
         message: `Cannot find product with id: ${id}`,
      });
   }
});

module.exports = router;
