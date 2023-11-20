import { Link } from "react-router-dom";
import Header from "../components/Header";

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
          <li>
            <Link to="/graded/ranked/">Ranked by Grade</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
