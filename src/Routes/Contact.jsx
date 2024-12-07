import Form from "../Components/Form";
import { useDentistStates } from "../Components/Context/Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {

  const { state } = useDentistStates();

  return (
    <div className={`contact-container ${state.theme === "dark" ? "dark" : "light"}`}>
      <h2>¿Tienes Preguntas?</h2>
      <p>¡Envíanos tus preguntas y te contactaremos!</p>
      <Form />
    </div>
  );
};

export default Contact;