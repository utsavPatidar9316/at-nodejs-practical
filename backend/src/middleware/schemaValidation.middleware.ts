import { NextFunction, Request, Response } from "express";
import { ObjectSchema } from "joi";
import { RES_STATUS_CODE } from "../constant/resStatusCode";

const schemaValidation =
  (validator: ObjectSchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (validator) {
        await validator.validateAsync(req.body);
      }
      return next();
    } catch (error) {
      return res.status(RES_STATUS_CODE.RS400).send(error);
    }
  };

export default schemaValidation;
