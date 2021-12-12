import axios from "axios";
import { Form, Formik } from "formik";
import { FiLock, FiMail, FiMapPin, FiUser } from "react-icons/fi";
import { useHistory } from "react-router";
import { Link, Redirect } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../../components/Button";
import Input from "../../components/Input";
import api from "../../services/api";
import schema from "./schema";
import { AnimationContainer, Background, Container, Content } from "./styles";

function Signup({ authenticated }) {
  const history = useHistory();

  function onSubmit(values, actions) {
    const user = {
      full_name: values.name,
      username: values.username,
      email: values.email,
      password: values.password,
      zip_code: values.zipCode,
      public_area: values.publicArea,
      number: values.number,
      district: values.district,
      city: values.city,
      state: values.state,
    };

    api
      .post("/register/", user)
      .then((res) => {
        toast.success("Cadastro Confirmado!");
        return history.push("/login");
      })
      .catch((e) => {
        if (e.response?.data?.email) {
          toast.error("E-mail já cadastrado");
        }
        if (e.response?.data?.username) {
          toast.error("Nome de usuário já cadastrado");
        }
      });
  }

  function onBlurZipCode(ev, setFieldValue) {
    const { value } = ev.target;

    const zipCode = value?.replace(/[^0-9]/g, "");

    axios
      .get(`https://viacep.com.br/ws/${zipCode}/json/`)
      .then((res) => {
        if (res.data.erro) {
          return toast.error("CEP Informado não existe");
        }
        toast.success("Endereço Validado com Sucesso");
        setFieldValue("publicArea", res.data.logradouro);
        setFieldValue("district", res.data.bairro);
        setFieldValue("city", res.data.localidade);
        setFieldValue("state", res.data.uf);
      })
      .catch((_) => {
        toast.error("CEP Informado é Inválido");
      });
  }

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <Formik
            validationSchema={schema}
            onSubmit={onSubmit}
            validateOnMount
            initialValues={{
              name: "",
              email: "",
              password: "",
              confirmPassword: "",
              zipCode: "",
              publicArea: "",
              number: "",
              district: "",
              city: "",
              state: "",
            }}
          >
            {({ values, setFieldValue, errors }) => (
              <Form>
                <h1>Cadastro</h1>
                <Input
                  errorName="name"
                  name="name"
                  icon={FiUser}
                  label="Nome:"
                  placeholder="Nome Completo"
                />
                <Input
                  errorName="username"
                  name="username"
                  icon={FiUser}
                  label="Nome de usuário:"
                  placeholder="Insira seu usuário"
                />
                <Input
                  errorName="email"
                  name="email"
                  icon={FiMail}
                  label="E-mail:"
                  placeholder="Seu melhor e-mail"
                  type="email"
                />
                <Input
                  errorName="password"
                  name="password"
                  icon={FiLock}
                  label="Senha:"
                  placeholder="Uma senha Bem segura"
                  type="password"
                />
                <Input
                  errorName="confirmPassword"
                  name="confirmPassword"
                  icon={FiLock}
                  label="Confirme sua senha:"
                  placeholder="Confirme sua senha"
                  type="password"
                />
                <Input
                  errorName="zipCode"
                  name="zipCode"
                  icon={FiMapPin}
                  label="CEP:"
                  placeholder="Informe seu CEP"
                  type="text"
                  onBlur={(ev) => onBlurZipCode(ev, setFieldValue)}
                />
                <Input
                  errorName="publicArea"
                  name="publicArea"
                  icon={FiMapPin}
                  label="Logradouro:"
                  placeholder="Informe seu endereço"
                  type="text"
                />
                <Input
                  errorName="number"
                  name="number"
                  icon={FiMapPin}
                  label="Numero:"
                  placeholder="Informe Numero da residência"
                  type="text"
                />
                <Input
                  errorName="district"
                  name="district"
                  icon={FiMapPin}
                  label="Bairro:"
                  placeholder="Informe seu Bairro"
                  type="text"
                />
                <Input
                  errorName="city"
                  name="city"
                  icon={FiMapPin}
                  label="Cidade:"
                  placeholder="Informe sua Cidade"
                  type="text"
                />
                <Input
                  errorName="state"
                  name="state"
                  icon={FiMapPin}
                  label="Estado:"
                  placeholder="Informe seu Seu Estado"
                  type="text"
                />

                <Button type="submit" onClick={onsubmit}>
                  Enviar
                </Button>
                <p>
                  Já tem uma conta? Faça seu
                  <Link to="/login"> login</Link>
                </p>
              </Form>
            )}
          </Formik>
        </AnimationContainer>
      </Content>
    </Container>
  );
}

export default Signup;
