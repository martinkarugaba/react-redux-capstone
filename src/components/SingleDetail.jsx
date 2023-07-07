import PropTypes from 'prop-types';

const SingleDetail = ({ item, value }) => (
  <li className="flex text-white odd:bg-secondary justify-between items-center px-4 py-6">
    <span className="text-lg font-bold">{item}</span>
    <span className="text-xg font-medium">{value}</span>
  </li>
);
SingleDetail.propTypes = {
  item: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.element,
  ]).isRequired,
};
export default SingleDetail;
