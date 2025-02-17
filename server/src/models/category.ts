import mongoose from "mongoose";
import { ICategory } from "../shared/types";

const categorySchema = new mongoose.Schema<ICategory>(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

const Category = mongoose.model<ICategory>("Category", categorySchema);

export default Category;
