import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");
    const [count, setCount] = useState(0);

    const onChangeEvent = (event) => {
        setText(event.target.value)
        countWords(event.target.value);
    }

    const handleEvent = (event, type) => {
        if (type === 'uppercase') {
            setText(text.toUpperCase());
        }
        else if (type === 'lowercase') {
            setText(text.toUpperCase());
        }
        else  {
            setText('');
            countWords('')
        }
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
                <button className="btn btn-primary" onClick={(event)=> handleEvent(event, 'uppercase')}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-3" onClick={(event)=> handleEvent(event, 'lowercase')}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-3" onClick={(event)=> handleEvent(event, 'clear')}>Clear</button>
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
