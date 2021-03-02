import dotenv from 'dotenv';
import fs from "fs";

if (fs.existsSync(".env")) {
    console.log("Using .env file to supply config environment variables");
    dotenv.config({ path: ".env" });
}

export const ENVIRONMENT = process.env.NODE_ENV;
const prod = ENVIRONMENT === "production";
export const MONGODB_URI = prod ? process.env["MONGODB_URI"] : process.env["MONGODB_URI_LOCAL"];
export const BOT_URL = process.env["BOT_URL"];

if (!BOT_URL) {
    console.log("No client secret. Set SESSION_SECRET environment variable.");
}

if (!MONGODB_URI) {
    if (prod) {
        console.log("No mongo connection string. Set MONGODB_URI environment variable.");
    } else {
        console.log("No mongo connection string. Set MONGODB_URI_LOCAL environment variable.");
    }
}
