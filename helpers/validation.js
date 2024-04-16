import Joi from "joi";
import { createError } from "./createError.js";

const updateSchema = Joi.object({
  name: Joi.string().min(2),
  price: Joi.number().min(1),
});

export const validateUpdate = (req, res, next) => {
  try {
    const { error } = updateSchema.validate(req.body);
    if (error) {
      throw createError(400, error.message);
    }
    next();
  } catch (error) {
    next(error);
  }
};

const createSchema = Joi.object({
  name: Joi.string().min(2).required(),
  price: Joi.number().min(1).required(),
});

export const validateCreate = (req, res, next) => {
  try {
    const { error } = createSchema.validate(req.body);
    if (error) {
      throw createError(400, error.message);
    }
    next();
  } catch (error) {
    next(error);
  }
};
