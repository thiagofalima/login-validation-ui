import { Control } from "react-hook-form";
import styled from "styled-components";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import IInput from "../types/IInput";

export const Input = styled.input<IInput>`
  width: 80%;
  padding: 10px 16px;
  background-color: #ffffff;
  color: #000000;
  border-radius: 2em;
  border: 2px solid #952294;
`;
