import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const SingleCountryDetails = () => {
  const { name } = useParams();
  const { countries } = useSelector((store) => store.countries);

  const country = countries.slice(0, 30).find((country) => {
    return country.name.common === name;
  });

  const {capital, subregion, car:{side}, population, currency, landlocked} = country;

  return (
    <ul>
      <li>{capital}</li>
      <li>{population}</li>
      <li>{currency}</li>
      <li>{subregion}</li>
    </ul>
  );
};
export default SingleCountryDetails;
