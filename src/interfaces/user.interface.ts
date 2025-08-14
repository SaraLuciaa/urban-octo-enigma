import mongoose from "mongoose";

    interface UserInput {
    name: string;
    email: string;
    password: string;
}

interface UserDocument extends UserInput, mongoose.Document {
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}

export type { UserInput };