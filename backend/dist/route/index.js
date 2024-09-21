"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const route_enums_1 = require("../utils/route.enums");
const user_1 = __importDefault(require("./user"));
const appRoute = express_1.default.Router();
const routes = [{ p: route_enums_1.COMMON_ROUTE.user, r: user_1.default }];
routes.forEach((r) => ((r === null || r === void 0 ? void 0 : r.p) ? appRoute.use(r.p, r.r) : appRoute.use(r.r)));
exports.default = appRoute;
