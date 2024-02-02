import { render } from "@testing-library/react-native";
import { Provider } from "react-redux";
import { store } from "../../state/store";

const StateProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

const customRender = (ui, options) =>
  render(ui, { wrapper: StateProvider, ...options });

// re-export everything
export * from "@testing-library/react-native";

// override render method
export { customRender as render };
