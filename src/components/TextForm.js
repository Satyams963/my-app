import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText)
    }

    const handleLoClick = ()=>{
      let newText = text.toLowerCase();
      setText(newText)
      }

    const handleOnChange = (event)=>{
        setText(event.target.value)
    }

    const [text, setText] = useState(' ');
  return (
    <>
    <div className='container'>
      <h1>{props.heading}</h1>
      <div className="mb-5">
      <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      </div>
      <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to UpperCase</button>
      <button className='btn btn-primary mx-1' onClick={handleLoClick}>Convert to LowerCase</button>
    </div>

    <div className='container my-3'>
        <h1>Your text summary</h1>
        <p> {text.split(" ").length} words, {text.length} charectors</p>
    </div>
    </>
  )
}
