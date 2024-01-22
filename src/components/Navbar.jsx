import { useNavigate } from "react-router-dom";
import logo from "../../public/logo.png";
import { useWeb3Modal } from '@web3modal/ethers5/react'
import { red } from "@mui/material/colors";

export function Navbar() {
    const navigate = useNavigate();
    const { open, close } = useWeb3Modal()

    function logoClick() {
        navigate('/');
    }
    function buttonClick() {
        console.log('jatin')
        open()
    }
    return (
        <>
            <div className="navbar">
                <div className="container">
                    <img src={logo} className="logo" onClick={logoClick} />
                    <button className="navbar-button" onClick={buttonClick}>Connect Wallet</button>
                    {/* <w3m-button variant={'shade'} className="jatin"/> */}

                </div>
            </div>
        </>
    )
}