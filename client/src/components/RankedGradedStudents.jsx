import { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { MdContentCopy } from "react-icons/md";
import { FaArrowUp, FaArrowDownLong } from "react-icons/fa6";

const RankGradedStudents = () => {
  const [gradedStudents, setGradedStudents] = useState([]);
  const [level, setLevel] = useState("");
  const [loading, setLoading] = useState(true);
  const serverAddress = `/api/students/rank/${level}`;
  // const serverAddress = `http://localhost:7070/api/students/rank/${level}`;
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

  return (
    <div className="container">
      <div className="copied">
        <div className="d-flex copied">
          <div>
            Kindergarten
            <CopyToClipboard
              text="Kindergarten"
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
      <div>
        <h3 style={{ color: "red" }}>
          Copy grade from list above <FaArrowUp />
        </h3>
      </div>
      <form onSubmit={handleSubmit}>
        <h4 style={{ color: "red" }}>
          Paste Here <FaArrowDownLong />
        </h4>
        <input
          type="text"
          value={level}
          placeholder="Input Box"
          onChange={(e) => setLevel(e.target.value)}
        />
        <button onClick={() => setLevel("")}>Delete</button>
        {/* <button>Get students</button> */}
      </form>
      <h3>{level} Grade results</h3>
      <br />
      <br />
      {gradedStudents.length > 0
        ? JSON.stringify(gradedStudents)
        : "[Nothing to show copy and paste to input box above]"}
    </div>
  );
};

export default RankGradedStudents;
