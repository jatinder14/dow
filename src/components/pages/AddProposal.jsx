// Signup.js
import { useState } from 'react';
import React from 'react';
import { Governance } from '../common/GovernanceLink';
import { Details } from "../common/Details";
import { Option } from "../common/option"

function AddProposal() {
    return (
        <div className='container'>
            <Governance />
            <div className="inner-container row">
                <Form />
                <div className="empty-container col-1">
                </div>    
                <Details />
            </div>
        </div>
    );
}


export  {AddProposal};



function Form() {
    const [title,setTitle] = useState('');
    const [content,setContent] = useState('');

    return (
        <>
 
       <div className="option-input col-8">
        <input placeholder="Enter Proposal Title" onChange={(e)=>(setTitle(e.target.value))} className='propoasl-title my-4' />
        <textarea placeholder="Enter Proposal Content" className='proposal-title my-4' onChange={(e)=>(setContent(e.target.value))} />
        <Option />        
        
        </div>
        </>

    )

}
