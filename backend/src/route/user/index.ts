import express from "express";
import controller from "../../controller/user.controller";
import { USER_ROUTE } from "../../utils/route.enums";
import schemaValidation from "../../middleware/schemaValidation.middleware";
import { UserValidationSchema } from "../../schemaValidation/user";
const userRoute = express.Router();

userRoute.post(
  USER_ROUTE.create,
  schemaValidation(UserValidationSchema),
  controller.signup
);

userRoute.post(USER_ROUTE.login, controller.signin);

userRoute.get(USER_ROUTE.getOne, controller.get);

userRoute.put(USER_ROUTE.updateOne, controller.update);

export default userRoute;
