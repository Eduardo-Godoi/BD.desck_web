import { ErrorMessage, Field } from "formik";
import { Container, InputContainer } from "./styles";

function Input({ label, icon: Icon, errorName, ...rest }) {
  return (
    <Container>
      <div>
        {label}
        <span>
          <ErrorMessage name={errorName} />
        </span>
      </div>
      <InputContainer>
        {Icon && <Icon size={20} />}
        <Field {...rest} />
      </InputContainer>
    </Container>
  );
}

export default Input;
