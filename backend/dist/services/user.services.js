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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateOne = exports.getOne = exports.signIn = exports.signUp = void 0;
const resStatusCode_1 = require("../constant/resStatusCode");
const responseWrapper_1 = __importDefault(require("../helper/responseWrapper"));
const user_model_1 = __importDefault(require("../model/user.model"));
const messages_enum_1 = require("../utils/messages.enum");
const mongoose_1 = __importDefault(require("mongoose"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const env_config_1 = __importDefault(require("../config/env.config"));
const signUp = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userName, email, password } = req.body;
        const existingUser = yield user_model_1.default.findOne({
            $or: [{ userName }, { email }],
        });
        if (existingUser) {
            return (0, responseWrapper_1.default)(false, messages_enum_1.COMMON_MESSAGE.Already_exist.replace("${param}", "Username or email"), resStatusCode_1.RES_STATUS_CODE.RS400);
        }
        const user = new user_model_1.default({
            userName,
            email,
            password,
        });
        yield user.save();
        return (0, responseWrapper_1.default)(true, messages_enum_1.COMMON_MESSAGE.Success, resStatusCode_1.RES_STATUS_CODE.RS200, user);
    }
    catch (error) {
        next(error);
    }
});
exports.signUp = signUp;
const signIn = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        const user = yield user_model_1.default.findOne({ email });
        if (!user) {
            return (0, responseWrapper_1.default)(false, messages_enum_1.COMMON_MESSAGE.Not_exist.replace("${param}", "Email"), resStatusCode_1.RES_STATUS_CODE.RS400);
        }
        const isMatch = yield bcrypt_1.default.compare(password, user.password);
        if (!isMatch) {
            return (0, responseWrapper_1.default)(false, messages_enum_1.COMMON_MESSAGE.Invalid.replace("${param}", "Password"), resStatusCode_1.RES_STATUS_CODE.RS400);
        }
        const userData = {
            id: user._id,
            userName: user.userName,
            email: user.email,
        };
        const token = jsonwebtoken_1.default.sign(userData, String((0, env_config_1.default)("JWT_SECRET")), {
            expiresIn: "1h",
        });
        return (0, responseWrapper_1.default)(true, messages_enum_1.COMMON_MESSAGE.Success, resStatusCode_1.RES_STATUS_CODE.RS200, {
            user: userData,
            token,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.signIn = signIn;
const getOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
        return res
            .status(resStatusCode_1.RES_STATUS_CODE.RS400)
            .send(messages_enum_1.COMMON_MESSAGE.MONGOOSE_ID_VALIDATION);
    }
    const data = yield user_model_1.default.findById(id);
    if (data)
        return (0, responseWrapper_1.default)(true, messages_enum_1.COMMON_MESSAGE.Success, resStatusCode_1.RES_STATUS_CODE.RS200, data);
    else
        return (0, responseWrapper_1.default)(false, messages_enum_1.COMMON_MESSAGE.Not_Found, resStatusCode_1.RES_STATUS_CODE.RS404, null);
});
exports.getOne = getOne;
const updateOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
        return res
            .status(resStatusCode_1.RES_STATUS_CODE.RS400)
            .send(messages_enum_1.COMMON_MESSAGE.MONGOOSE_ID_VALIDATION);
    }
    const updates = req.body;
    const { password } = updates;
    const salt = yield bcrypt_1.default.genSalt(10);
    const hashPassword = yield bcrypt_1.default.hash(password, salt);
    const data = yield user_model_1.default.findByIdAndUpdate(id, { password: hashPassword }, { new: true });
    if (data) {
        return res
            .status(200)
            .json((0, responseWrapper_1.default)(true, messages_enum_1.COMMON_MESSAGE.Success, resStatusCode_1.RES_STATUS_CODE.RS200, data));
    }
    else {
        return res
            .status(404)
            .json((0, responseWrapper_1.default)(false, messages_enum_1.COMMON_MESSAGE.Not_Found, resStatusCode_1.RES_STATUS_CODE.RS404, null));
    }
});
exports.updateOne = updateOne;
