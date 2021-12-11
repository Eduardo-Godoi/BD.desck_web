import { Form, Formik } from "formik";
import { FiLock, FiMail } from "react-icons/fi";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import schema from "./schema";
import { AnimationContainer, Background, Container, Content } from "./styles";

const history = useHistory;

function Login() {
  function onSubmit(values, actions) {
    delete values["confirmPassword"];
    console.log("SUBMIT", values);
  }

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <Formik
            validationSchema={schema}
            onSubmit={onSubmit}
            validateOnMount
            initialValues={{
              email: "",
              password: "",
            }}
          >
            {({ values, isValid, setFieldValue, errors }) => (
              <Form>
                <h1>Login</h1>
                <Input
                  errorName="email"
                  name="email"
                  icon={FiMail}
                  label="E-mail:"
                  placeholder="Informe seu e-mail"
                  type="email"
                />
                <Input
                  errorName="password"
                  name="password"
                  icon={FiLock}
                  label="Senha:"
                  placeholder="Informe sua senha"
                  type="password"
                />
                <Button type="submit" disable={!isValid}>
                  Enviar
                </Button>
                <p>
                  Não tem uma conta? Faça seu
                  <Link to="/signup"> Cadastro</Link>
                </p>
              </Form>
            )}
          </Formik>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
}

export default Login;
