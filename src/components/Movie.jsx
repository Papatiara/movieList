var Movie = (props) => (
    <div className="movie">
      <span className="title">{props.movie.title}</span>
    </div>
  
  );
  
  Movie.propTypes = {
    movie: React.PropTypes.object.isRequired
  };
  
  window.Movie = Movie;