import { RES_STATUS_CODE } from "../constant/resStatusCode";
import responseWrapper from "../helper/responseWrapper";
import userModel, { UserModel } from "../model/user.model";
import { COMMON_MESSAGE } from "../utils/messages.enum";
import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import getEnv from "../config/env.config";

const signUp = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userName, email, password } = req.body;

    const existingUser = await userModel.findOne({
      $or: [{ userName }, { email }],
    });

    if (existingUser) {
      return responseWrapper(
        false,
        COMMON_MESSAGE.Already_exist.replace("${param}", "Username or email"),
        RES_STATUS_CODE.RS400
      );
    }

    const user: UserModel = new userModel({
      userName,
      email,
      password,
    }) as UserModel;

    await user.save();

    return responseWrapper(
      true,
      COMMON_MESSAGE.Success,
      RES_STATUS_CODE.RS200,
      user
    );
  } catch (error) {
    next(error);
  }
};

const signIn = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });

    if (!user) {
      return responseWrapper(
        false,
        COMMON_MESSAGE.Not_exist.replace("${param}", "Email"),
        RES_STATUS_CODE.RS400
      );
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return responseWrapper(
        false,
        COMMON_MESSAGE.Invalid.replace("${param}", "Password"),
        RES_STATUS_CODE.RS400
      );
    }

    const userData = {
      id: user._id,
      userName: user.userName,
      email: user.email,
    };

    const token = jwt.sign(userData, String(getEnv("JWT_SECRET")), {
      expiresIn: "1h",
    });

    return responseWrapper(
      true,
      COMMON_MESSAGE.Success,
      RES_STATUS_CODE.RS200,
      {
        user: userData,
        token,
      }
    );
  } catch (error) {
    next(error);
  }
};

const getOne = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(RES_STATUS_CODE.RS400)
      .send(COMMON_MESSAGE.MONGOOSE_ID_VALIDATION);
  }
  const data = await userModel.findById(id);
  if (data)
    return responseWrapper(
      true,
      COMMON_MESSAGE.Success,
      RES_STATUS_CODE.RS200,
      data
    );
  else
    return responseWrapper(
      false,
      COMMON_MESSAGE.Not_Found,
      RES_STATUS_CODE.RS404,
      null
    );
};

const updateOne = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(RES_STATUS_CODE.RS400)
      .send(COMMON_MESSAGE.MONGOOSE_ID_VALIDATION);
  }

  const updates = req.body;

  const { password } = updates;

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  const data = await userModel.findByIdAndUpdate(
    id,
    { password: hashPassword },
    { new: true }
  );

  if (data) {
    return res
      .status(200)
      .json(
        responseWrapper(
          true,
          COMMON_MESSAGE.Success,
          RES_STATUS_CODE.RS200,
          data
        )
      );
  } else {
    return res
      .status(404)
      .json(
        responseWrapper(
          false,
          COMMON_MESSAGE.Not_Found,
          RES_STATUS_CODE.RS404,
          null
        )
      );
  }
};

export { signUp, signIn, getOne, updateOne };
