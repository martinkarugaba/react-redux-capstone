import React from "react";
import { render } from "@testing-library/react";
import Navbar from "./Navbar";

describe("Navbar", () => {
  it("renders the Navbar component correctly", () => {
    const { getByText } = render(<Navbar />);

    // Assert that the component renders the correct text
    const headingElement = getByText("Find Your Country");
    expect(headingElement).toBeInTheDocument();

    // Assert that the component has the correct styles
    const navbarElement = getByText("Find Your Country").closest(
      "div"
    );
    expect(navbarElement).toHaveClass("bg-secondary");
    expect(navbarElement).toHaveClass("py-10");

    const headingTextElement = getByText("Find Your Country");
    expect(headingTextElement).toHaveClass("text-3xl");
    expect(headingTextElement).toHaveClass("text-white");
    expect(headingTextElement).toHaveClass("text-center");
    expect(headingTextElement).toHaveClass("font-bold");
  });
});
