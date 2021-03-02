import mongoose from "mongoose";

const authCode = new mongoose.Schema({
    authCode: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255
    },
    ip: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 155
    }
});

export const Code = mongoose.model('Codes', authCode);


