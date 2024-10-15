import { useState } from 'react';

const Search = (props) => {
  const { searchMovies } = props;
  const [search, setSearch] = useState('');
  const [type, setType] = useState('all');

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      searchMovies(search, type);
    }
  };

  const handleFilter = (event) => {
    setType(() => event.target.dataset.type);
    searchMovies(search, event.target.dataset.type);
  };

  return (
    <div className="row">
      <div className="input-field relative">
        <input
          className="validate"
          placeholder="search"
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={() => {
            searchMovies(search, type);
          }}
          className="btn absolute top-0 right-2">
          Search
        </button>
      </div>
      <div className="type-field flex gap-6">
        <label>
          <input
            className="with-gap"
            name="type"
            type="radio"
            checked={type === 'all'}
            onChange={handleFilter}
            data-type="all"
            disabled={!search}
          />
          <span>All</span>
        </label>
        <label>
          <input
            className="with-gap"
            name="type"
            type="radio"
            checked={type === 'movie'}
            onChange={handleFilter}
            data-type="movie"
            disabled={!search}
          />
          <span>Movies only</span>
        </label>
        <label>
          <input
            className="with-gap"
            name="type"
            type="radio"
            checked={type === 'series'}
            onChange={handleFilter}
            data-type="series"
            disabled={!search}
          />
          <span>Series only</span>
        </label>
      </div>
    </div>
  );
};

export { Search };
