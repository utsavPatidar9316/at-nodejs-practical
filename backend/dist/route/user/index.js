"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = __importDefault(require("../../controller/user.controller"));
const route_enums_1 = require("../../utils/route.enums");
const schemaValidation_middleware_1 = __importDefault(require("../../middleware/schemaValidation.middleware"));
const user_1 = require("../../schemaValidation/user");
const userRoute = express_1.default.Router();
userRoute.post(route_enums_1.USER_ROUTE.create, (0, schemaValidation_middleware_1.default)(user_1.UserValidationSchema), user_controller_1.default.signup);
userRoute.post(route_enums_1.USER_ROUTE.login, user_controller_1.default.signin);
userRoute.get(route_enums_1.USER_ROUTE.getOne, user_controller_1.default.get);
userRoute.put(route_enums_1.USER_ROUTE.updateOne, user_controller_1.default.update);
exports.default = userRoute;
