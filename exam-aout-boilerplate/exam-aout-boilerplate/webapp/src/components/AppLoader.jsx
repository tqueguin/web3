import { ProviderWrapper as ContextProvider } from "contexts/context";
import { BrowserRouter as Router } from "react-router-dom";
import App from "components/App";

const AppLoader = () => {
  return (
    <ContextProvider>
      <Router>
        <App />
      </Router>
    </ContextProvider>
  );
};

export default AppLoader;
