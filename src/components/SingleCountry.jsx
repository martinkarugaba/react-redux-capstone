import PropTypes from "prop-types";

const SingleCountry = ({ name, area }) => (
  <div className="shadow border-black h-[170px] box-border basis-1/2 flex flex-col justify-end items-end p-4">
    <h3 className="text-lg text-right font-bold uppercase">{name}</h3>
    <p className="text-base">
      {area} km<sup>2</sup>
    </p>
  </div>
);

SingleCountry.propTypes = {
  name: PropTypes.string.isRequired,
  area: PropTypes.number.isRequired,
};

export default SingleCountry;
