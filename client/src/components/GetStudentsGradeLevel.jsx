import { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { MdContentCopy } from "react-icons/md";

const GetStudentsGradeLevel = () => {
  const [gradedStudents, setGradedStudents] = useState([]);
  const [level, setLevel] = useState("");
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);

  const serverAddress =
    import.meta.env.VITE_NODE_ENV == "development"
      ? `http://localhost:7070/api/students/level/${level}`
      : `/api/students/level/${level}`;

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(serverAddress);
      const data = await res.json();

      setGradedStudents(data);
    };

    fetchData();
  }, [show]);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Submited");

    setShow((prevState) => !prevState);
  }

  // console.log(gradedStudents);

  return (
    <div className="container">
      <h2 className="text-center">Copy a grade here!</h2>
      <div
        style={{
          border: "2px solid black",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        className="copied"
      >
        <div className="d-flex copied">
          <div>
            Kindergarten
            <CopyToClipboard
              text="Kindergarten"
              className="text-warning"
              onCopy={() =>
                window.alert("Copied to Clipboard in the input box")
              }
            >
              <MdContentCopy />
            </CopyToClipboard>
          </div>
          <div>
            Grade 1
            <CopyToClipboard
              text="1st Grade"
              className="text-warning"
              onCopy={() =>
                window.alert("Copied to Clipboard in the input box")
              }
            >
              <MdContentCopy />
            </CopyToClipboard>
          </div>
          <div>
            Grade 2
            <CopyToClipboard
              text="2nd Grade"
              className="text-warning"
              onCopy={() =>
                window.alert("Copied to Clipboard in the input box")
              }
            >
              <MdContentCopy />
            </CopyToClipboard>
          </div>
          <div>
            3rd Grade
            <CopyToClipboard
              text="3rd Grade"
              className="text-warning"
              onCopy={() =>
                window.alert("Copied to Clipboard in the input box")
              }
            >
              <MdContentCopy />
            </CopyToClipboard>
          </div>
          <div>
            4th Grade
            <CopyToClipboard
              text="4th Grade"
              className="text-warning"
              onCopy={() =>
                window.alert("Copied to Clipboard in the input box")
              }
            >
              <MdContentCopy />
            </CopyToClipboard>
          </div>
          <div>
            5th Grade
            <CopyToClipboard
              text="5th Grade"
              className="text-warning"
              onCopy={() =>
                window.alert("Copied to Clipboard in the input box")
              }
            >
              <MdContentCopy />
            </CopyToClipboard>
          </div>
          6th Grade
          <CopyToClipboard
            text="6th Grade"
            className="text-warning"
            onCopy={() => window.alert("Copied to Clipboard in the input box")}
          >
            <MdContentCopy />
          </CopyToClipboard>
        </div>
        <div className="d-flex copied">
          <div>
            7th Grade
            <CopyToClipboard
              text="7th Grade"
              className="text-warning"
              onCopy={() =>
                window.alert("Copied to Clipboard in the input box")
              }
            >
              <MdContentCopy />
            </CopyToClipboard>
          </div>
          <div>
            8th Grade
            <CopyToClipboard
              text="8th Grade"
              className="text-warning"
              onCopy={() =>
                window.alert("Copied to Clipboard in the input box")
              }
            >
              <MdContentCopy />
            </CopyToClipboard>
          </div>
          <div>
            9th Grade
            <CopyToClipboard
              text="9th Grade"
              className="text-warning"
              onCopy={() =>
                window.alert("Copied to Clipboard in the input box")
              }
            >
              <MdContentCopy />
            </CopyToClipboard>
          </div>
          <div>
            10th Grade
            <CopyToClipboard
              text="10th Grade"
              className="text-warning"
              onCopy={() =>
                window.alert("Copied to Clipboard in the input box")
              }
            >
              <MdContentCopy />
            </CopyToClipboard>
          </div>
          <div>
            11th Grade
            <CopyToClipboard
              text="11th Grade"
              className="text-warning"
              onCopy={() =>
                window.alert("Copied to Clipboard in the input box")
              }
            >
              <MdContentCopy />
            </CopyToClipboard>
          </div>
          <div>
            12th Grade
            <CopyToClipboard
              text="12th Grade"
              className="text-warning"
              onCopy={() =>
                window.alert("Copied to Clipboard in the input box")
              }
            >
              <MdContentCopy />
            </CopyToClipboard>
          </div>
        </div>
      </div>
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <h4 style={{ color: "red" }}>Paste Here</h4>
        <input
          type="text"
          value={level}
          placeholder="Input Box"
          onChange={(e) => setLevel(e.target.value)}
        />
        <button type="submit">Submit</button>
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
