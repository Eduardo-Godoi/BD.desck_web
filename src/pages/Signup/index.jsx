import { Form, Formik } from "formik";
import { FiLock, FiMail, FiMapPin, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import schema from "./schema";
import { AnimationContainer, Background, Container, Content } from "./styles";

function Signup() {
  function onSubmit(values, actions) {
    console.log("SUBMIT", values);
  }

  function onBlurZipCode(ev, setFieldValue) {
    const { value } = ev.target;

    const zipCode = value?.replace(/[^0-9]/g, "");

    if (zipCode?.length !== 8) {
      return;
    }

    fetch(`https://viacep.com.br/ws/${zipCode}/json/`)
      .then((res) => res.json())
      .then((data) => {
        setFieldValue("publicArea", data.logradouro);
        setFieldValue("district", data.bairro);
        setFieldValue("city", data.localidade);
        setFieldValue("state", data.uf);
      });
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
            {({ isValid, setFieldValue, errors }) => (
              <Form>
                <h1>Cadastro</h1>
                <Input
                  errorName="name"
                  name="name"
                  icon={FiUser}
                  label="Nome:"
                  placeholder="Seu nome"
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

                <Button type="submit" disable={!isValid}>
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
