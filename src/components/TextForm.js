import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");
    const [count, setCount] = useState(0);

    const changeUpCase = () => {
        setText(text.toUpperCase());
    }
    const changeLoCase = () => {
        setText(text.toLowerCase());
    }

    const onChangeEvent = (event) => {
        setText(event.target.value)
        countWords(event.target.value);
    }

    const countWords = (str) => {
        const arr = str.split(' ');
        const length = arr.filter(word => word !== '').length;
        setCount(length);
    }

    return (
        <>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control mb-2" value={text} onChange={onChangeEvent} rows="8"></textarea>
                <button className="btn btn-primary" onClick={changeUpCase}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-3" onClick={changeLoCase}>Convert to LowerCase</button>
            </div>
            <div className="my-3">
                <h3>Your text summary</h3>
                <p>{count} words and {text.length} characters</p>
                <p>{(0.008 * count).toFixed(2)} Minutes read </p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>
    )
}
