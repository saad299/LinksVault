import mongoose from "mongoose";

export interface ILink {
    url: string;
    title: string;
    description: string;
    image: string;
    tags: string[];
    userId: string;
    createdAt: Date;
    updatedAt?: Date;
    _id: string;
    __v: number;
    _doc?: ILink;
    toJSON: () => ILink;
    toObject: () => ILink;
    save: () => Promise<ILink>;
    deleteOne: () => Promise<void>;
    findById: (id: string) => Promise<ILink>;
    findByIdAndUpdate: (id: string, update: Partial<ILink>) => Promise<ILink>;
    findByIdAndDelete: (id: string) => Promise<void>;
}

const linkSchema = new mongoose.Schema<ILink>({
    url: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    tags: {
        type: [String],
        required: true,
    },
    userId: {
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

const Link = mongoose.model<ILink>("Link", linkSchema);

export default Link;