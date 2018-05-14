"use strict";

var DisplayMovie = function DisplayMovie(props) {
  if (props.movie.length === 0) {
    return React.createElement(
      "h3",
      { className: "noMovies" },
      "No movies found :("
    );
  } else {
    return React.createElement(
      "div",
      { className: "display-movie" },
      props.movie.map(function (movie, index) {
        return React.createElement(Movie, { movie: movie, key: index });
      })
    );
  }
};

DisplayMovie.propTypes = {
  movie: React.PropTypes.array.isRequired
};

window.DisplayMovie = DisplayMovie;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0Rpc3BsYXlNb3ZpZS5qc3giXSwibmFtZXMiOlsiRGlzcGxheU1vdmllIiwicHJvcHMiLCJtb3ZpZSIsImxlbmd0aCIsIm1hcCIsImluZGV4IiwicHJvcFR5cGVzIiwiUmVhY3QiLCJQcm9wVHlwZXMiLCJhcnJheSIsImlzUmVxdWlyZWQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsZUFBZSxTQUFmQSxZQUFlLENBQUNDLEtBQUQsRUFBVztBQUM1QixNQUFJQSxNQUFNQyxLQUFOLENBQVlDLE1BQVosS0FBdUIsQ0FBM0IsRUFBOEI7QUFDNUIsV0FDRTtBQUFBO0FBQUEsUUFBSSxXQUFVLFVBQWQ7QUFBQTtBQUFBLEtBREY7QUFHRCxHQUpELE1BSU87QUFDTCxXQUNFO0FBQUE7QUFBQSxRQUFLLFdBQVUsZUFBZjtBQUNFRixZQUFNQyxLQUFOLENBQVlFLEdBQVosQ0FBZ0IsVUFBQ0YsS0FBRCxFQUFRRyxLQUFSLEVBQWtCO0FBQ2pDLGVBQU8sb0JBQUMsS0FBRCxJQUFPLE9BQU9ILEtBQWQsRUFBcUIsS0FBS0csS0FBMUIsR0FBUDtBQUNMLE9BRkk7QUFERixLQURGO0FBT0Q7QUFDRixDQWREOztBQWdCQUwsYUFBYU0sU0FBYixHQUF5QjtBQUN2QkosU0FBT0ssTUFBTUMsU0FBTixDQUFnQkMsS0FBaEIsQ0FBc0JDO0FBRE4sQ0FBekI7O0FBSUFDLE9BQU9YLFlBQVAsR0FBc0JBLFlBQXRCIiwiZmlsZSI6IkRpc3BsYXlNb3ZpZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBEaXNwbGF5TW92aWUgPSAocHJvcHMpID0+IHtcbiAgaWYgKHByb3BzLm1vdmllLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiAoXG4gICAgICA8aDMgY2xhc3NOYW1lPVwibm9Nb3ZpZXNcIj5ObyBtb3ZpZXMgZm91bmQgOig8L2gzPlxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlzcGxheS1tb3ZpZVwiPlxuICAgICAgIHtwcm9wcy5tb3ZpZS5tYXAoKG1vdmllLCBpbmRleCkgPT4ge1xuICAgICAgICAgcmV0dXJuIDxNb3ZpZSBtb3ZpZT17bW92aWV9IGtleT17aW5kZXh9IC8+XG4gICB9KX1cbiAgIDwvZGl2PlxuICApXG4gIH0gXG59O1xuXG5EaXNwbGF5TW92aWUucHJvcFR5cGVzID0ge1xuICBtb3ZpZTogUmVhY3QuUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWRcbn07XG5cbndpbmRvdy5EaXNwbGF5TW92aWUgPSBEaXNwbGF5TW92aWU7XG4iXX0=