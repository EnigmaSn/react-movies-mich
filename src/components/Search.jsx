import React from 'react';

class Search extends React.Component {
  state = {
    search: '',
    type: 'all'
  };

  handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      console.log('enter');
      this.props.searchMovies(this.state.search, this.state.type);
    }
  };

  handleFilter = (event) => {
    this.setState(
      () => ({ type: event.target.dataset.type }),
      () => {
        this.props.searchMovies(this.state.search, this.state.type);
      }
    );
  };

  render() {
    const { search, type } = this.state;

    return (
      <div className="row">
        <div className="input-field relative">
          <input
            className="validate"
            placeholder="search"
            type="search"
            value={search}
            onChange={(e) => this.setState({ search: e.target.value })}
            onKeyDown={this.handleKeyDown}
          />
          <button
            onClick={() => {
              this.props.searchMovies(search, type);
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
              onChange={this.handleFilter}
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
              onChange={this.handleFilter}
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
              onChange={this.handleFilter}
              data-type="series"
              disabled={!search}
            />
            <span>Series only</span>
          </label>
        </div>
      </div>
    );
  }
}

export { Search };
