
import "./FadeableContainer.scss"

import React from "react"

interface FadeableProps {
    isShowing: boolean;
    children?: React.ReactNode;
}

function Fadeable(props: FadeableProps) {
    return (
        <div className={`FadeableContainer-main ${props.isShowing ? 'FadeableContainer-showing' : 'FadeableContainer-hidden'}`}>
            {props.children}
        </div>
    )
}

export default Fadeable