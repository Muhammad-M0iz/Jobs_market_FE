import { useLoaderData, useNavigate, Link } from "react-router-dom";
import { FaArrowLeft, FaMapMarker } from "react-icons/fa";
import { toast } from "react-toastify";
import "./JobPage.css";
import axios from 'axios';

const JobPage = ({ deleteJob }) => {
  const navigate = useNavigate();
  const job = useLoaderData();

  const onDeleteClick = (jobId) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this listing?"
    );

    if (!confirm) return;

    deleteJob(jobId);
    toast.success("Job deleted successfully");
    navigate("/jobs");
  };

  return (
    <>
      <section>
        <div className="jobpage-container">
          <Link to="/jobs" className="jobpage-backlink">
            <FaArrowLeft className="jobpage-backicon" /> Back to Job Listings
          </Link>
        </div>
      </section>

      <section className="jobpage-section-bg">
        <div className="jobpage-container-lg">
          <div className="jobpage-grid">
            <main>
              <div className="jobpage-card jobpage-card-main">
                <div className="jobpage-muted jobpage-mb">{job.job_type}</div>
                <h1 className="jobpage-title">{job.title}</h1>
                <div className="jobpage-muted jobpage-mb jobpage-location-row">
                  <FaMapMarker className="jobpage-location-icon" />
                  <p className="jobpage-location-text">{job.location}</p>
                </div>
              </div>

              <div className="jobpage-card jobpage-card-spaced">
                <h3 className="jobpage-section-heading">Job Description</h3>
                <p className="jobpage-mb">{job.description}</p>
                <h3 className="jobpage-section-heading jobpage-section-heading-sm">
                  Salary
                </h3>
                <p className="jobpage-mb">{job.salary} / Year</p>
              </div>
            </main>

            <aside>
              <div className="jobpage-card">
                <h3 className="jobpage-sidebar-heading">Company Info</h3>
                <h2 className="jobpage-company-name">{job.company}</h2>
                <hr className="jobpage-my-lg" />
                <h3 className="jobpage-sidebar-heading">Contact Email:</h3>
                <p className="jobpage-my jobpage-contact-info">
                  {job.contact_email}
                </p>
              </div>

              <div className="jobpage-card jobpage-card-spaced">
                <h3 className="jobpage-sidebar-heading">Manage Job</h3>
                <Link
                  to={`/edit-job/${job.id}`}
                  className="jobpage-btn jobpage-btn-edit"
                >
                  Edit Job
                </Link>
                <button
                  onClick={() => onDeleteClick(job.id)}
                  className="jobpage-btn jobpage-btn-delete"
                >
                  Delete Job
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

export const jobLoader = async ({ params }) => {
  try {
    const response = await axios.get(`/jobs/${params.id}`);
    console.log(response.data);
    return response.data.data;
  } catch (error) {
    console.error("Failed to load job data:", error);
    throw new Error("Failed to load job data.");
  }
};
export { JobPage as default };
