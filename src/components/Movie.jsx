class Movie extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.status)
      this.state = {
        // status: this.props.status,
      }
    }
  render() {
    return  (
    <div className="movie">
      <button onClick={() => this.props.funcMovie()}> {this.props.status} </button>
         <span className="title">{this.props.movie.title}</span>
       </div>
    )
  }
}
  
Movie.propTypes = {
  movie: React.PropTypes.object.isRequired
};
window.Movie = Movie;