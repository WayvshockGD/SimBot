"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const gradient_string_1 = __importDefault(require("gradient-string"));
module.exports = class Logger {
    time;
    constructor() {
        this.time = new Date().toString();
    }
    default(message) {
        console.log((0, gradient_string_1.default)("blue", "purple")(message));
    }
    warn(message) {
        console.log((0, gradient_string_1.default)("red", "orange")(message));
    }
    // Just because it's an error it will send json instead
    error(message) {
        console.log(this.json("ERROR", message));
    }
    json(level, message) {
        return `{ "level": "${level}", "message": "${message}" }`;
    }
};
