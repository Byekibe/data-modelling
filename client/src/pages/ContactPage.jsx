import { Link } from "react-router-dom";
import Header from "../components/Header";

const ContactPage = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Link to="/contact">Building...</Link>
        <br />
        <Link to="/" className="btn btn-outline-secondary">
          Home
        </Link>
      </div>
    </>
  );
};

export default ContactPage;
