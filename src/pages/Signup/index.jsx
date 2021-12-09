import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { AnimationContainer, Background, Container, Content } from "./styles";
function Signup() {
  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <form>
            <h1>Cadastro</h1>
            <input></input>
            <input></input>
            <input></input>
            <input></input>
            <Button>Enviar</Button>
            <p>
              Já tem uma conta? Faça seu Login <Link to="/login">Login</Link>
            </p>
          </form>
        </AnimationContainer>
      </Content>
    </Container>
  );
}

export default Signup;