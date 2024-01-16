import React, { useState } from "react";

export function Option() {

    const [option,setOption] = useState([
        {value : "Enter Option"},
        {value : "Enter Option"}

    ]);
    return (
        <div className="option-container my-4">
            <div className="option-header">
                Options
                <button className="add-option" onClick={()=>{setOption([...option,{value: "new option"}])}}>+ Add an Option</button>
            </div>
            <hr className="m-0" />
            <div className="option-body">
                {option.map((curr,index)=>{return <Item key={index} data={curr.value}/>})}
            </div>
        </div>
    )
}

function Item(props) {
    const [text,SetText]=useState("");

    return(
        <div className="option-input  m-3">
        <input placeholder={props.data} onChange={(e)=>{SetText(e.target.value)}}className='propoasl-title' />
        </div>
        
    )
}