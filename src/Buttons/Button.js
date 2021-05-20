import React from 'react'


const Button = (prop) => {
    return (
        <div>
            <button onClick={prop.onClick}> {prop.value} </button>
        </div>
    )
}

export default Button
