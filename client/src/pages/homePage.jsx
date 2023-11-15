import Header from "../components/Header";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <Link to="/students">All students</Link>
      </div>
    </div>
  );
};

export default HomePage;
