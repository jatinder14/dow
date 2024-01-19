import React, { useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import down from "../../../public/down.png";
import up from "../../../public/up.png";

export function VoteList() {

    function showContent() {
        var extra = document.getElementById("more-content");
        var btnText = document.getElementById("voteBtn");

        console.log(btnText, extra)
        if (["none", ""].includes(extra.style.display)) {
            extra.style.display = "block";
            btnText.childNodes[0].textContent = "View Less ";
            btnText.childNodes[1].innerHTML = `<img src=${up} alt="" />`;
        } else {
            btnText.childNodes[0].textContent = "View More ";
            extra.style.display = "none";
            btnText.childNodes[1].innerHTML = `<img src=${down} alt="" />`;
        }
    }

    const [option, setOption] = useState([
        { address: "0x0f8...6c7f3b", hash: "0x0f8...6c7f3b", vote: "80,299.1130" },
        { address: "0x0f8...6c7f3b", hash: "0x0f8...6c7f3b", vote: "80,299.1130" },
        { address: "0x0f8...6c7f3b", hash: "0x0f8...6c7f3b", vote: "80,299.1130" },
        { address: "0x0f8...6c7f3b", hash: "0x0f8...6c7f3b", vote: "80,299.1130" },
        { address: "0x0f8...6c7f3b", hash: "0x0f8...6c7f3b", vote: "80,299.1130" },
        { address: "0x0f8...6c7f3b", hash: "0x0f8...6c7f3b", vote: "80,299.1130" },
        { address: "0x0f8...6c7f3b", hash: "0x0f8...6c7f3b", vote: "80,299.1130" },
    ]);
    return (
        <div className="option-container my-4 col-7">
            <div className="option-header">
                List of Votes
                <span className="against" >
                    <button className="vote-for" onClick={() => { setOption([...option, { value: "new option" }]) }}>Vote for</button>
                    <button className="vote-against">Vote Against</button>
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
                <span id="more-content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A beatae porro pariatur fuga eos id doloremque ut. Dignissimos, magnam numquam corrupti, recusandae quam corporis debitis iusto sequi magni, vero provident!
                </span>
                <hr className="m-0" />
            </div>
            <div className="option-header footer">
                <button className="vote-against" id="voteBtn" onClick={showContent}>View More <span className="down-arrowhead mx-1"><img src={down} alt="" /></span></button>
            </div>
        </div>
    )
}

function Item(props) {
    const [text, SetText] = useState("");

    return (
        <div className="voting-option  m-3">
            <div className="address">
                <a href="">{props.address}</a>
            </div>
            <div className="has">
                <a href="">{props.hash}</a>
            </div>
            <div className="vote">
                {props.vote}
            </div>
        </div>

    )
}