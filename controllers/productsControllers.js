import { createError } from "../helpers/createError.js";
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

export const updateProduct = async (req, res, next) => {
  try {
    const { body, params } = req;
    const products = await s.updateProduct(params.id, body);

    if (!products) {
      throw createError(404, "Not found");
    }

    res.json(products);
  } catch (error) {
    next(error);
  }
};

export const deleteProduct = async (req, res, next) => {};
