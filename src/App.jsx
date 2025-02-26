import React, { useState } from 'react'
import Navbar from './components/Navbar';
import './App.css'

const App = () => {

  const [text, setText] = useState('');

  function handleChange(e) {
    setText(e.target.value);

  }
  function upperCase() {
    setText(text.toUpperCase());
  }
  function lowerCase() {
    setText(text.toLowerCase());
  }
  function capitalize() {
    setText(
      text
        .split(' ')
        .map(function (e) {
          return e.charAt(0).toUpperCase() + e.substring(1).toLowerCase();
        })
        .join(' ')
    );
  }
  function clearText() {
    setText('');
  }
  function copyText() {
    navigator.clipboard.writeText(text);
    swal("Copied")
  }
  function removeExtraSpaces() {
    setText(text.replace(/\s+/g, ' ').trim());
  }

  return (
    <>
      <Navbar />
      <div className="textApp">
        <h1>Enter the text to analyze below</h1>
        <textarea onChange={handleChange} value={text} placeholder='Enter the text here'></textarea>
        <div>
          <button onClick={upperCase}>UpperCase</button>
          <button onClick={lowerCase}>LowerCase</button>
          <button onClick={capitalize}>Capitalize</button>
          <button onClick={clearText}>Clear Text</button>
          <button onClick={copyText}>Copy Text</button>
          <button onClick={removeExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <h1>Your Text Summary</h1>
        <p><b>{text.trim() === '' ? 0 : text.trim().split(/\s+/).length}</b> words and <b>{text.length}</b> characters.</p>
      </div>
    </>
  )
}

export default App
