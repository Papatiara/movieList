class SearchMovie extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        searchBox: {value: ''}
      }
    }
  
    getQuery(searchVal) {
      this.setState({searchBox: searchVal})
    }

    button(actualState) {
        console.log(actualState)
        this.props.searchFunc(actualState);
    };
    
    noSubmit(event) {
      event.preventDefault();
    }
    
    render() {
      return (
        <div className="search">
        <button onClick={() => this.button(this.state.searchBox)}> Go </button>
        <input className="searchBox" type="text" placeholder="Search for a movie" onChange={(e) => this.getQuery(e.target.value)} />
        </div>
      );
    }
  };
  
  SearchMovie.propTypes = {
    movies: React.PropTypes.array.isRequired
  };
  
  window.SearchMovie = SearchMovie;