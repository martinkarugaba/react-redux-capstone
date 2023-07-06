import PropTypes from "prop-types";

const SearchForm = () => (
  <div className="border-black-300 bg-gray-300 px-4 py-3">
    <form className="flex gap-x-0 justify-between items-center">
      <input type="text" className="border rounded-md flex-1 h-full p-2 px-3" placeholder="Search" name="" id="" />
      <button type="search" className="bg-blue-600 rounded-md text-white px-3 py-2">Search</button>
    </form>
  </div>
);

SearchForm.propTypes = {};
export default SearchForm;
