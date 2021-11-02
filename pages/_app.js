import Layout from "@components/Layout";
import "../styles/globals.scss";
import { createContext, useReducer } from "react";

const defaultGlobalState = { nav: [0, 0, 0, 0, 0] };

export const globalStateContext = createContext(defaultGlobalState);
export const dispatchStateContext = createContext(undefined);

const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    (state, newValue) => ({ ...state, ...newValue }),
    defaultGlobalState
  );
  return (
    <globalStateContext.Provider value={state}>
      <dispatchStateContext.Provider value={dispatch}>
        {children}
      </dispatchStateContext.Provider>
    </globalStateContext.Provider>
  );
};

const useGlobalState = () => [
  useContext(globalStateContext),
  useContext(dispatchStateContext),
];

function MyApp({ Component, pageProps }) {
  return (
    <GlobalStateProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GlobalStateProvider>
  );
}

export default MyApp;
