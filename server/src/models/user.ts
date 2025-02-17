import mongoose from "mongoose";
import { IUser } from "../shared/types";
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilePicture: { type: String, default: "" },
    role: { type: String, enum: ["user", "admin"], default: "user" },
    credits: { type: Number, default: 0 },
    createdCoupons: [{ type: mongoose.Schema.Types.ObjectId, ref: "Coupon" }],
    purchasedCoupons: [{ type: mongoose.Schema.Types.ObjectId, ref: "Coupon" }],
  },
  { timestamps: true }
);

const User = mongoose.model<IUser>("User", userSchema);

export default User;
