import React from "react";
import { Governance } from "../common/GovernanceLink";
import { Content } from "../common/Content";
import { useLocation, /* other hooks */ } from 'react-router-dom';
import { VoteList } from "../common/VoteList";


export function ViewProposal() {
    const { state } = useLocation();
    const { type, amount, vote } = state || {};
    return (
        <div className='container'>
            <Governance />
            <div className="row">
                <Content type={type} amount={amount} vote={vote} />
            </div>
            <VoteList />

        </div>
    )
}

