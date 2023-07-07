import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Countries from "./Countries";
import { BrowserRouter as Router } from "react-router-dom";

// Create a mock Redux store
const mockStore = configureStore([]);
const store = mockStore({
  countries: {
    countries: [
      { id: 1, name: { common: "Country 1" }, area: 100 },
      { id: 2, name: { common: "Country 2" }, area: 200 },
    ],
  },
});

describe("Countries component", () => {
  it("renders the component and filters countries", () => {
    render(
      <Provider store={store}>
        <Router>
          <Countries />
        </Router>
      </Provider>
    );

    // Check initial rendering
    expect(screen.getByTestId("search-form")).toBeInTheDocument();
    expect(screen.getByText("Country 1")).toBeInTheDocument();
    expect(screen.getByText("Country 2")).toBeInTheDocument();

    // Simulate search query
    const input = screen.getByTestId("search-input");
    fireEvent.change(input, { target: { value: "country 1" } });

    // Check filtered countries
    expect(screen.getByText("Country 1")).toBeInTheDocument();
    expect(screen.queryByText("Country 2")).toBeNull();
  });
});
