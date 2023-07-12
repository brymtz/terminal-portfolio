import React, { useState } from "react";

type InputAreaProps = {
  terminalPrompt: string;
  setOutput: React.Dispatch<React.SetStateAction<(string | JSX.Element)[]>>;
  processCommand: (input: string) => void;
  getHistory: (direction: "up" | "down") => string;
  getAutocomplete: (input: string) => string;
  inputRef: React.RefObject<HTMLInputElement>;
};

const InputArea = (props: InputAreaProps) => {
  const [input, setInput] = useState("");
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    if (inputValue.charAt(inputValue.length - 1) === ".") {
      setInput(
        props.getAutocomplete(inputValue.substring(0, inputValue.length - 1))
      );
    } else setInput(inputValue);
  };
  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    switch (event.key) {
      case "Enter":
        props.processCommand(input);
        setInput("");
        break;
        
      case "ArrowUp":
        event.preventDefault();
        setInput(props.getHistory("up"));
        break;

      case "ArrowDown":
        event.preventDefault();
        setInput(props.getHistory("down"));
        break;

      case "Tab":
        event.preventDefault();
        setInput(props.getAutocomplete(input));
        break;
    }
  };
  
  return (
    <div className="terminal-input-area">
      <span className="terminal-prompt">{props.terminalPrompt}</span>
      <input
        type="text"
        className="terminal-input"
        name="input"
        value={input}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
        ref={props.inputRef}
        spellCheck={false}
        autoCapitalize="off"
        autoComplete="off"
      />
    </div>
  );
};

export default InputArea;