import logo from "../../public/logo.png";

export function Navbar() {
    return (
        <>
            <div className="navbar">
                <div className="logo">
                    <img src={logo} />
                </div>
                <div className="navbar-button">
                    <button>Connect Wallet</button>
                </div>
            </div>
        </>
    )
}