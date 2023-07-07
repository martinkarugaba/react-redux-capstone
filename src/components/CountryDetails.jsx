import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import SingleDetail from './SingleDetail';

const CountryDetails = () => {
  const { name } = useParams();
  const { countries } = useSelector((store) => store.countries);

  const country = countries
    .slice(0, 50)
    .find((country) => country.name.common === name);

  const {
    capital,
    subregion,
    population,
    landlocked,
    area,
    flag,
  } = country;

  return (
    <ul className="bg-primary">
      <SingleDetail item="Flag" value={flag} />
      <SingleDetail item="Capital" value={capital} />
      <SingleDetail item="Subregion" value={subregion} />
      <SingleDetail item="Population" value={population} />
      <SingleDetail item="Area" value={area} />
      <SingleDetail
        item="Landlocked"
        value={landlocked ? 'Yes' : 'No'}
      />
    </ul>
  );
};

export default CountryDetails;
