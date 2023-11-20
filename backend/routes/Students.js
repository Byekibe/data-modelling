import express from "express";
import {
  getStudentLevel,
  getStudent,
  getStudents,
  getTotalMarks,
} from "../controllers/Students.js";

const router = express.Router();

router.get("/", getStudents);
router.get("/:id", getStudent);
router.get("/level/:grade", getStudentLevel);
router.get("/rank/:grade", getTotalMarks);

export default router;
