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
      }if (this.state.displayedMovies.length === 0) {
        this.setState({
          displayedMovies: [{ title: 'No Movies Found =(' }]
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
          'button',
          null,
          ' Watched '
        ),
        React.createElement(
          'button',
          null,
          ' Never Watched '
        ),
        React.createElement(
          'div',
          { className: 'row' },
          React.createElement(
            'div',
            { className: 'col-md-7' },
            React.createElement(
              'div',
              null,
              React.createElement(DisplayMovie, { movie: this.state.displayedMovies })
            )
          ),
          React.createElement(
            'div',
            { className: 'row' },
            React.createElement(
              'div',
              { className: 'col-md-7' },
              React.createElement(
                'div',
                null,
                React.createElement(Add, { movies: this.state.displayedMovies, addFunc: this.addMovie.bind(this) })
              )
            )
          )
        )
      );
    }
  }]);

  return App;
}(React.Component);

window.App = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsIm1vdmllcyIsIndpbmRvdyIsIm1vdmllbGlzdCIsImRpc3BsYXllZE1vdmllcyIsInF1ZXJ5IiwicmVzdWx0Iiwic2V0U3RhdGUiLCJwYXR0ZXJuIiwiUmVnRXhwIiwiZmlsdGVyZWQiLCJfIiwiZmlsdGVyIiwiZGF0YSIsInRlc3QiLCJ0aXRsZSIsImxlbmd0aCIsIm9iaiIsInB1c2giLCJzZWFyY2giLCJiaW5kIiwiYWRkTW92aWUiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFDSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEdBQ1hBLEtBRFc7O0FBR2pCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxjQUFTQyxPQUFPQyxTQURMO0FBRVhDLHVCQUFpQjtBQUZOLEtBQWI7QUFIaUI7QUFPbEI7Ozs7MkJBRU1DLEssRUFBTztBQUNaLFVBQUlDLFNBQVMsRUFBYjtBQUNBLFVBQUlELFVBQVUsRUFBZCxFQUFrQjtBQUNoQixhQUFLRSxRQUFMLENBQWM7QUFDZEgsMkJBQWlCLEtBQUtKLEtBQUwsQ0FBV0M7QUFEZCxTQUFkO0FBR0QsT0FKRCxNQUlPO0FBQ0wsWUFBSU8sVUFBVSxJQUFJQyxNQUFKLENBQVdKLEtBQVgsRUFBa0IsR0FBbEIsQ0FBZDtBQUNBLFlBQUlLLFdBQVdDLEVBQUVDLE1BQUYsQ0FBUyxLQUFLWixLQUFMLENBQVdDLE1BQXBCLEVBQTRCLFVBQVNZLElBQVQsRUFBZTtBQUN4RCxpQkFBT0wsUUFBUU0sSUFBUixDQUFhRCxLQUFLRSxLQUFsQixDQUFQO0FBQ0QsU0FGYyxDQUFmO0FBR0EsYUFBS1IsUUFBTCxDQUFjO0FBQ1pILDJCQUFpQk07QUFETCxTQUFkO0FBR0QsT0FBQyxJQUFJLEtBQUtWLEtBQUwsQ0FBV0ksZUFBWCxDQUEyQlksTUFBM0IsS0FBc0MsQ0FBMUMsRUFBNkM7QUFDN0MsYUFBS1QsUUFBTCxDQUFjO0FBQ1pILDJCQUFpQixDQUFDLEVBQUNXLE9BQU0sb0JBQVAsRUFBRDtBQURMLFNBQWQ7QUFHRDtBQUNKOzs7NkJBQ1VWLEssRUFBTztBQUNkLFVBQUlZLE1BQU0sRUFBVjtBQUNBQSxVQUFJRixLQUFKLEdBQVlWLEtBQVo7QUFDQSxXQUFLTCxLQUFMLENBQVdDLE1BQVgsQ0FBa0JpQixJQUFsQixDQUF1QkQsR0FBdkI7QUFDQzs7OzZCQUNNO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBSSxXQUFVLElBQWQ7QUFBQTtBQUFBLFNBREY7QUFFRTtBQUFBO0FBQUEsWUFBSyxXQUFVLFFBQWY7QUFDRTtBQUFBO0FBQUEsY0FBSyxXQUFVLHNCQUFmO0FBQ0EsZ0NBQUMsV0FBRCxJQUFhLFFBQVEsS0FBS2pCLEtBQUwsQ0FBV0ksZUFBaEMsRUFBaUQsWUFBWSxLQUFLZSxNQUFMLENBQVlDLElBQVosQ0FBaUIsSUFBakIsQ0FBN0Q7QUFEQTtBQURGLFNBRkY7QUFPRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBUEY7QUFRRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBUkY7QUFTRTtBQUFBO0FBQUEsWUFBSyxXQUFVLEtBQWY7QUFDRTtBQUFBO0FBQUEsY0FBSyxXQUFVLFVBQWY7QUFDQTtBQUFBO0FBQUE7QUFDRSxrQ0FBQyxZQUFELElBQWMsT0FBTyxLQUFLcEIsS0FBTCxDQUFXSSxlQUFoQztBQURGO0FBREEsV0FERjtBQU1FO0FBQUE7QUFBQSxjQUFLLFdBQVUsS0FBZjtBQUNBO0FBQUE7QUFBQSxnQkFBSyxXQUFVLFVBQWY7QUFDQTtBQUFBO0FBQUE7QUFDRSxvQ0FBQyxHQUFELElBQU0sUUFBUSxLQUFLSixLQUFMLENBQVdJLGVBQXpCLEVBQTBDLFNBQVMsS0FBS2lCLFFBQUwsQ0FBY0QsSUFBZCxDQUFtQixJQUFuQixDQUFuRDtBQURGO0FBREE7QUFEQTtBQU5GO0FBVEYsT0FERjtBQTBCRDs7OztFQTlEZUUsTUFBTUMsUzs7QUFpRXhCckIsT0FBT0osR0FBUCxHQUFhQSxHQUFiIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIFxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBtb3ZpZXM6ICB3aW5kb3cubW92aWVsaXN0LFxuICAgICAgZGlzcGxheWVkTW92aWVzOiBbXSxcbiAgICB9O1xuICB9XG5cbiAgc2VhcmNoKHF1ZXJ5KSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIGlmIChxdWVyeSA9PT0gJycpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZGlzcGxheWVkTW92aWVzOiB0aGlzLnN0YXRlLm1vdmllc1xuICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBwYXR0ZXJuID0gbmV3IFJlZ0V4cChxdWVyeSwgJ2knKTtcbiAgICAgIHZhciBmaWx0ZXJlZCA9IF8uZmlsdGVyKHRoaXMuc3RhdGUubW92aWVzICxmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QoZGF0YS50aXRsZSk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBkaXNwbGF5ZWRNb3ZpZXM6IGZpbHRlcmVkXG4gICAgICB9KTtcbiAgICB9IGlmICh0aGlzLnN0YXRlLmRpc3BsYXllZE1vdmllcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBkaXNwbGF5ZWRNb3ZpZXM6IFt7dGl0bGU6J05vIE1vdmllcyBGb3VuZCA9KCd9XSxcbiAgICAgIH0pO1xuICAgIH1cbn1cbiAgYWRkTW92aWUocXVlcnkpIHtcbiAgICB2YXIgb2JqID0ge31cbiAgICBvYmoudGl0bGUgPSBxdWVyeVxuICAgIHRoaXMuc3RhdGUubW92aWVzLnB1c2gob2JqKVxuICAgIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaDFcIj4gTW92aWUgTGlzdDwvaDE+XG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBvZmZzZXQtbWQtM1wiPlxuICAgICAgICAgIDxTZWFyY2hNb3ZpZSBtb3ZpZXM9e3RoaXMuc3RhdGUuZGlzcGxheWVkTW92aWVzfSBzZWFyY2hGdW5jPXt0aGlzLnNlYXJjaC5iaW5kKHRoaXMpfS8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmF2PlxuICAgICAgICA8YnV0dG9uPiBXYXRjaGVkIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uPiBOZXZlciBXYXRjaGVkIDwvYnV0dG9uPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTdcIj5cbiAgICAgICAgICA8ZGl2PiBcbiAgICAgICAgICAgIDxEaXNwbGF5TW92aWUgbW92aWU9e3RoaXMuc3RhdGUuZGlzcGxheWVkTW92aWVzfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC03XCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxBZGQgIG1vdmllcz17dGhpcy5zdGF0ZS5kaXNwbGF5ZWRNb3ZpZXN9IGFkZEZ1bmM9e3RoaXMuYWRkTW92aWUuYmluZCh0aGlzKX0vPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxud2luZG93LkFwcCA9IEFwcDtcbiJdfQ==