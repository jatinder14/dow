import logo from "../../public/logo.png";

export function Navbar() {
    return (
        <>
            <div className="navbar">
                <div className="container">
                    <img src={logo} className="logo" />
                    <button className="navbar-button">Connect Wallet</button>
                </div>
            </div>
        </>
    )
}