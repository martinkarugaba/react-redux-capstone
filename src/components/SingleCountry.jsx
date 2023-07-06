import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SingleCountry = ({ name, area }) => (
  <Link
    to={`country/${name}`}
    className="shadow border bg-slate-100 h-[170px] box-border basis-1/2 flex flex-col justify-end items-end p-4"
  >
    <h3 className="text-lg text-right font-bold uppercase">{name}</h3>
    <p className="text-base">
      {area}
      {' '}
      km
      <sup>2</sup>
    </p>
  </Link>
);

SingleCountry.propTypes = {
  name: PropTypes.string.isRequired,
  area: PropTypes.number.isRequired,
};

export default SingleCountry;
