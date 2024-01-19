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
            <div className="inner-container row" style={{ 'justifyContent': 'space-between' }}>
                <div className="form col-7">
                    <Form />
                </div>
                <div className="empty-container col-4">
                    <Details />
                </div>
            </div>
        </div>
    );
}


export { AddProposal };



function Form() {
    const [title, setTitle] = useState('');
    const [inputLength, setInputLength] = useState(0);
    const [content, setContent] = useState('');
    const [areaLength, setAreaLength] = useState(0);
    const totalAllowedInputLength = 250;
    const totalAllowedAreaLength = 3000;

    return (
        <>
            <div className="option-input ">
                <input placeholder="Enter Proposal Title"
                    onChange={(e) => {
                        setTitle(e.target.value);
                        setInputLength(e.target.value.length);
                    }} className='propoasl-title my-4' />
                {inputLength}/{totalAllowedInputLength}
                <textarea placeholder="Enter Proposal Content" className='proposal-title my-4' 
                 onChange={(e) => {
                    setContent(e.target.value);
                    setAreaLength(e.target.value.length);
                }}/>
                {areaLength}/{totalAllowedAreaLength}
                <Option />
            </div>
        </>

    )

}
