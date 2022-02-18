import { config } from "dotenv";
import { is_dev } from "./project.json";

const { parsed } = config();

export function getToken() {
    return isDevelopment() === "DEV" ? parsed?.DEV_TOKEN : parsed?.TOKEN;
}

export function isDevelopment() {
    return is_dev ? "DEV" : "PROD";
}