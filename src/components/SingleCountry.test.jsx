import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SingleCountry from "./SingleCountry";

describe("SingleCountry", () => {
  const country = {
    name: "Test Country",
    area: 1000,
  };

  it("renders the SingleCountry component correctly", () => {
    const { getByText } = render(
      <BrowserRouter>
        <SingleCountry name={country.name} area={country.area} />
      </BrowserRouter>
    );

    // Assert that the component renders the correct text
    const nameElement = getByText(country.name);
    expect(nameElement).toBeInTheDocument();

    const areaElement = getByText((content, element) => {
      return (
        element.tagName.toLowerCase() === "p" &&
        content.includes(`${country.area} km`)
      );
    });
    expect(areaElement).toBeInTheDocument();

    // Assert that the component has the correct styles
    const singleCountryElement = getByText(country.name).closest("a");
    expect(singleCountryElement).toHaveClass("shadow");
    expect(singleCountryElement).toHaveClass("border-r");
    expect(singleCountryElement).toHaveClass("border-b");
    expect(singleCountryElement).toHaveClass("border-slate-300");
    expect(singleCountryElement).toHaveClass("text-white");
    expect(singleCountryElement).toHaveClass("bg-primary");
    expect(singleCountryElement).toHaveClass("h-[170px]");
    expect(singleCountryElement).toHaveClass("box-border");
    expect(singleCountryElement).toHaveClass("basis-1/2");
    expect(singleCountryElement).toHaveClass("flex");
    expect(singleCountryElement).toHaveClass("flex-col");
    expect(singleCountryElement).toHaveClass("justify-end");
    expect(singleCountryElement).toHaveClass("items-end");
    expect(singleCountryElement).toHaveClass("p-4");

    const nameTextElement = getByText(country.name);
    expect(nameTextElement).toHaveClass("text-xl");
    expect(nameTextElement).toHaveClass("text-right");
    expect(nameTextElement).toHaveClass("font-extrabold");
    expect(nameTextElement).toHaveClass("uppercase");

    const areaTextElement = getByText((content, element) => {
      return (
        element.tagName.toLowerCase() === "p" &&
        content.includes(`${country.area} km`)
      );
    });
    expect(areaTextElement).toHaveClass("text-base");
    expect(areaTextElement).toHaveClass("font-medium");
  });

// integration test
 it("navigates to the correct country page when the component is clicked", () => {
   const { getByText } = render(
     <BrowserRouter>
       <SingleCountry name={country.name} area={country.area} />
     </BrowserRouter>
   );
   const linkElement = getByText(country.name);

   fireEvent.click(linkElement);

   const countryPageElement = getByText(`${country.name}`);
   expect(countryPageElement).toBeInTheDocument();
 });
});
