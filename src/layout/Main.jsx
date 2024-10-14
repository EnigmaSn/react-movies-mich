import React from 'react';
import { Movies } from '../components/Movies';
import { Search } from '../components/Search';
import { Preloader } from '../components/Preloader';

const API_KEY = import.meta.env.VITE_API_KEY;

class Main extends React.Component {
  state = {
    movies: [],
    loading: false
  };

  componentDidMount() {
    this.setState({ loading: true });
    try {
      fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=Saw`)
        .then((res) => res.json())
        .then((data) => {
          this.setState({ movies: data.Search, loading: false });
        });
    } catch (error) {
      console.error('Fetch', error);
    }
  }

  searchMovies = (searchStr, type = 'all') => {
    console.log('searchMovies');
    this.setState({ loading: true });
    try {
      fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchStr}${
          type !== 'all' ? `&type=${type}` : ''
        }`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log('data ', data);
          this.setState({ movies: data.Search, loading: false });
        });
    } catch (error) {
      console.error('Fetch', error);
    }
  };

  render() {
    const { movies, loading } = this.state;

    return (
      <main className=" mx-auto mb-auto container content">
        <Search searchMovies={this.searchMovies} />
        {!loading ? <Movies movies={movies} /> : <Preloader />}
      </main>
    );
  }
}

export { Main };
