import { useForm } from "react-hook-form";
import { Button } from "../components/Button";
import { Container } from "../components/Container";
import { Form } from "../components/Form";
import { Heading } from "../components/Heading";
import { Input } from "../components/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Control } from "react-hook-form";
import { FormValues } from "../types/FormData";

const schema = yup
  .object({
    email: yup.string().email("E-mail inválido").required("Campo obrigarótio"),
    password: yup
      .string()
      .min(6, "No mínimo 6 caracteres")
      .required("Campo obrigatório"),
  })
  .required();



const Login = () => {
  const {
    control,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
    mode: "onBlur",  // validação sempre que sair do campo
    revalidateMode: "onChange", // revalidar assim que alterar o campo
  });

  console.log(errors);

  return (
    <Container>
      <Form>
        <Heading>Login</Heading>
        <Input placeholder="E-mail" name="email" control={control} />
        <Input placeholder="Senha" name="password" control={control} />
        <Button>Entrar</Button>
      </Form>
    </Container>
  );
};

export default Login;
