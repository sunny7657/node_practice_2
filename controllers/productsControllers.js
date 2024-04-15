import * as s from "../services/serviceProducts.js";

export const getProducts = async (req, res) => {
  try {
    const products = await s.getProducts();
    res.json(products);
  } catch (error) {
    next(error);
  }
};

const getProductById = async () => {};
