import mongoose from "mongoose";
import { INotification } from "../shared/types";

const notificationSchema = new mongoose.Schema<INotification>(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    message: { type: String, required: true },
    isRead: { type: Boolean, default: false },
    type: {
      type: String,
      enum: ["coupon", "transaction", "reminder"],
    },
  },
  { timestamps: true }
);

const Notification = mongoose.model<INotification>(
  "Notification",
  notificationSchema
);

export default Notification;
