import "./OptionPicker.scss";

import React from "react";
import IAnswer from "../../types/answer.type";

interface OptionPickerProps {
  options: IAnswer[];
  onOptionChange: Function;
  currentlyPickedOption: IAnswer | null;
  children?: React.ReactNode;
}

function OptionPicker(props: OptionPickerProps) {
  const handleKeyEvent = (
    event: React.KeyboardEvent<HTMLLabelElement>,
    id: string
  ) => {
    if (event.code === "Enter") props.onOptionChange(id);
  };

  return (
    <div className="OptionPicker-questionoptions">
      {props.options.map(({ id, content }) => {
        return (
          <label
            className="OptionPicker-optioncontainer"
            htmlFor={`${id}`}
            key={`${id}`}
            onKeyDown={(e) => handleKeyEvent(e, id)}
          >
            {content}
            <input
              className="OptionPicker-optioninput"
              type="checkbox"
              id={`${id}`}
              name={`${id}`}
              checked={props.currentlyPickedOption?.id === id}
              readOnly={true}
              onClick={() => props.onOptionChange(id)}
            />
            <div
              className={`OptionPicker-optioncheckmark ${
                props.currentlyPickedOption?.id === id ? "" : "unchecked"
              }`}
            />
          </label>
        );
      })}
    </div>
  );
}

export default OptionPicker;
