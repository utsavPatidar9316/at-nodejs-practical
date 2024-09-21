"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
/**
 *
 * @param key
 * @returns Environment variable
 */
function getEnv(key) {
    return process.env[key];
}
exports.default = getEnv;
