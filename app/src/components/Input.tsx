import { Control } from "react-hook-form";
import styled from "styled-components";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import IInput from "../types/IInput";

const schema = yup
  .object({
    firstName: yup
      .string()
      .email("E-mail inválido")
      .required("Campo obrigarótio"),
    age: yup
      .string()
      .min(6, "No mínimo 6 caracteres")
      .required("Campo obrigatório"),
  })
  .required();

export const Input = styled.input<IInput>`
  width: 80%;
  padding: 10px 16px;
  background-color: #ffffff;
  color: #000000;
  border-radius: 2em;
  border: 2px solid #952294;
`;
