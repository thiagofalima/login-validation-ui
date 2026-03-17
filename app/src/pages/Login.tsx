import { Button } from "../components/Button";
import { Container } from "../components/Container";
import { Form } from "../components/Form";
import { Heading } from "../components/Heading";
import { Input } from "../components/Input";

const Login = () => {
  return (
    <Container>
      <Form>
        <Heading>Login</Heading>
        <Input placeholder="E-mail" />
        <Input placeholder="Senha" />
        <Button>Entrar</Button>
      </Form>
    </Container>
  );
};

export default Login;
