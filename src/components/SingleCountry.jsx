import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import right from "../assets/right.png";

const SingleCountry = ({ name, area }) => (
  <Link
    to={`country/${name}`}
    className="shadow border-r border-b border-slate-300 text-white bg-primary h-[170px] box-border basis-1/2 flex flex-col justify-between items-end p-4"
  >
    <img
      src={right}
      className="h-[20px] w-[20px] mt-1"
      alt="country details"
    />
    <div>
      <h3 className="text-xl text-right font-extrabold uppercase">
        {name}
      </h3>
      <p className="text-base font-medium">
        {area} km
        <sup>2</sup>
      </p>
    </div>
  </Link>
);

SingleCountry.propTypes = {
  name: PropTypes.string.isRequired,
  area: PropTypes.number.isRequired,
};

export default SingleCountry;
