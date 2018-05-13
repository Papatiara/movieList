class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: window.movielist,
    };
  }

  render() {
    return (
      <div>
        <h1 className="h1" >Movie List</h1>
        <div className="row">
          <div className="col-md-7">
            <DisplayMovie movie={this.state.movies} />
          </div>
        </div>
      </div>
    );
  }
}

window.App = App;
