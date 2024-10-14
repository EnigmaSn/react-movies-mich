import React from 'react';

class Search extends React.Component {
  state = {
    search: ''
  };

  handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      console.log('enter');
      this.props.searchMovies(this.state.search);
    }
  };

  render() {
    return (
      <div className="row">
        <div className="input-field relative">
          <input
            className="validate"
            placeholder="search"
            type="search"
            value={this.state.search}
            onChange={(e) => this.setState({ search: e.target.value })}
            onKeyDown={this.handleKeyDown}
          />
          <button
            onClick={() => {
              this.props.searchMovies(this.state.search);
            }}
            className="btn absolute top-0 right-2">
            Поиск
          </button>
        </div>
      </div>
    );
  }
}

export { Search };
