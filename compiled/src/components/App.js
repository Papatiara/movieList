'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      movies: window.movielist,
      displayedMovies: []
    };
    return _this;
  }

  _createClass(App, [{
    key: 'search',
    value: function search(query) {
      var result = [];
      if (query === '') {
        this.setState({
          displayedMovies: this.state.movies
        });
      } else {
        var pattern = new RegExp(query, 'i');
        var filtered = _.filter(this.state.movies, function (data) {
          return pattern.test(data.title);
        });
        this.setState({
          displayedMovies: filtered
        });
      }
    }
  }, {
    key: 'addMovie',
    value: function addMovie(query) {
      var obj = {};
      obj.title = query;
      this.state.movies.push(obj);
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          { className: 'h1' },
          ' Movie List'
        ),
        React.createElement(
          'nav',
          { className: 'navbar' },
          React.createElement(
            'div',
            { className: 'col-md-6 offset-md-3' },
            React.createElement(SearchMovie, { movies: this.state.displayedMovies, searchFunc: this.search.bind(this) })
          )
        ),
        React.createElement(
          'div',
          { className: 'row' },
          React.createElement(
            'div',
            { className: 'col-md-7' },
            React.createElement(DisplayMovie, { movie: this.state.displayedMovies })
          ),
          React.createElement(
            'div',
            { className: 'row' },
            React.createElement(
              'div',
              { className: 'col-md-7' },
              React.createElement(Add, { movies: this.state.displayedMovies, addFunc: this.addMovie.bind(this) })
            )
          )
        )
      );
    }
  }]);

  return App;
}(React.Component);

