"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DisplayMovie = function (_React$Component) {
  _inherits(DisplayMovie, _React$Component);

  function DisplayMovie(props) {
    _classCallCheck(this, DisplayMovie);

    var _this = _possibleConstructorReturn(this, (DisplayMovie.__proto__ || Object.getPrototypeOf(DisplayMovie)).call(this, props));

    _this.state = {
      foundedMovie: { movie: 'No movies found' }
    };
    return _this;
  }

  _createClass(DisplayMovie, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement("h3", { className: "noMovies" }),
        this.props.movie.map(function (movie, index) {
          return React.createElement(Movie, { movie: movie, key: index });
        })
      );
    }
  }]);

  return DisplayMovie;
}(React.Component);

DisplayMovie.propTypes = {
  movie: React.PropTypes.array.isRequired
};

window.DisplayMovie = DisplayMovie;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0Rpc3BsYXlNb3ZpZS5qc3giXSwibmFtZXMiOlsiRGlzcGxheU1vdmllIiwicHJvcHMiLCJzdGF0ZSIsImZvdW5kZWRNb3ZpZSIsIm1vdmllIiwibWFwIiwiaW5kZXgiLCJSZWFjdCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFycmF5IiwiaXNSZXF1aXJlZCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxZOzs7QUFDSix3QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDRIQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsb0JBQWMsRUFBQ0MsT0FBTyxpQkFBUjtBQURILEtBQWI7QUFGaUI7QUFLbEI7Ozs7NkJBRU07QUFDUCxhQUNFO0FBQUE7QUFBQTtBQUNBLG9DQUFJLFdBQVUsVUFBZCxHQURBO0FBRUMsYUFBS0gsS0FBTCxDQUFXRyxLQUFYLENBQWlCQyxHQUFqQixDQUFxQixVQUFDRCxLQUFELEVBQVFFLEtBQVI7QUFBQSxpQkFDdEIsb0JBQUMsS0FBRCxJQUFPLE9BQU9GLEtBQWQsRUFBcUIsS0FBS0UsS0FBMUIsR0FEc0I7QUFBQSxTQUFyQjtBQUZELE9BREY7QUFPRDs7OztFQWhCMEJDLE1BQU1DLFM7O0FBbUJqQ1IsYUFBYVMsU0FBYixHQUF5QjtBQUN2QkwsU0FBT0csTUFBTUcsU0FBTixDQUFnQkMsS0FBaEIsQ0FBc0JDO0FBRE4sQ0FBekI7O0FBSUFDLE9BQU9iLFlBQVAsR0FBc0JBLFlBQXRCIiwiZmlsZSI6IkRpc3BsYXlNb3ZpZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIERpc3BsYXlNb3ZpZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBmb3VuZGVkTW92aWU6IHttb3ZpZTogJ05vIG1vdmllcyBmb3VuZCd9XG4gICAgfVxuICB9XG5cbnJlbmRlcigpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgIDxoMyBjbGFzc05hbWU9XCJub01vdmllc1wiPjwvaDM+IFxuICAgIHt0aGlzLnByb3BzLm1vdmllLm1hcCgobW92aWUsIGluZGV4KSA9PlxuICAgIDxNb3ZpZSBtb3ZpZT17bW92aWV9IGtleT17aW5kZXh9IC8+ICl9XG4gICAgPC9kaXY+XG4gIClcbn1cbn1cblxuRGlzcGxheU1vdmllLnByb3BUeXBlcyA9IHtcbiAgbW92aWU6IFJlYWN0LlByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkXG59O1xuXG53aW5kb3cuRGlzcGxheU1vdmllID0gRGlzcGxheU1vdmllO1xuIl19