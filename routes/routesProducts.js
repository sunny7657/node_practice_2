import express from "express";

const productsRouter = express.Router();

productsRouter.get("/", (req, res) => {
  res.json("Products get");
});

export default productsRouter;
