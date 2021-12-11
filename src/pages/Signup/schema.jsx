import * as Yup from "yup";

export default Yup.object().shape({
  name: Yup.string().required("Campo é Obrigatório"),
  email: Yup.string()
    .email("Formato de E-mail inválido")
    .required("Campo é Obrigatório"),
  password: Yup.string()
    .min(8, "necessário no mínimo 8 caracteres")
    .required("Campo é Obrigatório"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Senhas diferentes")
    .required("Campo é Obrigaório"),
  zipCode: Yup.string().required("Campo é Obrigatório"),
  publicArea: Yup.string().required("Campo é Obrigatório"),
  number: Yup.string().required("Campo é Obrigatório"),
  district: Yup.string().required("Campo é Obrigatório"),
  city: Yup.string().required("Campo é Obrigatório"),
  state: Yup.string().required("Campo é Obrigatório"),
});
