import * as Yup from "yup";

export default Yup.object().shape({
  emailOrUsername: Yup.string()
    .min(4, "Mínimo 4 caracteres")
    .required("Campo é Obrigatório"),
  password: Yup.string()
    .min(8, "necessário no mínimo 8 caracteres")
    .required("Campo é Obrigatório"),
});
