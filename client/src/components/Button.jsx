import React from 'react'

const Button = (props) => {
    
    const handleClick = async () => {
        fetch(`/${props.data}`, {
            method: props.data
        })
        .then(response => response.json())
        .then(newResponse => console.log(newResponse))
    }

    return (
        <div className="flex-1 flex justify-center items-center">
            <button onClick={handleClick} type="submit" className="text-white p-2 bg-black rounded-lg w-20">{props.data.toUpperCase()}</button>
        </div>
    )
}

export default Button
