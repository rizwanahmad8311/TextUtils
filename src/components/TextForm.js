import React , {useState} from 'react'

export default function TextForm(props) {
    
    const HandleUpperCase = ()=>{
        let Upper = text.toUpperCase()
        setText(Upper)
    }
    const HandleLowerCase = ()=>{
        let Lower = text.toLowerCase()
        setText(Lower)
    }
    const HandleClearText = ()=>{
        if (text) {
            localStorage.setItem('undotext', text)
        }
        setText('')
    }
    const HandleUndoText = ()=>{
        let undoText = localStorage.getItem('undotext')
        setText(undoText)
    }

    const HandleCopyText = ()=>{
        // let copyText = document.getElementById('mybox')
        // copyText.select()
        // navigator.clipboard.writeText(copyText.value)
        navigator.clipboard.writeText(text)
    }

    const HandleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
    }

    const HandleOnChange = (event)=>{
        setText(event.target.value)
    }

    const [text,setText] = useState('')

    return (
        <>
        <div className="container" style={{color:props.mode===`dark`?`white`:`black`}}>

            <div className="mb-3">
                <label htmlFor="mybox" className="form-label">{props.title}</label>
                <textarea className="form-control" id="mybox" value={text} onChange={HandleOnChange} style={{backgroundColor:props.mode===`light`?`white`:`#042730`,color:props.mode===`dark`?`white`:`black`,placeholderColor:'red'}} placeholder={props.placeholder} rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={HandleUpperCase} >Convert to UpperCase</button>
            <button className="btn btn-primary mx-1" onClick={HandleLowerCase} >Convert to LowerCase</button>
            <button className="btn btn-primary mx-1" onClick={HandleClearText} >Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={HandleUndoText} >Undo Text</button>
            <button className="btn btn-primary mx-1" onClick={HandleCopyText} >Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={HandleExtraSpaces} >Remove Extra Spaces</button>
        </div>
        <div className="container" style={{color:props.mode===`dark`?`white`:`black`}}>
            <h1>Text Summary</h1>
            <p>{text.split(" ").length - 1} words and {text.length} Characters</p>
            <p>{0.008 * text.split(" ").length} minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter Something above in the text box to preview"}</p>
        </div>
        </>
    )
}

