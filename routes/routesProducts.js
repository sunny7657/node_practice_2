import express from "express";
import { getProducts } from "../controllers/productsControllers.js";

const productsRouter = express.Router();

productsRouter.get("/", getProducts);

productsRouter.get("/:id", getOneProduct);

productsRouter.post("/");

export default productsRouter;
