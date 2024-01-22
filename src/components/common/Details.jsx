import React, { useState } from 'react';

function Details() {
  const [formData, setFormData] = useState({
    startDate: '',
    endDate: '',
    startTime: '',
    endTime: '',
    snapshot: '',
  });

  const [errors, setErrors] = useState({});

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function validateForm() {
    const newErrors = {};

    // Check if each field is not empty
    if (!formData.startDate.trim()) {
      newErrors.startDate = 'Start date is required';
    } else if (!/^\d{2}\/\d{2}\/\d{4}$/.test(formData.startDate)) {
      newErrors.startDate = 'Invalid date format (MM/DD/YYYY)';
    }

    if (!formData.endDate.trim()) {
      newErrors.endDate = 'End date is required';
    } else if (!/^\d{2}\/\d{2}\/\d{4}$/.test(formData.endDate)) {
      newErrors.endDate = 'Invalid date format (MM/DD/YYYY)';
    }

    if (!formData.startTime.trim()) {
      newErrors.startTime = 'Start time is required';
    } else if (!/^\d{2}:\d{2}$/.test(formData.startTime)) {
      newErrors.startTime = 'Invalid time format (HH:MM)';
    }

    if (!formData.endTime.trim()) {
      newErrors.endTime = 'End time is required';
    } else if (!/^\d{2}:\d{2}$/.test(formData.endTime)) {
      newErrors.endTime = 'Invalid time format (HH:MM)';
    }

    if (!formData.snapshot.trim()) {
      newErrors.snapshot = 'Snapshot is required';
    }

    setErrors(newErrors);

    // Return true if there are no errors, otherwise false
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (validateForm()) {
      setFormData({
        startDate: '',
        endDate: '',
        startTime: '',
        endTime: '',
        snapshot: '',
      });
      setErrors({})
        console.log('Form submitted:', formData);
    } else {
      // Form is invalid, do something (e.g., display error messages)
      console.log('Form validation failed');
    }
  }

  return (
    <div className="section ">
      <div className="card add-proposal-details mb-3">
        <div className="pd-2 pt-3 px-3 m-0 card-header">
          <h5 className="mb-0 proposal-detail-text">Details</h5>
        </div>
        <div className="card-body date-time-details-container  mx-1">
          <div className="date-time-details">
            <div className="start col-6">
              <label htmlFor="startDate">Start Date</label>
              <br />
              <input
                placeholder="MM/DD/YYYY"
                className="startdate"
                type="text"
                id="startDate"
                name="startDate"
                value={formData.startDate}
                onChange={handleInputChange}
              />
              {errors.startDate && <span className="error-message">{errors.startDate}</span>}
              <br />
              <label htmlFor="endDate" className="mt-3">
                End Date
              </label>
              <br />
              <input
                placeholder="MM/DD/YYYY"
                className="enddate"
                type="text"
                id="endDate"
                name="endDate"
                value={formData.endDate}
                onChange={handleInputChange}
              />
              {errors.endDate && <span className="error-message">{errors.endDate}</span>}
              <br />
            </div>
            <div className="end col-6 mx-2">
              <label htmlFor="startTime">Start Time</label>
              <br />
              <input
                placeholder="HH:MM"
                className="starttime"
                type="text"
                id="startTime"
                name="startTime"
                value={formData.startTime}
                onChange={handleInputChange}
              />
              {errors.startTime && <span className="error-message">{errors.startTime}</span>}
              <br />
              <label htmlFor="endTime" className="mt-3">
                End Time
              </label>
              <br />
              <input
                placeholder="HH:MM"
                className="endtime"
                type="text"
                id="endTime"
                name="endTime"
                value={formData.endTime}
                onChange={handleInputChange}
              />
              {errors.endTime && <span className="error-message">{errors.endTime}</span>}
              <br />
            </div>
          </div>
          <label htmlFor="snapshot" className="snapshot mt-3">
            Snapshot
          </label>
          <br />
          <input
            type="text"
            id="snapshot"
            name="snapshot"
            className="snapshot-input"
            placeholder=""
            value={formData.snapshot}
            onChange={handleInputChange}
          />
          {errors.snapshot && <span className="error-message">{errors.snapshot}</span>}
          <div className="email-input mt-3">
            <button className="w-100 mx-0" onClick={handleSubmit}>
              Preview
            </button>
          </div>
          <button className="navbar-button w-100 my-2" onClick={handleSubmit}>
            Connect Wallet
          </button>
        </div>
      </div>
    </div>
  );
}

export { Details };
