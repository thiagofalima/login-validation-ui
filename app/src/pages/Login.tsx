import { useForm } from "react-hook-form";
import { Button } from "../components/Button";
import { Container } from "../components/Container";
import { Form } from "../components/Form";
import { Heading } from "../components/Heading";
import { Input } from "../components/Input";

const Login = () => {

    const { register, watch, formState: { errors, isValid } } = useForm();
    const form = watch();

    console.log(form)

  return (
    <Container>
      <Form>
        <Heading>Login</Heading>
        <Input placeholder="E-mail" {...register("email")}/>
        <Input placeholder="Senha" {...register("password")}/>
        <Button>Entrar</Button>
      </Form>
    </Container>
  );
};

export default Login;
