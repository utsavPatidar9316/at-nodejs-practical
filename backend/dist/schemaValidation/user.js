"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidationSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const UserValidationSchema = joi_1.default.object({
    userName: joi_1.default.string().min(3).max(30).required().messages({
        "string.base": "Username should be a type of text",
        "string.empty": "Username cannot be an empty field",
        "string.min": "Username should have a minimum length of {#limit}",
        "string.max": "Username should have a maximum length of {#limit}",
        "any.required": "Username is a required field",
    }),
    email: joi_1.default.string()
        .email({ tlds: { allow: false } })
        .required()
        .messages({
        "string.email": "Email must be a valid email",
        "any.required": "Email is a required field",
    }),
    password: joi_1.default.string().min(6).required().messages({
        "string.base": "Password should be a type of text",
        "string.empty": "Password cannot be an empty field",
        "string.min": "Password should have a minimum length of {#limit}",
        "any.required": "Password is a required field",
    }),
});
exports.UserValidationSchema = UserValidationSchema;
