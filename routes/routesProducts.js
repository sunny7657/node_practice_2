import express from "express";
import {
  createProduct,
  getProducts,
} from "../controllers/productsControllers.js";

const productsRouter = express.Router();

productsRouter.get("/", getProducts);

// productsRouter.get("/:id", getOneProduct);

productsRouter.post("/", createProduct);

export default productsRouter;
