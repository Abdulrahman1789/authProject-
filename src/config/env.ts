import dotenv from "dotenv";

dotenv.config();

export const env = {
    PORT: process.env.PORT || 5000,
    NODE_ENV: process.env.NODE_ENV || "development",
    ALLOWED_ORIGINS: process.env.ALLOWED_ORIGINS,
    MONGO_URI: process.env.MONGODB_URI || process.env.MONGO_URI,
    JWT_SECRET: process.env.JWT_SECRET || "fallback_secret_key",
    JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || "7d",
};