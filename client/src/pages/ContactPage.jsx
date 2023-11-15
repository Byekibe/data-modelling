import { Link } from "react-router-dom";

const ContactPage = () => {
  return (
    <div className="container">
      <Link to="/contact">Building...</Link>
      <br />
      <Link to="/" className="btn btn-outline-secondary">
        Home
      </Link>
    </div>
  );
};

export default ContactPage;
