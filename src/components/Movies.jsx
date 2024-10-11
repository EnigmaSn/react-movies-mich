import { Movie } from './Movie';

function Movies(props) {
  const { movies } = props;
  return (
    <div className="movies grid grid-cols-autofill justify-center	gap-5 p-5">
      {movies.map((movie) => {
        return <Movie key={movie.imdbID} {...movie} />;
      })}
    </div>
  );
}

export { Movies };
