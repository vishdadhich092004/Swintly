import mongoose from "mongoose";
import { IPayment } from "../shared/types";

const paymentSchema = new mongoose.Schema<IPayment>(
  {
    transaction: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Transaction",
      required: true,
    },
    paymentMethod: {
      type: String,
      enum: ["credits", "stripe", "paypal"],
      required: true,
    },
    amount: { type: Number, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    paymentDate: { type: Date, default: Date.now },
    paymentStatus: {
      type: String,
      enum: ["pending", "completed", "failed"],
      default: "pending",
    },
  },
  { timestamps: true }
);

const Payment = mongoose.model<IPayment>("Payment", paymentSchema);

export default Payment;
