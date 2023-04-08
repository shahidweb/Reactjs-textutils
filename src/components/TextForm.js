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
            props.showAlert("success", "Converted to uppercase!")
        }
        else if (type === 'lowercase') {
            setText(text.toUpperCase());
            props.showAlert("success", "Converted to lowercase!")
        }
        else if (type === 'copy') {
            document.getElementById('textBox').select();
            navigator.clipboard.writeText(text);
            setTimeout(() => {
                document.getSelection().removeAllRanges();
            }, 300);
            props.showAlert("success", "Copy to clipboard!")
        }
        else if (type === 'space') {
            let newText = text.split(/[ ]+/);
            setText(newText.join(" "));
            props.showAlert("success", "Extra spaces removed!")
        }
        else {
            setText('');
            countWords('')
            props.showAlert("danger", "Clear all text!")
        }
    }

    const countWords = (str) => {
        const arr = str.split(' ');
        const length = arr.filter(word => word !== '').length;
        setCount(length);
    }

    return (
        <div className={`text-${props.mode === 'light' ? 'black' : 'white'}`}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control mb-2" id="textBox" value={text} onChange={onChangeEvent} rows="8"></textarea>
                <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={(event) => handleEvent(event, 'uppercase')}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={(event) => handleEvent(event, 'lowercase')}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={(event) => handleEvent(event, 'copy')}>Copy Text</button>
                <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={(event) => handleEvent(event, 'copy')}>Remove Extra Space</button>
                <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={(event) => handleEvent(event, 'clear')}>Clear</button>
            </div>
            <div className="my-3">
                <h3>Your text summary</h3>
                <p>{count} words and {text.length} characters</p>
                <p>{(0.008 * count).toFixed(2)} Minutes read </p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </div>
    )
}
