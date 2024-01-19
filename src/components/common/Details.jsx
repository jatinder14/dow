import React from 'react';

function Details() {
  return (
    <div className="section ">
      <div className="card add-proposal-details mb-3">
        <div className="pd-2 pt-3 px-3 m-0 card-header">
          <h5 className="mb-0 proposal-detail-text">Details</h5>
        </div>
        <div className="card-body date-time-details-container  mx-1">
          <div className="date-time-details">
            <div className="start col-6">
              <label htmlFor="">Start Date</label>
              <br />
              {/* <input placeholder="MM/DD/YYYY" className="startdate" type='date' id="date" /> */}
              <input placeholder="MM/DD/YYYY" className="startdate" type='text' id="date" />
              <br />
              <label htmlFor="" className='mt-3'>End Date</label>
              <br />
              <input placeholder="MM/DD/YYYY" className="enddate" type="text" id="date" />
              <br />
            </div>
            <div className="end col-6 mx-2">
              <label htmlFor="">Start Time</label>
              <br />
              <input placeholder="MM/DD/YYYY" className="starttime" type="text" id="date" />
              <br />
              <label htmlFor="" className='mt-3'>End Time</label>
              <br />
              <input placeholder="MM/DD/YYYY" className="endtime" type="text" id="date" />
              <br />
            </div>
          </div>
          <label htmlFor="" className="snapshot mt-3">Snapshot</label>
          <br />
          <input type="text" className="snapshot-input" placeholder='' />
          <div className="email-input mt-3">
            <button className='w-100 mx-0'>Preview</button>
          </div>
          <button className="navbar-button w-100 my-2">Connect Wallet</button>
        </div>
      </div>
    </div>
  );
}

export { Details };
