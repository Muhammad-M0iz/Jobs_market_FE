import { useState, useEffect } from "react";
import Joblisting from "../components/joblisting";
import Spinner from "./Spinner";
import "./Joblistings.css"; // Importing extracted styles

const Joblistings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    location: "",
    status: "",
    company: "",
  });

  const fetchJobs = async () => {
    setLoading(true);
    try {
      const queryParams = new URLSearchParams(filters).toString();
      const apiUrl = queryParams
        ? `http://jobs_market.test/api/jobs/filter?${queryParams}`
        : `http://jobs_market.test/api/jobs`;
      const res = await fetch(apiUrl);
      const data = await res.json();
      setJobs(data?.data || []);
      setError(null);
    } catch (err) {
      setError("Failed to fetch jobs",err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, [isHome, filters]); // Fetch jobs whenever filters change

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleApply = () => {
    setShowFilters(false);
    fetchJobs();
  };

  return (
    <section className="joblistings-section">
      <div className="joblistings-container">
        <h2 className="joblistings-heading">
          {isHome ? "Recent Jobs" : "Browse jobs"}
        </h2>

        {!isHome && (
          <button className="filter-btn" onClick={() => setShowFilters(!showFilters)}>
            Filter By
          </button>
        )}

        {showFilters && (
          <div className="filter-box">
            <div className="filter-group">
              <label>Location</label>
              <input
                name="location"
                value={filters.location}
                onChange={handleChange}
                placeholder="Enter location"
              />
            </div>

            <div className="filter-group">
              <label>Status</label>
              <select name="status" value={filters.status} onChange={handleChange}>
                <option value="">Select status</option>
                <option value="open">Open</option>
                <option value="closed">Closed</option>
              </select>
            </div>

            <div className="filter-group">
              <label>Company</label>
              <input
                name="company"
                value={filters.company}
                onChange={handleChange}
                placeholder="Enter company name"
              />
            </div>

            <button className="apply-btn" onClick={handleApply}>
              Apply Filters
            </button>
          </div>
        )}

        {loading ? (
          <Spinner loading={loading} />
        ) : error ? (
          <p className="error-msg">{error}</p>
        ) : jobs.length === 0 ? (
          <p className="no-jobs">No jobs found.</p>
        ) : (
          <div className="joblistings-grid">
            {jobs.map((job) => (
              <Joblisting job={job} key={job.id} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Joblistings;
