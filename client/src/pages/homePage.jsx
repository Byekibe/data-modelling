import { Link } from "react-router-dom";
import Header from "../components/Header";
import ClipboardCopy from "../components/CopyToClipBoard";

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <ul>
          <li>
            <Link to="/students">All students</Link>
          </li>
          <li>
            <Link to="/graded">Student by grade</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
