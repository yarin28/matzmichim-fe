import { Box, BoxProps, Paper, PaperProps, styled } from "@mui/material";
import React, { ComponentType, createRef, useEffect, useState } from "react";
import { isEmptyStatement } from "typescript";

const WrapBox = styled(Box)<BoxProps>(({ theme }) => ({
  display: "inline-block,flex",
  border: `1px solid rgba(0, 0, 0, 0.2)`,
  position: "relative",
  alignItems: "center",
  justifyContent: "center",
  '& .input':
  {
    position: "absolute",
    border: "none",
    fontSize: "32px",
    textAlign: "center",
    backgroundColor: "transparent",
    outline: "none",
  },
}));
const DisplayPaper = styled(Paper)<PaperProps>(({ theme }) => ({
  borderRight: `1px solid rgba(0, 0, 0, 0.2)`,
  width: `32px`,
  height: `58px`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "32px",
  position: "relative",
  margin: 1,

}));
interface OTPInputProps {
  value?: number | string;
  onChange?: any;
  numInputs?: number;
  separator?: JSX.Element;
  isDisabled?: boolean;
  shouldAutoFocus?: boolean;
  hasErrored?: boolean;
  isInputNum?: boolean;
  containerStyle?: string | React.CSSProperties;
  inputStyle?: string | React.CSSProperties;
  focusStyle?: string | React.CSSProperties;
  disabledStyle?: string | React.CSSProperties;
  errorStyle?: string | React.CSSProperties;
}
const OtpInput: ComponentType<OTPInputProps> = (props) => {

  const CODE_LENGTH = new Array(6).fill(0);
  const [value, setValue] = useState("");
  const [values, setValues] = useState(value.split(""));
  const [focused, SetFocused] = useState(false);

  useEffect(() => {
    setValues(value.split(""));
  }, [value]);
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;
    if (value.length < CODE_LENGTH.length && Number(inputValue))
      setValue((value + inputValue).slice(0, CODE_LENGTH.length))
  }
  const handleClick = () => {
    docInput.current?.focus();
  }
  const handleFocus = () => {
    SetFocused(true);
  }
  const handleBlur = () => {
    SetFocused(false);
  }
  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace") {
      setValue(value.slice(0, value.length - 1))
    }
  }
  const docInput = createRef<HTMLInputElement>();
  const selectedIndex = values.length < CODE_LENGTH.length ? values.length : CODE_LENGTH.length - 1;

  return (
    <>
      <h1>opt input</h1>
      <WrapBox onClick={handleClick}>
        {CODE_LENGTH.map((v, index) => {
          const selected = values.length === index;
          const filled =
            values.length === CODE_LENGTH.length && index === CODE_LENGTH.length - 1;

          return <DisplayPaper elevation={selected ? 24 : 0}>{values[index]}</DisplayPaper>;
        })}
        <input
          value=""
          ref={docInput}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          onKeyUp={handleKeyUp}
          className="input"
          style={{
            width: "32px",
            top: "0px",
            bottom: "0px",
            left: `${selectedIndex * 32}px`
            ,
          }}
        />
      </WrapBox>

    </>
  );
}
export default OtpInput