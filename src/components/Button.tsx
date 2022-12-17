import React, { MouseEventHandler } from 'react'

interface IButton {
    text: string,
    color: string,
    onClick: MouseEventHandler<HTMLButtonElement>
}

const Button: React.FC<IButton> = ({ text, color, onClick }) => {
    return (
        <button onClick={onClick} style={{ backgroundColor: color }}>
            {text}
        </button>
    )
}

export default Button
