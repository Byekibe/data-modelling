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

export { getStudents, getStudent };
