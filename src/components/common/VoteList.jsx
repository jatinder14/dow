import React, { useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";

export function VoteList() {

    const [option, setOption] = useState([
        { address: "0x0f8...6c7f3b", hash: "0x0f8...6c7f3b", vote: "0x0f8...6c7f3b" },
        { address: "0x0f8...6c7f3b", hash: "0x0f8...6c7f3b", vote: "0x0f8...6c7f3b" },
        { address: "0x0f8...6c7f3b", hash: "0x0f8...6c7f3b", vote: "0x0f8...6c7f3b" },
        { address: "0x0f8...6c7f3b", hash: "0x0f8...6c7f3b", vote: "0x0f8...6c7f3b" },
        { address: "0x0f8...6c7f3b", hash: "0x0f8...6c7f3b", vote: "0x0f8...6c7f3b" },
        { address: "0x0f8...6c7f3b", hash: "0x0f8...6c7f3b", vote: "0x0f8...6c7f3b" },
        { address: "0x0f8...6c7f3b", hash: "0x0f8...6c7f3b", vote: "0x0f8...6c7f3b" },
        { address: "0x0f8...6c7f3b", hash: "0x0f8...6c7f3b", vote: "0x0f8...6c7f3b" },


    ]);
    return (
        <div className="option-container my-4 col-7">
            <div className="option-header">
                List of Votes
                <span className="against" >
                    <button className="vote-for" onClick={() => { setOption([...option, { value: "new option" }]) }}>Vote for</button>
                    <button class="vote-against">Vote Against</button>
                </span>
            </div>
            <hr className="m-0" />
            <div className="option-header-2">
                <div className="">
                    <div className="option-header">
                        Voting Power
                        <span className="vote-amount" >
                            215,906.0130 (99.32%)
                        </span>
                    </div>
                </div>
                <div className="">
                    <div className="progress-bar">
                        <ProgressBar completed={60} customLabel=" " completedClassName="barCompleted" barContainerClassName="progress-container" height="10px" />
                    </div>
                </div>
                <div className="">
                    <div className="option-header">
                        Address
                        <span className="" >
                            Hash
                        </span>
                        <span className="" >
                            Vote
                        </span>
                    </div>
                </div>
            </div>
            <hr className="m-0" />

            <div className="option-body">

                {option.map((curr, index) => {
                    return (<>
                        <Item key={index} address={curr.address} hash={curr.hash} vote={curr.vote} />
                        <hr className="m-0" />
                    </>
                    )
                })}
            </div>
        </div>
    )
}

function Item(props) {
    const [text, SetText] = useState("");

    return (
        <div className="voting-option  m-3">
            <div className="address">
                {props.address}
            </div>
            <div className="has">
                {props.hash}
            </div>
            <div className="vote">
                {props.vote}
            </div>
        </div>

    )
}