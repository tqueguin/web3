import { ProviderWrapper as CountersProviderWrapper } from "../../contexts/votesContext";
import App from "./App";

const AppLoader = () => {
  return (
    <CountersProviderWrapper>
      <App />
    </CountersProviderWrapper>
  );
};

export default AppLoader;
