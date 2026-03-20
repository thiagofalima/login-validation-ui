import styled from "styled-components";
import IInput from "../types/IInput";
import { Controller } from "react-hook-form";

export const StyledInput = styled.input`
  width: 80%;
  padding: 10px 16px;
  background-color: #ffffff;
  color: #000000;
  border-radius: 2em;
  border: 2px solid #952294;
`;

const ErrorMessage = styled.p`
  margin: 0 20px;
  font-size: 14px;
  color: red;
`;

export const Input = ({ control, name, errorMessage, ...rest }: IInput) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <StyledInput
            {...rest}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            ref={ref}
          />
        )}
      />
      {errorMessage ? <ErrorMessage>{errorMessage}</ErrorMessage> : null}
    </>
  );
};
