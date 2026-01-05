import React, {useState} from 'react'

export default function TextForm({heading, mode, showAlert}) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    showAlert('Converted to Uppercase!', 'success');
    setText(newText);
  }
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    showAlert('Converted to Lowercase!', 'success');
    setText(newText);
  }
  const handleOnChange = (event) => {
    setText(event.target.value);
  }
  const speak = () => {
     let msg = new SpeechSynthesisUtterance();
     msg.text = text;
     window.speechSynthesis.speak(msg);
  }
  const handleClearText = () => {
    showAlert('Text Cleared!', 'success');
    setText('');
  }
  const handleCopy = () => {
     showAlert('Copied to Clipboard!', 'success');
     navigator.clipboard.writeText(text);
  }
  const [text, setText] = useState("");
  return (
    <>
    <div className="container" style={{color: mode === 'dark' ? '#ffffff' : '#000000'}}>
        <h2>{heading}</h2>
        <div className="mb-3">
            <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" rows="8"
             style={{backgroundColor: mode === 'dark' ? '#212529' : '#ffffff', color: mode === 'dark' ? '#ffffff' : '#000000'}}>
             </textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert To Uppercase</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert To Lowercase</button>
        <button disabled={text.length === 0}  className="btn btn-primary mx-1 my-1" onClick={handleClearText}>Clear Text</button>
        <button disabled={text.length === 0}  className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length === 0}  type="submit" onClick={speak} className="btn btn-warning mx-1">Speak</button>
    </div>

    <div className="container my-4" style={{color: mode === 'dark' ? '#ffffff' : '#000000'}}>
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter(text => text.trim()).length} words, {text.length} characters</p>
        <p>{0.008 * text.split(/\s+/).filter(text => text.trim()).length} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : 'Enter something in the textbox above to preview it here'}</p>
    </div>
    </>
  );
}
