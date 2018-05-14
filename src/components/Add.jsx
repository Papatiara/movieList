class Add extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    addValue: {value: ''},
  }
}

getMovie(valueAdded) {
  this.setState({addValue: valueAdded})
}

addButton(actualState) {
    this.props.addFunc(actualState);
    console.log(actualState)
};

render() {
    return (
<div className="add">
  <button onClick={() => this.addButton(this.state.addValue)} >Add</button>
    <input className="searchBox" type="text" placeholder="Add a Movie" onChange={(e) => this.getMovie(e.target.value)} />
</div>
    )
 }
}

 Add.propTypes = {
    movies: React.PropTypes.array.isRequired
  };






window.Add = Add; 