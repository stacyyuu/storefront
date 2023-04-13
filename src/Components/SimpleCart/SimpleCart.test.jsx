import SimpleCart from ".";

import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

describe("Cart", () => {
  test("renders items in cart", () => {
    const store = mockStore({
      cart: {
        cartItems: [
          {
            product: {
              name: "TV",
            },
          },
          {
            product: {
              name: "Radio",
            },
          },
        ],
      },
    });

    render(
      <Provider store={store}>
        <SimpleCart />
      </Provider>
    );

    const item1 = screen.getByText(/TV/i);
    const item2 = screen.getByText(/Radio/i);

    expect(item1).toBeInTheDocument();
    expect(item2).toBeInTheDocument();
  });
});