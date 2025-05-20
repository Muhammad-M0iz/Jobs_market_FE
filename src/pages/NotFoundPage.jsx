import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";
import "./NotFoundPage.css";

const NotFoundPage = () => {
  return (
    <section className="notfound-section">
      <FaExclamationTriangle className="notfound-icon" />
      <h1 className="notfound-title">404 Not Found</h1>
      <p className="notfound-subtitle">This page does not exist</p>
      <Link to="/" className="notfound-btn">
        Go Back
      </Link>
    </section>
  );
};

export default NotFoundPage;
