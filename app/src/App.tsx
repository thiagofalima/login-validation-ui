import { Button } from "./components/Button";
import { Container } from "./components/Container";
import { Form } from "./components/Form";
import { Input } from "./components/Input";

function App() {
  return (
    <Container>
      <Form>
        <Input name="email" placeholder="E-mail"/>
        <Input name="senha" placeholder="Senha" type="password"/>
        <Button>Entrar</Button>
      </Form>
    </Container>
  );
}

export default App;
