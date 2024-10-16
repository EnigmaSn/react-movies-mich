function Movie(props) {
  const { Title: title, Year: year, imdbID: id, Type: type, Poster: poster } = props;
  return (
    <div id={id} className="movie card ">
      <div className="card-image waves-effect waves-block waves-light">
        {poster === 'N/A' ? (
          <img className="activator" src={`https://placehold.co/300x450?text=${title}`} />
        ) : (
          <img className="activator" src={poster} />
        )}
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {title}
          <i className="material-icons right">{year}</i>
        </span>
        <p>Тип: {type}</p>
      </div>
    </div>
  );
}

export { Movie };
