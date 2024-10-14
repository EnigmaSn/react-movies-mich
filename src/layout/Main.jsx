import React from 'react';
import { Movies } from '../components/Movies';
import { Search } from '../components/Search';
import { Preloader } from '../components/Preloader';

class Main extends React.Component {
  state = {
    movies: []
  };

  componentDidMount() {
    try {
      fetch(`http://www.omdbapi.com/?apikey=63a73863&s=Saw`)
        .then((res) => res.json())
        .then((data) => this.setState({ movies: data.Search }));
    } catch (error) {
      console.error('Fetch', error);
    }
  }

  searchMovies = (searchStr, type = 'all') => {
    console.log('searchMovies');
    try {
      fetch(
        `http://www.omdbapi.com/?apikey=63a73863&s=${searchStr}${
          type !== 'all' ? `&type=${type}` : ''
        }`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log('data ', data);
          this.setState({ movies: data.Search });
        });
    } catch (error) {
      console.error('Fetch', error);
    }
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
