import * as Yup from "yup";

export default Yup.object().shape({
  email: Yup.string()
    .email("Formato de E-mail inválido")
    .required("Campo é Obrigatório"),
  password: Yup.string()
    .min(8, "necessário no mínimo 8 caracteres")
    .required("Campo é Obrigatório"),
});
