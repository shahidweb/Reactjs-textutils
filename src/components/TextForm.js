import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("Enter text here");

    const changeLowertoUpperCase = ()=>{
        setText(text.toUpperCase());
    }

    return (
        <>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={(event)=> setText(event.target.value)} rows="8"></textarea>
                <button className="btn btn-primary mt-3" onClick={changeLowertoUpperCase}>Convert to UpperCase</button>
            </div>
        </>
    )
}
