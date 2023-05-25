import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      requrired: true,
      trim: true,
    },
    email: {
      type: String,
      requrired: true,
      unique: true,
    },
    password: {
      type: String,
      requrired: true,
    },
    phone: {
      type: String,
      requrired: true,
    },
    address: {
      type: String,
      requrired: true,
    },
    answer: {
      type: String,
      required: true,
    },
    role: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export default mongoose.model("users", userSchema);
