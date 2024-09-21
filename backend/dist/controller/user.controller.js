"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_services_1 = require("../services/user.services");
const signup = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, user_services_1.signUp)(req, res, next);
        return res.json(result);
    }
    catch (error) {
        next(error);
    }
});
const signin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, user_services_1.signIn)(req, res, next);
        return res.json(result);
    }
    catch (error) {
        next(error);
    }
});
const get = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, user_services_1.getOne)(req, res);
        return res.json(result);
    }
    catch (error) {
        next(error);
    }
});
const update = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, user_services_1.updateOne)(req, res);
        return res.json(result);
    }
    catch (error) {
        next(error);
    }
});
const c = {
    signup,
    signin,
    get,
    update,
};
exports.default = c;
