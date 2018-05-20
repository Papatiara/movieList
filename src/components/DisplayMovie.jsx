class DisplayMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foundedMovie: {movie: 'No movies found'}
    }
  }

render() {
  return (
    <div>
    <h3 className="noMovies"></h3> 
    {this.props.movie.map((movie, index) =>
    <Movie movie={movie} key={index} /> )}
    </div>
  )
}
}

DisplayMovie.propTypes = {
  movie: React.PropTypes.array.isRequired
};

window.DisplayMovie = DisplayMovie;
