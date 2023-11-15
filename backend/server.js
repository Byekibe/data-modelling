import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import studentsRoutes from "./routes/Students.js";

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use("/api/students", studentsRoutes);

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
