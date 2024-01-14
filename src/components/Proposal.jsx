import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
let arr= [
    { type: 'Executed', amount: '3,283,861' },
    { type: 'Canceled', amount: '2,000,000' },
    { type: 'Canceled', amount: '22,000,000' },
    { type: 'Canceled', amount: '12,000,000' },
    { type: 'Canceled', amount: '245,000,000' },
    { type: 'Canceled', amount: '52,000,000' },
    { type: 'Canceled', amount: '2,000,000' },
    { type: 'Canceled', amount: '2,000,000' },
    { type: 'Canceled', amount: '2,000,000' },
    { type: 'Canceled', amount: '2,000,000' },
    { type: 'Canceled', amount: '2,000,000' },
    { type: 'Canceled', amount: '26,000,000' },
    { type: 'Canceled', amount: '2,000,000' },
    { type: 'Canceled', amount: '2,000,000' },
    { type: 'Canceled', amount: '2,000,000' },
    { type: 'Canceled', amount: '27,000,000' },
    { type: 'Canceled', amount: '2,000,000' },
    { type: 'Canceled', amount: '22452,000,000' },
    { type: 'Canceled', amount: '2,000,000' },
    { type: 'Canceled', amount: '2245,000,000' },
    { type: 'Canceled', amount: '254,000,000' },]


export function Proposal() {
  const proposalsPerPage = 5; // Number of proposals to display per page
  const [currentPage, setCurrentPage] = useState(1);
  const [proposalList, setProposalList] = useState(arr)
  // Assuming this is your list of proposals

  // Calculate the start and end index of the proposals to display on the current page
  const startIndex = (currentPage - 1) * proposalsPerPage;
  const endIndex = startIndex + proposalsPerPage;
  const proposalsToDisplay = proposalList.slice(startIndex, endIndex);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };
  const addProposal = () => {
    setProposalList([...proposalList,{ type: 'new added', amount: 'new addednew added' }])
  }

  return (
    <>
      <div className="proposal container p-0 mt-5">
        <h4>Management Proposal List</h4>
        <button className="navbar-button" onClick={addProposal}>Create Proposal</button>
      </div>
      
      {proposalsToDisplay.map((proposal, index) => (
        <ProposalItem key={index} type={proposal.type} amount={proposal.amount} />
      ))}
      <hr/>

      <Stack direction="row" spacing={2} justifyContent="center" className="mt-3 mb-5 pagination-right">
        <Pagination
          count={Math.ceil(proposalList.length / proposalsPerPage)}
          shape="rounded"
          page={currentPage}
          onChange={handlePageChange}
          color="error"
          variant='outlined'
          className='color'
        />
      </Stack>
    </>
  );
}

function ProposalItem({ type, amount }) {
  return (
    <>
      <hr />
      <div className="proposal-item p-3">
        <div className="proposal">
          <span className="proposal-text">Proposal for Withdrawal of ${amount} for Donations to Holders</span>
          <span className="proposal-detail">{">"}</span>
        </div>

        {type === 'Executed' ? (
          <div>
            <p>
              <span className="executed text-executed">Executed</span>
              <span className="date-time">{" | 02-11-2023 09:58:28"}</span>
            </p>
            <div>
              <button className="button-passed">PASSED</button>
              <button className="button-vote mx-2">Vote for: 99.32%</button>
            </div>
          </div>
        ) : (
          <div>
            <p>
              <span className="executed text-canceled">Canceled</span>
              <span className="date-time">{" | 02-11-2023 09:58:28"}</span>
            </p>
            <div>
              <button className="button-failed">FAILED</button>
              <button className="button-vote mx-2">Vote for: 99.32%</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
