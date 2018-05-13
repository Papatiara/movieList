var DisplayMovie = (props) => (
  <div className="display-movie">
    {console.log(props.movie[0].title)}
        <h3>{props.movie[0].title}</h3>
        <h3>{props.movie[1].title}</h3>
        <h3>{props.movie[2].title}</h3>
        <h3>{props.movie[3].title}</h3>
    <div className="list-movies-details">
    </div>
  </div>
);    


DisplayMovie.propTypes = {
  movie: React.PropTypes.array.isRequired
};

window.DisplayMovie = DisplayMovie;
