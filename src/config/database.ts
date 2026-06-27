import mongoose from "mongoose";
import { env } from "./env";

export const connectDB = async (): Promise<void> => {
    try {
        if (!env.MONGO_URI) {
            throw new Error("MONGO_URI environment variable is not defined.");
        }
        await mongoose.connect(env.MONGO_URI);
        console.log("Connected to DB");
    } catch (error) {
        console.error("Database Connection Failed:", error);
        process.exit(1);
    }
};