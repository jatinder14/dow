import banner from "../../public/banner.png";

export function Banner() {
    return (
        <>
            <div className="banner">
                <img src={banner} className="banner-image" />
                {/* <button className="navbar-button">Connect Wallet</button> */}
                {/* <h1>Governance Proposals</h1> */}
            </div>
        </>
    )
}