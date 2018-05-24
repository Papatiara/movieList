class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      movies:  window.movielist,
      displayedMovies: window.movielist,
      store: [],
      movieStatus: 'To watch'
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
  addMovie(query) {
    var obj = {}
    obj.title = query
    this.state.movies.push(obj)
    }

    watched() {
      console.log(this.state.movieStatus)
      if (this.state.movieStatus === 'To watch') {
        this.setState({movieStatus: 'Watched'})
      } else {
        this.setState({movieStatus: 'To watch'})
      }
      // if (this.state.movieStatus === 'Watched') {
      //     this.state.store.push(this.props.movie)
      //     console.log(this.state.store)
      // }
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
      <div>
      <button> Watched </button>
      <button> To watch </button>
      </div>
        <div className="row">
          <div className="col-md-7">
          <div> 
          {this.state.displayedMovies.map((movie, index) =>
               <Movie movie={movie} key={index} funcMovie={this.watched.bind(this)} status={this.state.movieStatus}/> )}
            {/* <Movie movie={this.state.displayedMovies} /> */}
            </div>
          </div>
          <div className="row">
          <div className="col-md-7">
          <div>
            <Add  movies={this.state.displayedMovies} addFunc={this.addMovie.bind(this)}/>
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

window.App = App;
