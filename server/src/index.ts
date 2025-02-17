import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/db.config";
import routes from "./routes/routes";
import cookieParser from "cookie-parser";
dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req: Request, res: Response) => {
  res.send("Hey from Swintly Backend");
});

app.use("/api/v1", routes);

// CONNECT TO DB
connectDB();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
