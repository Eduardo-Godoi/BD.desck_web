import { useHistory } from "react-router";
import { Redirect } from "react-router-dom";
import Button from "../../components/Button";
import { Container, Content } from "./styles";

function Home({ authenticated }) {
  const history = useHistory();

  const handleNavigation = (path) => {
    return history.push(path);
  };

  if (authenticated) {
    return <Redirect to="/login" />;
  }

  return (
    <Container>
      <Content>
        <h1>
          BD<span>.</span>Desck
        </h1>

        <span>Criar, Inovar e Conectar</span>
        <div>
          <Button onClick={() => handleNavigation("/signup")} whiteSchema>
            Cadastre-se
          </Button>
          <Button onClick={() => handleNavigation("/login")}>Login</Button>
        </div>
      </Content>
    </Container>
  );
}

export default Home;
