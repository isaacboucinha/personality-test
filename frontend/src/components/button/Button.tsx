
import "./Button.scss"

import React from "react"

interface ButtonProps {
    onClick: React.MouseEventHandler;
    disabled: boolean;
    children?: React.ReactNode;
}

function Button(props: ButtonProps) {
    return (
        <div className="Button-container">
            <button className={`Button-main ${props.disabled ? 'disabled': ''}`}
                    onClick={props.onClick}>
                {props.children}
            </button>
        </div>
    )
}

export default Button