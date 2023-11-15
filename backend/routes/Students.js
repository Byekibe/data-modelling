import express from "express";
import {
  getKindergatenStudent,
  getStudent,
  getStudents,
} from "../controllers/Students.js";

const router = express.Router();

router.get("/", getStudents);
router.get("/:id", getStudent);
router.get("/level/:grade", getKindergatenStudent);

export default router;
