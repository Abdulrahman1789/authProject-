import mongoose from "mongoose";

export const connectDB = async (): Promise<void> => {
    try {
        await mongoose.connect(process.env.MONGODB_URI! as string)
        console.log("Connected to DB");
    } catch (error) {
        console.error("Databasr Connection Faild", error);
        process.exit(1);
    }


}