import { useState } from "react";
import { useParams, useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./EditJobPage.css";

const EditJobPage = ({ updateJobSubmit }) => {
  const job = useLoaderData();

  const [title, setTitle] = useState(job.title);
  const [company, setCompany] = useState(job.company);
  const [location, setLocation] = useState(job.location);
  const [description, setDescription] = useState(job.description);
  const [status, setStatus] = useState(job.status);
  const [postedAt, setPostedAt] = useState(job.posted_at);
  const [closingAt, setClosingAt] = useState(job.closing_at);
  const [jobType, setJobType] = useState(job.job_type);
  const [salary, setSalary] = useState(job.salary);
  const [contactEmail, setContactEmail] = useState(job.contact_email);

  const navigate = useNavigate();
  const { id } = useParams();

  const submitForm = (e) => {
    e.preventDefault();

    const updatedJob = {
      id,
      title,
      company,
      location,
      description,
      status,
      posted_at: postedAt,
      closing_at: closingAt,
      job_type: jobType,
      salary,
      contact_email: contactEmail,
    };

    updateJobSubmit(updatedJob);

    toast.success("Job Updated Successfully");
    navigate(`/jobs/${id}`);
  };

  return (
    <section className="editjob-section">
      <div className="editjob-container">
        <div className="editjob-card">
          <form onSubmit={submitForm}>
            <h2 className="editjob-heading">Update Job</h2>

            {/* Title */}
            <div className="editjob-form-group">
              <label htmlFor="title" className="editjob-label">Job Title</label>
              <input
                type="text"
                id="title"
                name="title"
                className="editjob-input"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            {/* Company */}
            <div className="editjob-form-group">
              <label htmlFor="company" className="editjob-label">Company Name</label>
              <input
                type="text"
                id="company"
                name="company"
                className="editjob-input"
                required
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>

            {/* Location */}
            <div className="editjob-form-group">
              <label htmlFor="location" className="editjob-label">Location</label>
              <input
                type="text"
                id="location"
                name="location"
                className="editjob-input"
                required
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            {/* Description */}
            <div className="editjob-form-group">
              <label htmlFor="description" className="editjob-label">Description</label>
              <textarea
                id="description"
                name="description"
                className="editjob-input"
                rows="4"
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            {/* Status */}
            <div className="editjob-form-group">
              <label htmlFor="status" className="editjob-label">Status</label>
              <select
                id="status"
                name="status"
                className="editjob-input"
                required
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="open">Open</option>
                <option value="closed">Closed</option>
              </select>
            </div>

            {/* Posted At */}
            <div className="editjob-form-group">
              <label htmlFor="posted_at" className="editjob-label">Posted At</label>
              <input
                type="date"
                id="posted_at"
                name="posted_at"
                className="editjob-input"
                required
                value={postedAt}
                onChange={(e) => setPostedAt(e.target.value)}
              />
            </div>

            {/* Closing At */}
            <div className="editjob-form-group">
              <label htmlFor="closing_at" className="editjob-label">Closing At</label>
              <input
                type="date"
                id="closing_at"
                name="closing_at"
                className="editjob-input"
                required
                value={closingAt}
                onChange={(e) => setClosingAt(e.target.value)}
              />
            </div>

            {/* Job Type */}
            <div className="editjob-form-group">
              <label htmlFor="job_type" className="editjob-label">Job Type</label>
              <select
                id="job_type"
                name="job_type"
                className="editjob-input"
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
            <div className="editjob-form-group">
              <label htmlFor="salary" className="editjob-label">Salary</label>
              <input
                type="number"
                id="salary"
                name="salary"
                className="editjob-input"
                required
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
              />
            </div>

            {/* Contact Email */}
            <div className="editjob-form-group">
              <label htmlFor="contact_email" className="editjob-label">Contact Email</label>
              <input
                type="email"
                id="contact_email"
                name="contact_email"
                className="editjob-input"
                required
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
              />
            </div>

            {/* Submit */}
            <div>
              <button
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full"
                type="submit"
              >
                Update Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EditJobPage;
