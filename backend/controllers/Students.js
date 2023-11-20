import { db } from "../db.js";

const getStudents = (req, res) => {
  const q = "SELECT * FROM SchoolData LIMIT 100";

  db.query(q, [], (err, data) => {
    if (err) return res.status(500).send(err);

    return res.status(200).json(data);
  });
};

const getStudent = (req, res) => {
  const q = "SELECT * FROM SchoolData WHERE student_id=?";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).send(err);

    return res.status(200).json(data);
  });
};

const getBestStudent = (req, res) => {};

const getStudentLevel = (req, res) => {
  const q = "SELECT * FROM SchoolData WHERE grade_level=?";
  db.query(q, [req.params.grade], (err, data) => {
    if (err) return res.status(500).send(err);

    return res.status(200).json(data);
  });
};

const getTotalMarks = (req, res) => {
  const q =
    "SELECT first_name, last_name, Maths + English + Kiswahili + Social_studies + Science AS Total_marks FROM SchoolData WHERE grade_level = ? ORDER BY Total_marks DESC";

  db.query(q, [req.params.grade], (err, data) => {
    if (err) return res.status(500).send(err);

    return res.status(200).json(data);
  });
};

export { getStudents, getStudent, getStudentLevel, getTotalMarks };
