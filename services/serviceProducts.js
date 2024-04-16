import path from "path";
import fs from "fs/promises";
import { nanoid } from "nanoid";

const productsPath = path.resolve("db", "db.json");

export const getProducts = async () => {
  const data = await fs.readFile(productsPath);

  return JSON.parse(data);
};

export const createProduct = async (body) => {
  const products = await getProducts();

  const newProduct = { id: nanoid(), ...body };

  products.push(newProduct);

  await fs.writeFile(productsPath, JSON.stringify(products, null, 2));

  return newProduct;
};
