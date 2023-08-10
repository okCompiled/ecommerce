import mongoose from "mongoose";

const userSchemma = new mongoose.Schema(
  {
    name: {
      type: string,
      required: true,
      trim: true,
    },
    email: {
      type: string,
      required: true,
      trim: true,
    },
    password: {
      type: string,
      required: true,
    },
    phone: {
      type: string,
      required: true,
    },
    address: {
      type: string,
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
