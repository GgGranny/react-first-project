import React, { useState } from 'react';
import PropTypes from 'prop-types';


export default function TextForm(props) {
    const [text, setText] = useState('');
    const [email, setEmail] = useState('Your Email');

    const handelToUppercase = () => {
        const newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to Uppercase', 'success');
    }
    const handelOnChange = (event) => {
        setText(event.target.value);
    }
    function handelOnFocus() {
        setText('');
    }
    const handelToLowercase = () => {
        const newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to Lowercase', 'success');
    }
    const handelEmail = () => {
        const words = text.split(' ');
        const validEmail = [];
        words.forEach((word) => {
            if (word.match(/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g)) {
                validEmail.push(word);
            }
        })
        setEmail(validEmail);
        props.showAlert('Email extracted', 'success');
    }

    const handelDownload = () => {
        // let textFileAsBlob = new Blob([text], { type: '.doc' });
        // let downloadLink = document.createElement('a');
        // downloadLink.download = 'sample.txt';
        // console.log(window);
        // if (window.webkitURL != null) {
        //     downloadLink.href = window.webkitURL.createObjectURL(
        //         textFileAsBlob
        //     );
        // } else {
        //     downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
        //     downloadLink.style.display = 'none';
        //     document.body.appendChild(downloadLink);
        // }

        // downloadLink.click();

        const downloadLink = document.createElement('a');
        const file = new Blob([text], { type: 'text/plain' });
        downloadLink.href = URL.createObjectURL(file);
        console.log(downloadLink.href);
        downloadLink.download = 'smaple.txt';
        document.body.appendChild(downloadLink);
        downloadLink.style.display = 'none';
        downloadLink.click();
        URL.revokeObjectURL(downloadLink.href);

    }
    const handelExtraspacing = () => {
        let newText = text.split('  ').join('');
        console.log(newText);
        setText(newText);
    }
    const handelCopy = () => {
        const inputField = document.getElementById('textArea');
        inputField.select();
        inputField.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(inputField.value);
        props.showAlert(inputField.value + 'coppied', 'success');
    }
    return (
        <>
            <div className='container'>
                <div>
                    <h1>{props.heading}</h1>
                    <div className="form-floating">
                        <textarea className="form-control" value={text} onChange={handelOnChange} onFocus={handelOnFocus} style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'light' ? 'black' : 'white' }} id="textArea"></textarea>
                    </div>
                    <button disabled={text.length === 0} className="btn btn-primary mt-3" onClick={handelToUppercase}>To Uppercase</button>
                    <button disabled={text.length === 0} className="btn btn-primary mt-3 mx-3" onClick={handelToLowercase}>To Uppercase</button>
                    <button disabled={text.length === 0} className="btn btn-primary mt-3 mx-3" onClick={handelEmail}>Get Email</button>
                    <button disabled={text.length === 0} className="btn btn-primary mt-3 mx-3" onClick={handelDownload}>Download</button>
                    <button disabled={text.length === 0} className="btn btn-primary mt-3 mx-3" onClick={handelExtraspacing}>Remove Extra Spacing</button>
                    <button disabled={text.length === 0} className="btn btn-primary mt-3 mx-3" onClick={handelCopy}>Copy text</button>
                </div>
                <div className="my-3">
                    <h1>your text</h1>
                    <p>{text.split(' ').filter((element) => { return element.length !== 0 }).length} word {text.length} characters</p>
                    <h3>preview</h3>
                    <p>{text.length === 0 ? 'The preview will be here' : text}</p>
                    <h4>Email</h4>
                    <p>{email}</p>
                </div>
            </div>
        </>
    )
}
TextForm.propType = {
    heading: PropTypes.string
}
