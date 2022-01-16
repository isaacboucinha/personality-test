
import "./OptionPicker.scss"

import React from "react"

interface Options {
    id: number;
    text: string;
}

interface OptionPickerProps {
    options: Options[];
    onOptionChange: Function;
    currentlyPickedOption: number;
    children?: React.ReactNode;
}

function OptionPicker(props: OptionPickerProps) {
    const handleKeyEvent = (event: React.KeyboardEvent<HTMLLabelElement>, id: number) => {
        if(event.code === 'Enter')
            props.onOptionChange(id)
    }

    return (
        <div className="OptionPicker-questionoptions">
            {
                props.options.map(({id, text}) => {
                    return (
                        <label className="OptionPicker-optioncontainer"
                                htmlFor={`${id}`} 
                                key={`${id}`} 
                                onKeyDown={(e) => handleKeyEvent(e, id)}>
                            {text}
                            <input className="OptionPicker-optioninput" 
                                    type="checkbox" 
                                    id={`${id}`} 
                                    name={`${id}`} 
                                    checked={props.currentlyPickedOption === id}
                                    readOnly={true}
                                    onClick={() => props.onOptionChange(id)}
                                    />
                            <div className={`OptionPicker-optioncheckmark ${props.currentlyPickedOption === id ? '': 'unchecked'}`} />
                        </label>
                    )
                })        
            }
        </div>
    )
}

export default OptionPicker