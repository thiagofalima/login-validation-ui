import { Control } from "react-hook-form";
import styled from "styled-components";

interface IInput extends React.InputHTMLAttributes<HTMLInputElement>{
    control: Control<any>;
}

export const Input = styled.input<IInput>`
    width: 80%;
    padding: 10px 16px;
    background-color: #FFFFFF;
    color: #000000;
    border-radius: 2em;
    border: 2px solid #952294;
`