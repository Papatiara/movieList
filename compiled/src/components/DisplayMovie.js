"use strict";

var DisplayMovie = function DisplayMovie(props) {
  return React.createElement(
    "div",
    { className: "display-movie" },
    console.log(props.movie[0].title),
    React.createElement(
      "h3",
      null,
      props.movie[0].title
    ),
    React.createElement(
      "h3",
      null,
      props.movie[1].title
    ),
    React.createElement(
      "h3",
      null,
      props.movie[2].title
    ),
    React.createElement(
      "h3",
      null,
      props.movie[3].title
    ),
    React.createElement("div", { className: "list-movies-details" })
  );
};

DisplayMovie.propTypes = {
  movie: React.PropTypes.array.isRequired
};

window.DisplayMovie = DisplayMovie;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0Rpc3BsYXlNb3ZpZS5qc3giXSwibmFtZXMiOlsiRGlzcGxheU1vdmllIiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwibW92aWUiLCJ0aXRsZSIsInByb3BUeXBlcyIsIlJlYWN0IiwiUHJvcFR5cGVzIiwiYXJyYXkiLCJpc1JlcXVpcmVkIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLGVBQWUsU0FBZkEsWUFBZSxDQUFDQyxLQUFEO0FBQUEsU0FDakI7QUFBQTtBQUFBLE1BQUssV0FBVSxlQUFmO0FBQ0dDLFlBQVFDLEdBQVIsQ0FBWUYsTUFBTUcsS0FBTixDQUFZLENBQVosRUFBZUMsS0FBM0IsQ0FESDtBQUVNO0FBQUE7QUFBQTtBQUFLSixZQUFNRyxLQUFOLENBQVksQ0FBWixFQUFlQztBQUFwQixLQUZOO0FBR007QUFBQTtBQUFBO0FBQUtKLFlBQU1HLEtBQU4sQ0FBWSxDQUFaLEVBQWVDO0FBQXBCLEtBSE47QUFJTTtBQUFBO0FBQUE7QUFBS0osWUFBTUcsS0FBTixDQUFZLENBQVosRUFBZUM7QUFBcEIsS0FKTjtBQUtNO0FBQUE7QUFBQTtBQUFLSixZQUFNRyxLQUFOLENBQVksQ0FBWixFQUFlQztBQUFwQixLQUxOO0FBTUUsaUNBQUssV0FBVSxxQkFBZjtBQU5GLEdBRGlCO0FBQUEsQ0FBbkI7O0FBYUFMLGFBQWFNLFNBQWIsR0FBeUI7QUFDdkJGLFNBQU9HLE1BQU1DLFNBQU4sQ0FBZ0JDLEtBQWhCLENBQXNCQztBQUROLENBQXpCOztBQUlBQyxPQUFPWCxZQUFQLEdBQXNCQSxZQUF0QiIsImZpbGUiOiJEaXNwbGF5TW92aWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgRGlzcGxheU1vdmllID0gKHByb3BzKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiZGlzcGxheS1tb3ZpZVwiPlxuICAgIHtjb25zb2xlLmxvZyhwcm9wcy5tb3ZpZVswXS50aXRsZSl9XG4gICAgICAgIDxoMz57cHJvcHMubW92aWVbMF0udGl0bGV9PC9oMz5cbiAgICAgICAgPGgzPntwcm9wcy5tb3ZpZVsxXS50aXRsZX08L2gzPlxuICAgICAgICA8aDM+e3Byb3BzLm1vdmllWzJdLnRpdGxlfTwvaDM+XG4gICAgICAgIDxoMz57cHJvcHMubW92aWVbM10udGl0bGV9PC9oMz5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtbW92aWVzLWRldGFpbHNcIj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pOyAgICBcblxuXG5EaXNwbGF5TW92aWUucHJvcFR5cGVzID0ge1xuICBtb3ZpZTogUmVhY3QuUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWRcbn07XG5cbndpbmRvdy5EaXNwbGF5TW92aWUgPSBEaXNwbGF5TW92aWU7XG4iXX0=