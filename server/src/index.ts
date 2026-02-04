import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import blogRoutes from "./routes/blog";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/blogs", blogRoutes);

app.listen(3001, () => {
  console.log("Server running on http://localhost:3001");
});
