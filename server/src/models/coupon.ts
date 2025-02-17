import mongoose from "mongoose";
import { ICoupon } from "../shared/types";

const couponSchema = new mongoose.Schema<ICoupon>(
  {
    title: { type: String, required: true },
    code: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    discount: { type: Number, required: true },
    price: { type: Number, required: true },
    expiryDate: { type: Date, required: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    purchasedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const Coupon = mongoose.model<ICoupon>("Coupon", couponSchema);

export default Coupon;
