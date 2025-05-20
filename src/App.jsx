import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import NotFoundPage from "./pages/NotFoundPage";
import JobPage, { jobLoader } from "./pages/JobPage";
import AddJobPage from "./pages/AddJobPage";
import EditJobPage from "./pages/EditJobPage";
import axios from "axios";

// Base URL config (optional but good practice)
axios.defaults.baseURL = "http://jobs_market.test/api";

const App = () => {
  // Add New Job
  const addJob = async (newJob) => {
    try {
      await axios.post("/jobs", newJob);
    } catch (error) {
      console.error("Failed to add job:", error);
    }
  };

  // Delete Job
  const deleteJob = async (id) => {
    try {
      await axios.delete(`/jobs/${id}`);
    } catch (error) {
      console.error("Failed to delete job:", error);
    }
  };

  // Update Job
  const updateJob = async (job) => {
    try {
      await axios.put(`/jobs/${job.id}`, job);
    } catch (error) {
      console.error("Failed to update job:", error);
    }
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />} />
        <Route
          path="/edit-job/:id"
          element={<EditJobPage updateJobSubmit={updateJob} />}
          loader={jobLoader}
        />
        <Route
          path="/jobs/:id"
          element={<JobPage deleteJob={deleteJob} />}
          loader={jobLoader}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
