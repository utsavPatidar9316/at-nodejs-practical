"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.USER_ROUTE = exports.COMMON_ROUTE = void 0;
var COMMON_ROUTE;
(function (COMMON_ROUTE) {
    COMMON_ROUTE["api"] = "/api";
    COMMON_ROUTE["user"] = "/user";
})(COMMON_ROUTE || (exports.COMMON_ROUTE = COMMON_ROUTE = {}));
var USER_ROUTE;
(function (USER_ROUTE) {
    USER_ROUTE["create"] = "/create";
    USER_ROUTE["login"] = "/login";
    USER_ROUTE["getOne"] = "/get/:id";
    USER_ROUTE["updateOne"] = "/update/:id";
})(USER_ROUTE || (exports.USER_ROUTE = USER_ROUTE = {}));
