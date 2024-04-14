import express from "express";
import productsRouter from "./routes/routesProducts.js";

const app = express(); //create new instance

app.use((req, res, next) => {
  console.log(req.method);
  next();
});

app.use("/products", productsRouter);

app.listen(3000, () => {
  console.log("Server is running. Use our API on port: 3000");
});
