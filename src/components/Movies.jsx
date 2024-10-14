import { Movie } from './Movie';

function Movies(props) {
  const { movies = [] } = props;
  return (
    <div className="movies grid grid-cols-autofill justify-center	gap-5 p-5">
      {movies.length ? (
        movies.map((movie) => {
          return <Movie key={movie.imdbID} {...movie} />;
        })
      ) : (
        <h3>Something went wrong</h3>
      )}
    </div>
  );
}

export { Movies };
