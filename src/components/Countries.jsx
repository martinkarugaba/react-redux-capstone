import { useSelector } from 'react-redux';
import SingleCountry from './SingleCountry';

const Countries = () => {
  const { countries } = useSelector((store) => store.countries);
  return (
    <div className="flex justify-start items-start flex-wrap">
      {countries.slice(0, 30).map((country) => (
        <SingleCountry key={country.area} name={country.name.common} area={country.area} />
      ))}
    </div>
  );
};
export default Countries;
