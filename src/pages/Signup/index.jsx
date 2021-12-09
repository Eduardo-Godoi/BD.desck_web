import { FiLock, FiMail, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { AnimationContainer, Background, Container, Content } from "./styles";
function Signup() {
  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <form>
            <h1>Cadastro</h1>
            <Input icon={FiUser} label="Nome" placeholder="Seu nome" />
            <Input
              icon={FiMail}
              label="E-mail"
              placeholder="Seu melhor e-mail"
            />
            <Input
              icon={FiLock}
              label="Senha"
              placeholder="Uma senha Bem segura"
              type="password"
            />
            <Input
              icon={FiLock}
              label="Confirme sua senha"
              placeholder="Confirme sua senha"
              type="password"
            />
            {/* <Input label="Endereço" placeholder="Informe se indereço" />
            <Input label="Numero" placeholder="Numero da Residência" />
            <Input label="Bairro" placeholder="Nome do Bairro" />
            <Input label="CEP" placeholder="Informe seu CEP" /> */}

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
