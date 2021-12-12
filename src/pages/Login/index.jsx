import { Form, Formik } from "formik";
import { FiLock, FiMail } from "react-icons/fi";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { toast } from "react-toastify";
import Button from "../../components/Button";
import Input from "../../components/Input";
import api from "../../services/api";
import schema from "./schema";
import { AnimationContainer, Background, Container, Content } from "./styles";

const history = useHistory;

function Login({ authenticated, setAutenticated }) {
  function onSubmit(values, actions) {
    const data = {
      username: values.emailOrUsername,
      password: values.password,
    };

    api
      .post("/login/", data)
      .then((res) => {
        const { token } = res.data;

        localStorage.setItem("@DB.Desck:token", JSON.stringify(token));

        setAutenticated(true);
        toast.success("Bem Vindo !");
        return history.push("/dashboard");
      })
      .catch((e) => {
        console.log(e.response);
        if (e.response?.statusText === "Unauthorized") {
          toast.error("Email ou senha Inválido");
        }
      });
  }

  if (authenticated) {
    return <Redirect to="/dashboard" />;
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
                  errorName="emailOrUsername"
                  name="emailOrUsername"
                  icon={FiMail}
                  label="E-mail:"
                  placeholder="E-mail ou Nome de Usuário"
                  type="text"
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
