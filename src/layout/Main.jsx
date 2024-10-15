import { useState, useEffect } from 'react';
import { Movies } from '../components/Movies';
import { Search } from '../components/Search';
import { Preloader } from '../components/Preloader';

const API_KEY = import.meta.env.VITE_API_KEY;

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchMovies = (searchStr, type = 'all') => {
    setLoading(true);

    fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchStr}${
        type !== 'all' ? `&type=${type}` : ''
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.Search);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Fetch', error);
        setLoading(false);
      });
  };

  useEffect(() => {
    setLoading(true);
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=Saw`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setMovies(data.Search);
      })
      .catch((error) => {
        console.error('Fetch', error);
        setLoading(false);
      });
  }, []);

  return (
    <main className=" mx-auto mb-auto container content">
      <Search searchMovies={searchMovies} />
      {!loading ? <Movies movies={movies} /> : <Preloader />}
    </main>
  );
};

export { Main };
