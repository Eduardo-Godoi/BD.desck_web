import { Redirect } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../../components/Button";
import { Container, Content } from "./styles";

function Dashboard({ authenticated, setAutenticated }) {
  if (!authenticated) {
    return <Redirect to="/login" />;
  }

  function handleLogout() {
    localStorage.clear();
    setAutenticated(false);
    toast.info("Até logo");
    return <Redirect to="/" />;
  }
  return (
    <Container>
      <Content>
        <h1>Dashboard</h1>

        <div>
          <Button onClick={handleLogout} whiteSchema>
            Sair
          </Button>
        </div>
      </Content>
    </Container>
  );
}

export default Dashboard;
