import banner from "../../public/banner.png";

export function Banner() {
    return (
        <>
            <div className="banner">
                <img src={banner} className="banner-image" />
                {/* <GovernanceText /> */}
            </div>
        </>
    )
}

function GovernanceText() {
    return (
            <div className="governance">
            <h1>Governance Proposals</h1>
            <p className="eligibility-paragraph">Users now can join to vote for particular proposals created by the project developers or directly create their own proposals for the ecosystem's improvement</p>
            <button className="navbar-button">Learn More</button>
        </div>
    );
}