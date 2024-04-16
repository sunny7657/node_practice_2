import * as s from "../services/serviceProducts.js";

export const getProducts = async (req, res, next) => {
  try {
    const products = await s.getProducts();
    res.json(products);
  } catch (error) {
    next(error);
  }
};

export const createProduct = async (req, res, next) => {
  try {
    const products = await s.createProduct(req.body);
    res.status(201).json(products);
  } catch (error) {
    next(error);
  }
};
