import mongoose from "mongoose";
import { ITransaction } from "../shared/types";

const transactionSchema = new mongoose.Schema<ITransaction>(
  {
    coupon: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Coupon",
      required: true,
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    amount: { type: Number, required: true },
    transactionDate: { type: Date, default: Date.now },
    paymentStatus: {
      type: String,
      enum: ["pending", "completed", "failed"],
      default: "pending",
    },
  },
  { timestamps: true }
);

const Transaction = mongoose.model<ITransaction>(
  "Transaction",
  transactionSchema
);

export default Transaction;
