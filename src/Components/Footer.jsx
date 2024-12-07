import { useDentistStates } from "./Context/Context"

const Footer = () => {
  const { state } = useDentistStates();

  return (
    <footer className={state.theme === "dark" ? "footer dark" : "footer light"}>
        <p>Powered by</p>
        <img src="../../public/images/DH.png" alt="DH-logo"/>
    </footer>
  );
};

export default Footer
