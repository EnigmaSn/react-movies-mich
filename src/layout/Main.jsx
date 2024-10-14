import React from 'react';
import { Movies } from '../components/Movies';
import { Search } from '../components/Search';
import { Preloader } from '../components/Preloader';

class Main extends React.Component {
  state = {
    movies: []
  };

  componentDidMount() {
    fetch(`http://www.omdbapi.com/?apikey=63a73863&s=Saw`)
      .then((res) => res.json())
      .then((data) => this.setState({ movies: data.Search }));
  }

  searchMovies = (searchStr) => {
    console.log('searchMovies');
    fetch(`http://www.omdbapi.com/?apikey=63a73863&s=${searchStr}`)
      .then((res) => res.json())
      .then((data) => {
        console.log('data ', data);
        this.setState({ movies: data.Search });
      });
  };

  render() {
    const { movies } = this.state;

    return (
      <main className=" mx-auto mb-auto container content">
        <Search searchMovies={this.searchMovies} />
        {movies.length ? <Movies movies={movies} /> : <Preloader />}
      </main>
    );
  }
}

export { Main };
