import { Request, Response, NextFunction } from "express";
import { signUp, signIn, getOne, updateOne } from "../services/user.services";

const signup = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await signUp(req, res, next);
    return res.json(result);
  } catch (error) {
    next(error);
  }
};

const signin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await signIn(req, res, next);
    return res.json(result);
  } catch (error) {
    next(error);
  }
};

const get = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await getOne(req, res);
    return res.json(result);
  } catch (error) {
    next(error);
  }
};

const update = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await updateOne(req, res);
    return res.json(result);
  } catch (error) {
    next(error);
  }
};

const c = {
  signup,
  signin,
  get,
  update,
};

export default c;
