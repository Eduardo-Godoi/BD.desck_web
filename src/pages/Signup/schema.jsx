import * as Yup from "yup";

export default Yup.object().shape({
  name: Yup.string().required("Campo é Obrigaório"),
  email: Yup.string()
    .email("Formato de E-mail inválido")
    .required("Campo é Obrigaório"),
  password: Yup.string()
    .min(8, "necessário no mínimo 8 caracteres")
    .required("Campo é Obrigaório"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Senhas diferentes")
    .required("Campo é Obrigaório"),
  zipCode: Yup.string().required("Campo é Obrigaório"),
  publicArea: Yup.string().required("Campo é Obrigaório"),
  number: Yup.string().required("Campo é Obrigaório"),
  district: Yup.string().required("Campo é Obrigaório"),
  city: Yup.string().required("Campo é Obrigaório"),
  state: Yup.string().required("Campo é Obrigaório"),
});
