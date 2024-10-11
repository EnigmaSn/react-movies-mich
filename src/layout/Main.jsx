import React from 'react';
import { Movies } from '../components/Movies';

class Main extends React.Component {
  state = {
    movies: []
  };

  componentDidMount() {
    fetch('http://www.omdbapi.com/?apikey=63a73863&s=Matrix')
      .then((res) => res.json())
      .then((data) => this.setState({ movies: data.Search }));
  }

  render() {
    const { movies } = this.state;

    return (
      <main className=" mx-auto mb-auto bg-slate-400 container content">
        <Movies movies={movies} />
      </main>
    );
  }
}

export { Main };
