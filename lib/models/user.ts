import * as mongoose from "mongoose";

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
    created_date: {
        default: Date.now,
        type: Date,
    },
    email: {
        index: true,
        type: String,
        unique: true,
    },
    firstName: {
        required: "Enter a first name",
        type: String,
    },
    lastName: {
        required: "Enter a first name",
        type: String,
    },
    password: {
        type: String,
    },
});
