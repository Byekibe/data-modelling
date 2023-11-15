import { useEffect, useState } from "react";
import ClipboardCopy from "./CopyToClipBoard";

const GetStudentsGradeLevel = () => {
  const [gradedStudents, setGradedStudents] = useState([]);
  const [level, setLevel] = useState("");
  const [loading, setLoading] = useState(true);
  const serverAddress = `/api/students/level/${level}`;
  // const serverAddress = `http://localhost:7070/api/students/level/${level}`;
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(serverAddress);
      const data = await res.json();

      setGradedStudents(data);
    };

    fetchData();
  }, [level]);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Submited");
  }

  // console.log(gradedStudents);

  return (
    <div className="container">
      <div className="copied">
        <div className="d-flex copied">
          <ClipboardCopy copyText="Kindergarten" />
          <ClipboardCopy copyText="1st Grade" />
          <ClipboardCopy copyText="2nd Grade" />
          <ClipboardCopy copyText="3rd Grade" />
          <ClipboardCopy copyText="4th Grade" />
          <ClipboardCopy copyText="5th Grade" />
          <ClipboardCopy copyText="6th Grade" />
        </div>
        <div className="d-flex copied">
          <ClipboardCopy copyText="7th Grade" />
          <ClipboardCopy copyText="8th Grade" />
          <ClipboardCopy copyText="9th Grade" />
          <ClipboardCopy copyText="10th Grade" />
          <ClipboardCopy copyText="11th Grade" />
          <ClipboardCopy copyText="12th Grade" />
        </div>
      </div>
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <h4 style={{ color: "red" }}>Paste Here</h4>
        <input
          type="text"
          value={level}
          placeholder="Example of grades available above copy and paste"
          onChange={(e) => setLevel(e.target.value)}
        />
        <button onClick={() => setLevel("")}>Delete</button>
        {/* <button>Get students</button> */}
        <br />
        <br />
        {gradedStudents.length > 0
          ? JSON.stringify(gradedStudents)
          : "[Nothing to show copy and paste to input box above]"}
      </form>
    </div>
  );
};

export default GetStudentsGradeLevel;
