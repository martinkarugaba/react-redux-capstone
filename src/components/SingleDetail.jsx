import PropTypes from 'prop-types'
const SingleDetail = ({item, value}) => {
  return (
    <li className="flex border justify-between items-center px-4 py-6">
      <span className="text-xl font-medium">{item}</span>
      <span className="text-lg font-normal">{value}</span>
    </li>
  );
}
SingleDetail.propTypes = {
  item: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
export default SingleDetail