import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';
let arr = [
  { type: 'Executed', amount: '3,283,861', 'vote': '99.32%' },
  { type: 'Canceled', amount: '2,000,000', 'vote': '44.5%' },
  { type: 'Canceled', amount: '22,000,000', 'vote': '44.5%' },
  { type: 'Canceled', amount: '12,000,000', 'vote': '44.5%' },
  { type: 'Canceled', amount: '245,000,000', 'vote': '44.5%' },
  { type: 'Executed', amount: '3,283,861', 'vote': '99.32%' },
  { type: 'Canceled', amount: '2,000,000', 'vote': '44.5%' },
  { type: 'Canceled', amount: '22,000,000', 'vote': '44.5%' },
  { type: 'Canceled', amount: '12,000,000', 'vote': '44.5%' },
  { type: 'Executed', amount: '3,283,861', 'vote': '44.5%' },
  { type: 'Canceled', amount: '2,000,000', 'vote': '44.5%' },
  { type: 'Canceled', amount: '22,000,000', 'vote': '99.32%' },
  { type: 'Canceled', amount: '12,000,000', 'vote': '99.32%' },

]


export function Proposal() {
  const proposalsPerPage = 10; // Number of proposals to display per page
  const [currentPage, setCurrentPage] = useState(1);
  const [proposalList, setProposalList] = useState(arr)
  const [clickedPage, setClickedPage] = useState(1);
  // Assuming this is your list of proposals

  // Calculate the start and end index of the proposals to display on the current page
  const startIndex = (currentPage - 1) * proposalsPerPage;
  const endIndex = startIndex + proposalsPerPage;
  const proposalsToDisplay = proposalList.slice(startIndex, endIndex);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    setClickedPage(value);
  };
  const navigate = useNavigate();
  const addProposal = () => {
    // setProposalList([...proposalList, { type: 'new added', amount: 'new addednew added' }])
    navigate('/addProposal');
  }

  return (
    <>
      <div className="proposal container p-0 mt-5">
        <h4>Management Proposal List</h4>
        <button className="navbar-button" onClick={addProposal}>Create Proposal</button>
      </div>

      {proposalsToDisplay.map((proposal, index) => (
        <ProposalItem key={index} type={proposal.type} amount={proposal.amount} vote={proposal.vote} />
      ))}
      <hr />

      <Stack direction="row" spacing={2} justifyContent="center" className="mt-3 mb-5 pagination-right">
        <Pagination
          count={Math.ceil(proposalList.length / proposalsPerPage)}
          shape="rounded"
          page={currentPage}
          onChange={handlePageChange}
          color="error"
          variant='outlined'
          renderItem={(item) => (
            <PaginationItem
              slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
              {...item}
              className={`pagination-item ${clickedPage === item.page ? 'clicked' : ''}`}
            />
          )}
        />
      </Stack>
    </>
  );
}

function ProposalItem({ type, amount, vote }) {
  const navigate = useNavigate();

  function openProposal() {
    navigate('/viewproposal', { state: { type, amount, vote } });
  }
  return (
    <>
      <hr />
      <div className="proposal-item p-3" onClick={openProposal}>
        <div className="proposal">
          <span className="proposal-text">Proposal for Withdrawal of ${amount} for Donations to Holders</span>
          <button className="proposal-detail" onClick={openProposal}>{">"}</button>
        </div>

        {type === 'Executed' ? (
          <div>
            <p>
              <span className="executed text-executed">Executed</span>
              <span className="date-time">{" | 02-11-2023 09:58:28"}</span>
            </p>
            <div>
              <button className="button-passed">PASSED</button>
              <button className="button-vote mx-2">Vote for: ${vote}</button>
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
              <button className="button-vote mx-2">Vote for: ${vote}</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
