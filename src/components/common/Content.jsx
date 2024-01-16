import React from "react";
import jump from "../../../public/jump.png";
import check from "../../../public/check.png";
import down from "../../../public/down.png";
import up from "../../../public/up.png";

export function Content({ type, amount, vote }) {
    function showContent() {
        var extra = document.getElementById("extra-content");
        var btnText = document.getElementById("myBtn");

        console.log(btnText)
        if (["none",""].includes(extra.style.display)) {
            extra.style.display = "block";
            btnText.childNodes[0].textContent = "Show Less ";
            btnText.childNodes[1].innerHTML = `<img src=${up} alt="" />`;
        } else {
            btnText.childNodes[0].textContent = "Show More ";
            extra.style.display = "none"; 
            btnText.childNodes[1].innerHTML = `<img src=${down} alt="" />`;
        }
    }
    

    return (
        <>
            <div className="proposal-detail-header col-7">
                <h2>Proposal for Withdrawal of ${amount} POSI for Donations to Holders</h2>
                {type === 'Executed' ? (
                    <div>
                        <p>
                            <span className="executed text-executed mr-2">Executed</span>
                            <span className="date-time mx-1">{" | "}</span><span className="date-time">{"02-11-2023 09:58:28"}</span>
                            <span className="date-time mx-1">{" | "}</span><span className="date-time">{"Posi Manager: "}<a href="google.com">0xf1...354d<img src={jump} style={{ 'width': '20px' }} className="mx-2" /></a></span>
                        </p>
                        <div>
                            <button className="button-passed">PASSED</button>
                            <button className="button-core">
                                <img src={check} alt="check" />
                                CORE
                            </button>

                            <button className="button-vote">Vote for: ${vote}</button>
                        </div>
                    </div>
                ) : (
                    <div>
                        <p>
                            <span className="executed text-canceled mr-2">Canceled</span>
                            <span className="date-time mx-1">{" | "}</span><span className="date-time">{"02-11-2023 09:58:28"}</span>
                            <span className="date-time mx-1">{" | "}</span><span className="date-time">{"Posi Manager: "}<a href="google.com">0xf1...354d<img src={jump} style={{ 'width': '20px' }} className="mx-2" /></a></span>
                        </p>
                        <div>
                            <button className="button-failed">FAILED</button>
                            <button className="button-vote mx-2">Vote for: ${vote}</button>
                        </div>
                    </div>
                )}
                <div className="content-para my-3">
                    <p className="content-text">Dear Community,<br />
                        Following the previous post <span className="highlighted-text">In-Depth Explanation of Decreased Balance in POSI Token Holders and Upcoming Donations to Ease the Effect - General - Position Exchange Forum</span>, after thorough testing and inspection, we have determined that the number of increased tokens in the Company Funds Contract to be approximately 3,283,861 POSI (3283861598028473886192249 wei). As a result, we will also be creating a proposal to withdraw this POSI and distribute it back to the holders through the donate function.
                        <span id="extra-content">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit cupiditate odio esse itaque, beatae eius, molestiae architecto dicta, enim maiores minima placeat sed? Modi facilis blanditiis vitae, quibusdam ducimus culpa.
                        </span>
                    </p>
                    <button onClick={showContent} id="myBtn">Show More <span className="down-arrowhead mx-1"><img src={down} alt="" /></span></button>

                </div>
            </div>
        </>
    );
}