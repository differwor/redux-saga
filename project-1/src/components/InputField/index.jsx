import React, { useState } from "react";
import "../../Form.css";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

function InputField(props) {

  const {
    id,
    name,
    value,
    onChange,
    type = "text",
    placeHolder,
    messageError = "",
    ...rest
  } = props;

  const [typeInput, setTypeInput] = useState(type);

  const changeType = () => {
    let arg = typeInput === "password" ? "text" : "password"
    setTypeInput(arg);
  };

  return (
    <>
      <input
        name={name}
        value={value}
        onChange={onChange}
        type={typeInput}
        placeholder={placeHolder}
        id={id}
        {...rest}
      />
      { id === "password" ? <span onClick={changeType} className="field-icon">{typeInput === "text" ? <FaEye /> : <FaEyeSlash />}</span> : "" }
      { messageError && <small>{messageError}</small>}
    </>
  );
}

export default React.memo(InputField);
