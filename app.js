import express from "express";
import productsRouter from "./routes/routesProducts.js";
import mongoose from "mongoose";
import { envConfig } from "./envConfig.js";
import authRouter from "./routes/authRoutes.js";

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.body);
  console.log(typeof req.body);

  next();
});

app.use("/auth", authRouter);
app.use("/products", productsRouter);

app.use((req, res, next) => {
  res.status(404).json({ message: "Route not found" });
});

app.use((error, req, res, next) => {
  const { status = 500, message } = error;
  res.status(status).json({ message });
});

mongoose
  .connect(envConfig.DB_HOST)
  .then(() => {
    app.listen(envConfig.PORT, () => {
      console.log(`Server is running. Use API on port ${envConfig.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
