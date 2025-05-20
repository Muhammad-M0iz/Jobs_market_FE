import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./AddJobPage.css";

const AddJobPage = ({ addJobSubmit }) => {
  const [title, setTitle] = useState("");
  const [jobType, setJobType] = useState("full-time");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [salary, setSalary] = useState("");
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState("open");
  const [postedAt, setPostedAt] = useState("");
  const [closingAt, setClosingAt] = useState("");
  const [contactEmail, setContactEmail] = useState("");

  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();

    const newJob = {
      title,
      job_type: jobType,
      location,
      description,
      salary: parseFloat(salary),
      company,
      status,
      posted_at: postedAt,
      closing_at: closingAt,
      contact_email: contactEmail,
    };

    addJobSubmit(newJob);
    toast.success("Job Added Successfully");
    navigate("/jobs");
  };

  return (
    <section className="addjob-section">
      <div className="addjob-container">
        <div className="addjob-card">
          <form onSubmit={submitForm}>
            <h2 className="addjob-heading">Add Job</h2>

            {/* Job Title */}
            <div className="addjob-form-group">
              <label className="addjob-label">Job Title</label>
              <input
                type="text"
                className="addjob-input"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            {/* Company */}
            <div className="addjob-form-group">
              <label className="addjob-label">Company</label>
              <input
                type="text"
                className="addjob-input"
                required
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>

            {/* Location */}
            <div className="addjob-form-group">
              <label className="addjob-label">Location</label>
              <input
                type="text"
                className="addjob-input"
                required
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            {/* Description */}
            <div className="addjob-form-group">
              <label className="addjob-label">Description</label>
              <textarea
                className="addjob-input"
                rows="4"
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            {/* Job Type */}
            <div className="addjob-form-group">
              <label className="addjob-label">Job Type</label>
              <select
                className="addjob-input"
                required
                value={jobType}
                onChange={(e) => setJobType(e.target.value)}
              >
                <option value="full-time">Full-Time</option>
                <option value="part-time">Part-Time</option>
                <option value="remote">Remote</option>
                <option value="internship">Internship</option>
              </select>
            </div>

            {/* Salary */}
            <div className="addjob-form-group">
              <label className="addjob-label">Salary</label>
              <input
                type="number"
                className="addjob-input"
                required
                placeholder="Enter numeric salary"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
              />
            </div>

            {/* Posted At */}
            <div className="addjob-form-group">
              <label className="addjob-label">Posted At</label>
              <input
                type="date"
                className="addjob-input"
                required
                value={postedAt}
                onChange={(e) => setPostedAt(e.target.value)}
              />
            </div>

            {/* Closing At */}
            <div className="addjob-form-group">
              <label className="addjob-label">Closing At</label>
              <input
                type="date"
                className="addjob-input"
                required
                value={closingAt}
                onChange={(e) => setClosingAt(e.target.value)}
              />
            </div>

            {/* Status */}
            <div className="addjob-form-group">
              <label className="addjob-label">Status</label>
              <select
                className="addjob-input"
                required
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="open">Open</option>
                <option value="closed">Closed</option>
              </select>
            </div>

            {/* Contact Email */}
            <div className="addjob-form-group">
              <label className="addjob-label">Contact Email</label>
              <input
                type="email"
                className="addjob-input"
                required
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
              />
            </div>

            <div>
              <button
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Add Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddJobPage;
