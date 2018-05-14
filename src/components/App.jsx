class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      movies:  window.movielist,
      displayedMovies: [],
    };
  }

  search(query) {
    var result = [];
    if (query === '') {
      this.setState({
      displayedMovies: this.state.movies
      })
    } else {
      var pattern = new RegExp(query, 'i');
      var filtered = _.filter(this.state.movies ,function(data) {
        return pattern.test(data.title);
      });
      this.setState({
        displayedMovies: filtered
      });
    }
}
  
  render() {
    return (
      <div>
        <h1 className="h1"> Movie List</h1>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
          <SearchMovie movies={this.state.displayedMovies} searchFunc={this.search.bind(this)}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <DisplayMovie movie={this.state.displayedMovies} />
          </div>
        </div>
      </div>
    );
  }
}

window.App = App;
