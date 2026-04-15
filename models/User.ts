import mongoose from "mongoose";

export interface IUser {
    name: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt?: Date;
    _id: string;
    __v: number;
    _doc?: IUser;
    toJSON: () => IUser;
    toObject: () => IUser;
    save: () => Promise<IUser>;
    deleteOne: () => Promise<void>;
    findById: (id: string) => Promise<IUser>;
    findByIdAndUpdate: (id: string, update: Partial<IUser>) => Promise<IUser>;
    findByIdAndDelete: (id: string) => Promise<void>;
}

const userSchema = new mongoose.Schema<IUser>({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
})

const User = mongoose.model<IUser>("User", userSchema);

export default User;