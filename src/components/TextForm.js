import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked: " +  text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!", "success");
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }

    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value)
    }
    const handleCopy = () => {
        console.log("I am copy");
        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard!", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }

    const [text, setText] = useState('');
    // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state


    const wordcount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
    const charcount = text.replace(/\s/g, "");
    return (
        <>
            <div className="container py-4">
                <div className="card shadow" style={{ backgroundColor: props.mode === 'dark' ? '#23272b' : '#f8f9fa', border: 'none' }}>
                    <div className="card-body">
                        <h1 className="card-title mb-4 display-6" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>{props.heading}</h1>
                        <div className="mb-3">
                            <textarea
                                className="form-control rounded-3 shadow-sm"
                                value={text}
                                onChange={handleOnChange}
                                style={{
                                    backgroundColor: props.mode === 'dark' ? '#343a40' : 'white',
                                    color: props.mode === 'dark' ? 'white' : '#042743',
                                    border: '1px solid #ced4da',
                                    minHeight: '120px',
                                    fontSize: '1.1rem'
                                }}
                                id="myBox"
                                rows="8"
                            ></textarea>
                        </div>
                        <div className="mb-3">
                            <button className="btn btn-primary mx-1 my-1 rounded-pill px-4" onClick={handleUpClick}>Uppercase</button>
                            <button className="btn btn-secondary mx-1 my-1 rounded-pill px-4" onClick={handleLoClick}>Lowercase</button>
                            <button className="btn btn-danger mx-1 my-1 rounded-pill px-4" onClick={handleClearClick}>Clear</button>
                            <button className="btn btn-success mx-1 my-1 rounded-pill px-4" onClick={handleCopy}>Copy</button>
                            <button className="btn btn-warning mx-1 my-1 rounded-pill px-4" onClick={handleExtraSpaces}>Remove Spaces</button>
                        </div>
                    </div>
                </div>
                <div className="container my-4 p-4 rounded shadow-sm" style={{ backgroundColor: props.mode === 'dark' ? '#23272b' : '#f8f9fa', color: props.mode === 'dark' ? 'white' : '#042743' }}>
                    <h2 className="mb-3">Your text summary</h2>
                    <p className="lead">{wordcount} words and {charcount.length} characters</p>
                    <p><em>Estimated read time: {0.008 * wordcount} minutes</em></p>
                    <h3 className="mt-4">Preview</h3>
                    <p style={{ whiteSpace: 'pre-wrap' }}>{text.length > 0 ? text : <span className="text-muted">Enter something in the textbox above to preview it here</span>}</p>
                </div>
            </div>
        </>
    )
}
