import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
        minLength: [3, "First Name at least contain 3 characters!"]
    },
    lastName:{
        type: String,
        required: true,
        minLength: [3, "Last Name at least contain 3 characters!"]
    },
    email:{
        type: String,
        required: true,
        validate: [validator.isEmail, "Please provide a valid email"]
    },
    phone: {
        type: String,
        required: true,
        minLength: [11, "phone number must contain exact eleven number"],
        maxLength: [11, "phone number must contain exact eleven number"],
    },
    message: {
        type: String,
        required: true,
        minLength: [10, "message  must contain atleast ten characters"],
        
    }, 
});

export const Message = mongoose.model("Message",messageSchema);