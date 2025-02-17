import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/db.config";

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("Hey from Swintly Backend");
});

// CONNECT TO DB
connectDB();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
