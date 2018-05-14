var DisplayMovie = (props) => {
  if (props.movie.length === 0) {
    return (
      <h3 className="noMovies">No movies found :(</h3>
    );
  } else {
    return (
      <div className="display-movie">
       {props.movie.map((movie, index) => {
         return <Movie movie={movie} key={index} />
   })}
   </div>
  )
  } 
};

DisplayMovie.propTypes = {
  movie: React.PropTypes.array.isRequired
};

window.DisplayMovie = DisplayMovie;
