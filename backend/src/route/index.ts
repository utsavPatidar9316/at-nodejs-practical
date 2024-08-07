import express from "express";
import { COMMON_ROUTE } from "../utils/route.enums";
import userRoute from "./user";

const appRoute = express.Router();

const routes = [{ p: COMMON_ROUTE.user, r: userRoute }];

routes.forEach((r) => (r?.p ? appRoute.use(r.p, r.r) : appRoute.use(r.r)));

export default appRoute;
