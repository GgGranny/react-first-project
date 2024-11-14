import React from 'react'

function Alert(props) {
    const convertToUpper = (word) => {
        const text = word.toLowerCase();
        return text.charAt(0).toUpperCase() + text.slice(1);
    }
    return (
        <div style={{ height: '50px' }}>

            {props.alert && <div className="alert alert-success" role="alert">
                <strong>{convertToUpper(props.alert.type)}</strong>: {props.alert.message}
            </div>}
        </div>
    )
}

export default Alert;
