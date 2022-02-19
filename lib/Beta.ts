import { config } from "dotenv";
import { is_dev, override_dev } from "./project.json";

const { parsed } = config();

export function getToken() {
    if (override_dev && parsed?.TOKEN) {
        return parsed.TOKEN;
    }

    if (!parsed?.DEV_TOKEN && !parsed?.TOKEN) {
        throw new Error("Both development and production bot tokens don't exist");
    }

    return isDevelopment() === "DEV" ? parsed.DEV_TOKEN : parsed.TOKEN;
}

export function isDevelopment() {
    return is_dev ? "DEV" : "PROD";
}