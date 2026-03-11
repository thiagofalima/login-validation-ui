import { Button } from "./components/Button";
import { Container } from "./components/Container";
import { Form } from "./components/Form";
import { Heading } from "./components/Heading";
import { Input } from "./components/Input";

function App() {
  return (
    <Container>
      <Form>
        <Heading>Login</Heading>
        <Input name="email" placeholder="E-mail"/>
        <Input name="senha" placeholder="Senha" type="password"/>
        <Button>Entrar</Button>
      </Form>
    </Container>
  );
}

export default App;
