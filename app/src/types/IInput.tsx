import { Control } from "react-hook-form";

interface IInput extends React.InputHTMLAttributes<HTMLInputElement>{
    control: Control<any>;
}

export default IInput;