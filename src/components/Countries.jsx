import { useSelector } from "react-redux";
import { useState } from "react";
import SingleCountry from "./SingleCountry";
import SearchForm from "./SearchForm";

const Countries = () => {
  const { countries } = useSelector((store) => store.countries);
  const [query, setQuery] = useState("");

  const filteredCountries = countries
    .slice(0, 50)
    .filter((country) =>
      country.name.common.toLowerCase().includes(query.toLowerCase())
    );

  return (
    <>
      <SearchForm query={query} setQuery={setQuery} />
      <div className="flex row-reverse justify-start items-start flex-wrap">
        {filteredCountries.map((country) => (
          <SingleCountry
            key={country.id}
            name={country.name.common}
            area={country.area}
          />
        ))}
      </div>
    </>
  );
};

export default Countries;
