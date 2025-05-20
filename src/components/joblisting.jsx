import React, { useState } from "react";
import { FaMapMarker } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./joblisting.css";

const Joblisting = ({ job }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  let description = job.description;
  if (!showFullDescription) {
    description = description.substring(0, 90) + "...";
  }
  return (
    <>
      <div className="job-card">
        <div className="job-card-content">
          <div className="job-card-header">
            <div className="job-type">{job.type}</div>
            <h3 className="job-title">{job.title}</h3>
          </div>
          <div className="job-description">{description}</div>
          <button
            onClick={() => setShowFullDescription((prevState) => !prevState)}
            className="job-more-btn"
          >
            {showFullDescription ? "Less" : "More"}
          </button>

          <h3 className="job-salary">{job.salary}</h3>
          <div className="job-divider"></div>
          <div className="job-info-row">
            <div className="job-location">
              <FaMapMarker />
              {job.location}
            </div>
            <Link to={`/jobs/${job.id}`} className="job-readmore-btn">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Joblisting;
