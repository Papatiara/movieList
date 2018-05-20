class Movie extends React.Component {
  constructor(props) {
    super(props);
      this.state = { 
       movieStatus: {movie: 'Never watched'}
      }
  }
  watched() {
    console.log(this.props.movie.title)
    if (this.state.movieStatus === 'watched') {
      this.setState({movieStatus: 'Never watched'})
    } else {
      this.setState({movieStatus: 'watched'})
    }
  }

  render() {
    return  (
    <div className="movie">
      <button onClick={() => this.watched()}>{this.state.movieStatus.movie || this.state.movieStatus} </button>
         <span className="title">{this.props.movie.title}</span>
       </div>
    );
  }
}
  
Movie.propTypes = {
  movie: React.PropTypes.object.isRequired
};
window.Movie = Movie;