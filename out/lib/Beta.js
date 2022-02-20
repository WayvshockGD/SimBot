"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDevelopment = exports.getToken = void 0;
const dotenv_1 = require("dotenv");
const project_json_1 = require("./project.json");
(0, dotenv_1.config)();
const parsed = process.env;
function getToken() {
    if (project_json_1.override_dev && parsed?.TOKEN) {
        return parsed.TOKEN;
    }
    if (!parsed?.DEV_TOKEN && !parsed?.TOKEN) {
        throw new Error("Both development and production bot tokens don't exist");
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return isDevelopment() === "DEV" ? parsed.DEV_TOKEN : parsed.TOKEN;
}
exports.getToken = getToken;
function isDevelopment() {
    return project_json_1.is_dev ? "DEV" : "PROD";
}
exports.isDevelopment = isDevelopment;
