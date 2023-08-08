import React, { useState } from 'react'

export default function TextForm(props) {

    const HandleUpperCase = () => {
        if (text) {
            let Upper = text.toUpperCase()
            setText(Upper)
            props.showAlert("Text Upper Cased", "success")
        }
        else {
            props.showAlert("Please Write some text in TextBox to perform Action", "danger")
        }
    }
    const HandleLowerCase = () => {
        if (text) {
            let Lower = text.toLowerCase()
            setText(Lower)
            props.showAlert("Text Lower Cased", "success")
        }
        else {
            props.showAlert("Please Write some text in TextBox to perform Action", "danger")
        }
    }
    const HandleClearText = () => {
        if (text) {
            localStorage.setItem('undotext', text)
            setText('')
            props.showAlert("Text Cleared", "success")
        }
        else {
            props.showAlert("Please Write some text in TextBox to perform Action", "danger")
        }
    }
    const HandleUndoText = () => {
        if (!text) {
            let undoText = localStorage.getItem('undotext')
            setText(undoText)
            props.showAlert("Text has been Undo", "success")
        }
        else {
            props.showAlert("Please clear TextBox to perform Action", "danger")
        }
    }

    const HandleCopyText = () => {
        // let copyText = document.getElementById('mybox')
        // copyText.select()
        // navigator.clipboard.writeText(copyText.value)
        if (text) {
            navigator.clipboard.writeText(text)
            props.showAlert("Copied to clipboard", "success")
        }
        else {
            props.showAlert("Please Write some text in TextBox to perform Action", "danger")
        }
    }

    const HandleExtraSpaces = () => {
        if (text) {
            let newText = text.split(/[ ]+/)
            setText(newText.join(" "))
            props.showAlert("Extra Spaces Removed", "success")
        }
        else {
            props.showAlert("Please Write some text in TextBox to perform Action", "danger")
        }
    }

    const HandleOnChange = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState('')

    return (
        <>
            <div className="container" style={{ color: props.mode === `dark` ? `white` : `black` }}>

                <div className="mb-3">
                    <label htmlFor="mybox" className="form-label">{props.title}</label>
                    <textarea className="form-control" id="mybox" value={text} onChange={HandleOnChange} style={{ backgroundColor: props.mode === `light` ? `white` : `#042730`, color: props.mode === `dark` ? `white` : `black`, placeholderColor: 'red' }} placeholder={props.placeholder} rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={HandleUpperCase} >Convert to UpperCase</button>
                <button className="btn btn-primary mx-1" onClick={HandleLowerCase} >Convert to LowerCase</button>
                <button className="btn btn-primary mx-1" onClick={HandleClearText} >Clear Text</button>
                <button className="btn btn-primary mx-1" onClick={HandleUndoText} >Undo Text</button>
                <button className="btn btn-primary mx-1" onClick={HandleCopyText} >Copy Text</button>
                <button className="btn btn-primary mx-1" onClick={HandleExtraSpaces} >Remove Extra Spaces</button>
            </div>
            <div className="container" style={{ color: props.mode === `dark` ? `white` : `black` }}>
                <h1>Text Summary</h1>
                <p>{text.split(" ").length - 1} words and {text.length} Characters</p>
                <p>{0.008 * text.split(" ").length} minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter Something above in the text box to preview"}</p>
            </div>
        </>
    )
}

