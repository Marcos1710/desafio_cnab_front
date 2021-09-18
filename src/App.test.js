import React from "react";
import { render, fireEvent } from "@testing-library/react";

import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./store/ducks";

import Login from "./screens/Login";
import List from "./screens/List";
import Register from "./screens/Register";

// cria um Wrapper para utilizar nas páginas necessárias que precisam do store
function renderRedux(
  ui,
  {
    initialState,
    store = createStore(reducers, initialState),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return render(ui, { wrapper: Wrapper, ...renderOptions });
}

// Inicio dos testes
describe("testing page login", () => {
  test("should fill the mail", () => {
    const { getByTestId } = render(<Login />);

    const inputMail = getByTestId("input-mail");
    fireEvent.change(inputMail, { target: { vallue: "teste@gmail.com" } });
  });

  test("should fill the password", () => {
    const { getByTestId } = render(<Login />);

    const inputPassword = getByTestId("input-password");
    fireEvent.change(inputPassword, { target: { vallue: "123456" } });
  });

  test("should render the button of login", () => {
    const { getByText } = render(<Login />);

    const getByBtnLogin = getByText("Entrar");
    expect(getByBtnLogin).toBeInTheDocument();
  });

  test("should click in the button of login", () => {
    const { getByText } = render(<Login />);

    const btnSubmit = getByText("Entrar");
    fireEvent.click(btnSubmit);
  });
});

describe("testing page list files", () => {
  test("should render the table files", () => {
    const { getByTestId } = renderRedux(<List />);

    const tblCnabs = getByTestId("table-cnabs");
    expect(tblCnabs).toBeInTheDocument();
  });
});