import express from "express";
import {
  createProduct,
  getProducts,
  updateProduct,
} from "../controllers/productsControllers.js";
import { validateCreate, validateUpdate } from "../helpers/validation.js";

const productsRouter = express.Router();

productsRouter.get("/", getProducts);

productsRouter.post("/", validateCreate, createProduct);

productsRouter.patch("/:id", validateUpdate, updateProduct);

export default productsRouter;
