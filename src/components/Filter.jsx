import React, { useState } from 'react';
import axios from 'axios';

function Filter() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    location: '',
    status: '',
    company: '',
  });

  const FetchFilterData = async () => {
    setLoading(true);
    try {
      const queryParams = new URLSearchParams(filters).toString();
      const response = await axios.get(`http://jobs_market.test/api/jobs/filter?query${queryParams}`);
      console.log(response.data);
      setData(response.data);
      setError(null);
    } catch (err) {
      setError(err.message || 'Error fetching data');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleApply = () => {
    setShowFilters(false);
    FetchFilterData();
  };

  return (
    <div style={{ padding: '16px' }}>
      <button
        onClick={() => setShowFilters(!showFilters)}
        style={{
          color: 'white',
          padding: '10px 16px',
          borderRadius: '10px',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Filter By
      </button>

      {showFilters && (
        <div
          style={{
            backgroundColor: 'white',
            border: '1px solid #ccc',
            padding: '16px',
            marginTop: '12px',
            borderRadius: '6px',
            width: '320px',
            boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
          }}
        >
          <div style={{ marginBottom: '12px' }}>
            <label style={{ display: 'block', fontSize: '14px', marginBottom: '4px' }}>Location</label>
            <input
              name="location"
              value={filters.location}
              onChange={handleChange}
              placeholder="Enter location"
              style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
          </div>

          <div style={{ marginBottom: '12px' }}>
            <label style={{ display: 'block', fontSize: '14px', marginBottom: '4px' }}>Status</label>
            <select
              name="status"
              value={filters.status}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
            >
              <option value="">Select status</option>
              <option value="open">Open</option>
              <option value="closed">Closed</option>
            </select>
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', fontSize: '14px', marginBottom: '4px' }}>Company</label>
            <input
              name="company"
              value={filters.company}
              onChange={handleChange}
              placeholder="Enter company name"
              style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
          </div>

          <button
            onClick={handleApply}
            style={{
              backgroundColor: 'yellow',
              color: 'white',
              padding: '10px 16px',
              borderRadius: '4px',
              border: 'none',
              width: '100%',
              cursor: 'pointer',
            }}
          >
            Apply Filter
          </button>
        </div>
      )}

      {loading && <p style={{ marginTop: '16px' }}>Loading...</p>}
      {error && <p style={{ marginTop: '16px', color: 'red' }}>{error}</p>}
      {!loading && data.length > 0 && (
        <div style={{ marginTop: '16px' }}>
          <h2 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>Results:</h2>
          <ul style={{ paddingLeft: '20px' }}>
            {data.map((job, index) => (
              <li key={index}>
                {job.title} - {job.company}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Filter;
