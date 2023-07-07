import PropTypes from 'prop-types';

const SearchForm = ({ query, setQuery }) => (
  <div className="border-black-300 bg-rose-400 px-4 py-3">
    <form
      data-testid="search-form"
      className="flex gap-x-0 justify-between items-center"
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border rounded-md flex-1 h-full p-2 px-3"
        placeholder="Search by Country Name"
        data-testid="search-input"
      />
      <button
        type="button"
        className="bg-blue-600 rounded-md text-white px-3 py-2"
      >
        Search
      </button>
    </form>
  </div>
);

SearchForm.propTypes = {
  query: PropTypes.string.isRequired,
  setQuery: PropTypes.func.isRequired,
};
export default SearchForm;
