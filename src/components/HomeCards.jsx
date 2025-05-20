import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import "./homecard.css";

const HomeCards = () => {
  return (
    <>
      <section className="homecards-section">
        <div className="homecards-container">
          <div className="homecards-grid">
            <Card>
              <h2 className="homecards-heading">For Developers</h2>
              <p className="homecards-text">
                Browse our React jobs and start your career today
              </p>
              <Link to="/jobs" className="homecards-btn homecards-btn-black">
                Browse Jobs
              </Link>
            </Card>
            <Card bg="bg-indigo-100">
              <h2 className="homecards-heading homecards-heading-mb">
                For Employers
              </h2>
              <p className="homecards-text-mb">
                List your job to find the perfect developer for the role.
              </p>
              <Link
                to="/add-job"
                className="homecards-btn homecards-btn-indigo"
              >
                Add Job
              </Link>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeCards;
