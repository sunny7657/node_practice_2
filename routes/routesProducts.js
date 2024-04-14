import express from "express";
import { getProducts } from "../services/serviceProducts.js";

const productsRouter = express.Router();

productsRouter.get("/", async (req, res) => {
  try {
    const products = await getProducts();
    res.json(products);
  } catch (error) {
    next(error);
  }
});

export default productsRouter;
