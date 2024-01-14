import { useState } from "react"

export function Eigibility() {
    return (
        <div className="eligibility">
          <h2>Check Your Eligibility</h2>
          <p className="eligibility-paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio voluptatibus labore dignissimos odit architecto recusandae ipsam quisquam est. Voluptatibus excepturi consequuntur harum libero adipisci explicabo omnis dicta velit, tempore quam!</p>
          <EmailInput />
        </div>
    )

}
function EmailInput() {
    const [email,setEmail] = useState('');
    function getEmail(e) {
        setEmail(e.target.value)
    }

    return (
        <div className="email-input">
        <input placeholder="Enter Wallet Address" onChange={getEmail} />
        <button>Check Eligibility</button>
        
        </div>
    )

}