window.App = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsIm1vdmllcyIsIndpbmRvdyIsIm1vdmllbGlzdCIsImRpc3BsYXllZE1vdmllcyIsInF1ZXJ5IiwicmVzdWx0Iiwic2V0U3RhdGUiLCJwYXR0ZXJuIiwiUmVnRXhwIiwiZmlsdGVyZWQiLCJfIiwiZmlsdGVyIiwiZGF0YSIsInRlc3QiLCJ0aXRsZSIsIm9iaiIsInB1c2giLCJzZWFyY2giLCJiaW5kIiwiYWRkTW92aWUiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFDSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEdBQ1hBLEtBRFc7O0FBR2pCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxjQUFTQyxPQUFPQyxTQURMO0FBRVhDLHVCQUFpQjtBQUZOLEtBQWI7QUFIaUI7QUFPbEI7Ozs7MkJBRU1DLEssRUFBTztBQUNaLFVBQUlDLFNBQVMsRUFBYjtBQUNBLFVBQUlELFVBQVUsRUFBZCxFQUFrQjtBQUNoQixhQUFLRSxRQUFMLENBQWM7QUFDZEgsMkJBQWlCLEtBQUtKLEtBQUwsQ0FBV0M7QUFEZCxTQUFkO0FBR0QsT0FKRCxNQUlPO0FBQ0wsWUFBSU8sVUFBVSxJQUFJQyxNQUFKLENBQVdKLEtBQVgsRUFBa0IsR0FBbEIsQ0FBZDtBQUNBLFlBQUlLLFdBQVdDLEVBQUVDLE1BQUYsQ0FBUyxLQUFLWixLQUFMLENBQVdDLE1BQXBCLEVBQTRCLFVBQVNZLElBQVQsRUFBZTtBQUN4RCxpQkFBT0wsUUFBUU0sSUFBUixDQUFhRCxLQUFLRSxLQUFsQixDQUFQO0FBQ0QsU0FGYyxDQUFmO0FBR0EsYUFBS1IsUUFBTCxDQUFjO0FBQ1pILDJCQUFpQk07QUFETCxTQUFkO0FBR0Q7QUFDSjs7OzZCQUNVTCxLLEVBQU87QUFDZCxVQUFJVyxNQUFNLEVBQVY7QUFDQUEsVUFBSUQsS0FBSixHQUFZVixLQUFaO0FBQ0YsV0FBS0wsS0FBTCxDQUFXQyxNQUFYLENBQWtCZ0IsSUFBbEIsQ0FBdUJELEdBQXZCO0FBQ0M7Ozs2QkFFUTtBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQUksV0FBVSxJQUFkO0FBQUE7QUFBQSxTQURGO0FBRUU7QUFBQTtBQUFBLFlBQUssV0FBVSxRQUFmO0FBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSxzQkFBZjtBQUNBLGdDQUFDLFdBQUQsSUFBYSxRQUFRLEtBQUtoQixLQUFMLENBQVdJLGVBQWhDLEVBQWlELFlBQVksS0FBS2MsTUFBTCxDQUFZQyxJQUFaLENBQWlCLElBQWpCLENBQTdEO0FBREE7QUFERixTQUZGO0FBT0U7QUFBQTtBQUFBLFlBQUssV0FBVSxLQUFmO0FBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSxVQUFmO0FBQ0UsZ0NBQUMsWUFBRCxJQUFjLE9BQU8sS0FBS25CLEtBQUwsQ0FBV0ksZUFBaEM7QUFERixXQURGO0FBSUU7QUFBQTtBQUFBLGNBQUssV0FBVSxLQUFmO0FBQ0E7QUFBQTtBQUFBLGdCQUFLLFdBQVUsVUFBZjtBQUNFLGtDQUFDLEdBQUQsSUFBSyxRQUFRLEtBQUtKLEtBQUwsQ0FBV0ksZUFBeEIsRUFBeUMsU0FBUyxLQUFLZ0IsUUFBTCxDQUFjRCxJQUFkLENBQW1CLElBQW5CLENBQWxEO0FBREY7QUFEQTtBQUpGO0FBUEYsT0FERjtBQW9CRDs7OztFQXJEZUUsTUFBTUMsUzs7QUF3RHhCcEIsT0FBT0osR0FBUCxHQUFhQSxHQUFiIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIFxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBtb3ZpZXM6ICB3aW5kb3cubW92aWVsaXN0LFxuICAgICAgZGlzcGxheWVkTW92aWVzOiBbXSxcbiAgICB9O1xuICB9XG5cbiAgc2VhcmNoKHF1ZXJ5KSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIGlmIChxdWVyeSA9PT0gJycpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZGlzcGxheWVkTW92aWVzOiB0aGlzLnN0YXRlLm1vdmllc1xuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHBhdHRlcm4gPSBuZXcgUmVnRXhwKHF1ZXJ5LCAnaScpO1xuICAgICAgdmFyIGZpbHRlcmVkID0gXy5maWx0ZXIodGhpcy5zdGF0ZS5tb3ZpZXMgLGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIHBhdHRlcm4udGVzdChkYXRhLnRpdGxlKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGRpc3BsYXllZE1vdmllczogZmlsdGVyZWRcbiAgICAgIH0pO1xuICAgIH1cbn1cbiAgYWRkTW92aWUocXVlcnkpIHtcbiAgICB2YXIgb2JqID0ge31cbiAgICBvYmoudGl0bGUgPSBxdWVyeVxuICB0aGlzLnN0YXRlLm1vdmllcy5wdXNoKG9iailcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cImgxXCI+IE1vdmllIExpc3Q8L2gxPlxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgb2Zmc2V0LW1kLTNcIj5cbiAgICAgICAgICA8U2VhcmNoTW92aWUgbW92aWVzPXt0aGlzLnN0YXRlLmRpc3BsYXllZE1vdmllc30gc2VhcmNoRnVuYz17dGhpcy5zZWFyY2guYmluZCh0aGlzKX0vPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25hdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC03XCI+XG4gICAgICAgICAgICA8RGlzcGxheU1vdmllIG1vdmllPXt0aGlzLnN0YXRlLmRpc3BsYXllZE1vdmllc30gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTdcIj5cbiAgICAgICAgICAgIDxBZGQgbW92aWVzPXt0aGlzLnN0YXRlLmRpc3BsYXllZE1vdmllc30gYWRkRnVuYz17dGhpcy5hZGRNb3ZpZS5iaW5kKHRoaXMpfS8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxud2luZG93LkFwcCA9IEFwcDtcbiJdfQ==