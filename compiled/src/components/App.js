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
      displayedMovies: window.movielist,
      store: [],
      movieStatus: 'To watch'
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
    key: 'watched',
    value: function watched() {
      console.log(this.state.movieStatus);
      if (this.state.movieStatus === 'To watch') {
        this.setState({ movieStatus: 'Watched' });
      } else {
        this.setState({ movieStatus: 'To watch' });
      }
      // if (this.state.movieStatus === 'Watched') {
      //     this.state.store.push(this.props.movie)
      //     console.log(this.state.store)
      // }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

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
          null,
          React.createElement(
            'button',
            null,
            ' Watched '
          ),
          React.createElement(
            'button',
            null,
            ' To watch '
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
              this.state.displayedMovies.map(function (movie, index) {
                return React.createElement(Movie, { movie: movie, key: index, funcMovie: _this2.watched.bind(_this2), status: _this2.state.movieStatus });
              })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsIm1vdmllcyIsIndpbmRvdyIsIm1vdmllbGlzdCIsImRpc3BsYXllZE1vdmllcyIsInN0b3JlIiwibW92aWVTdGF0dXMiLCJxdWVyeSIsInJlc3VsdCIsInNldFN0YXRlIiwicGF0dGVybiIsIlJlZ0V4cCIsImZpbHRlcmVkIiwiXyIsImZpbHRlciIsImRhdGEiLCJ0ZXN0IiwidGl0bGUiLCJvYmoiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsInNlYXJjaCIsImJpbmQiLCJtYXAiLCJtb3ZpZSIsImluZGV4Iiwid2F0Y2hlZCIsImFkZE1vdmllIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBQ0osZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBHQUNYQSxLQURXOztBQUdqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsY0FBU0MsT0FBT0MsU0FETDtBQUVYQyx1QkFBaUJGLE9BQU9DLFNBRmI7QUFHWEUsYUFBTyxFQUhJO0FBSVhDLG1CQUFhO0FBSkYsS0FBYjtBQUhpQjtBQVNsQjs7OzsyQkFFTUMsSyxFQUFPO0FBQ1osVUFBSUMsU0FBUyxFQUFiO0FBQ0EsVUFBSUQsVUFBVSxFQUFkLEVBQWtCO0FBQ2hCLGFBQUtFLFFBQUwsQ0FBYztBQUNkTCwyQkFBaUIsS0FBS0osS0FBTCxDQUFXQztBQURkLFNBQWQ7QUFHRCxPQUpELE1BSU87QUFDTCxZQUFJUyxVQUFVLElBQUlDLE1BQUosQ0FBV0osS0FBWCxFQUFrQixHQUFsQixDQUFkO0FBQ0EsWUFBSUssV0FBV0MsRUFBRUMsTUFBRixDQUFTLEtBQUtkLEtBQUwsQ0FBV0MsTUFBcEIsRUFBNEIsVUFBU2MsSUFBVCxFQUFlO0FBQ3hELGlCQUFPTCxRQUFRTSxJQUFSLENBQWFELEtBQUtFLEtBQWxCLENBQVA7QUFDRCxTQUZjLENBQWY7QUFHQSxhQUFLUixRQUFMLENBQWM7QUFDWkwsMkJBQWlCUTtBQURMLFNBQWQ7QUFHRDtBQUNKOzs7NkJBQ1VMLEssRUFBTztBQUNkLFVBQUlXLE1BQU0sRUFBVjtBQUNBQSxVQUFJRCxLQUFKLEdBQVlWLEtBQVo7QUFDQSxXQUFLUCxLQUFMLENBQVdDLE1BQVgsQ0FBa0JrQixJQUFsQixDQUF1QkQsR0FBdkI7QUFDQzs7OzhCQUVTO0FBQ1JFLGNBQVFDLEdBQVIsQ0FBWSxLQUFLckIsS0FBTCxDQUFXTSxXQUF2QjtBQUNBLFVBQUksS0FBS04sS0FBTCxDQUFXTSxXQUFYLEtBQTJCLFVBQS9CLEVBQTJDO0FBQ3pDLGFBQUtHLFFBQUwsQ0FBYyxFQUFDSCxhQUFhLFNBQWQsRUFBZDtBQUNELE9BRkQsTUFFTztBQUNMLGFBQUtHLFFBQUwsQ0FBYyxFQUFDSCxhQUFhLFVBQWQsRUFBZDtBQUNEO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDRDs7OzZCQUlNO0FBQUE7O0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBSSxXQUFVLElBQWQ7QUFBQTtBQUFBLFNBREY7QUFFRTtBQUFBO0FBQUEsWUFBSyxXQUFVLFFBQWY7QUFDRTtBQUFBO0FBQUEsY0FBSyxXQUFVLHNCQUFmO0FBQ0EsZ0NBQUMsV0FBRCxJQUFhLFFBQVEsS0FBS04sS0FBTCxDQUFXSSxlQUFoQyxFQUFpRCxZQUFZLEtBQUtrQixNQUFMLENBQVlDLElBQVosQ0FBaUIsSUFBakIsQ0FBN0Q7QUFEQTtBQURGLFNBRkY7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkEsU0FQQTtBQVdFO0FBQUE7QUFBQSxZQUFLLFdBQVUsS0FBZjtBQUNFO0FBQUE7QUFBQSxjQUFLLFdBQVUsVUFBZjtBQUNBO0FBQUE7QUFBQTtBQUNDLG1CQUFLdkIsS0FBTCxDQUFXSSxlQUFYLENBQTJCb0IsR0FBM0IsQ0FBK0IsVUFBQ0MsS0FBRCxFQUFRQyxLQUFSO0FBQUEsdUJBQzNCLG9CQUFDLEtBQUQsSUFBTyxPQUFPRCxLQUFkLEVBQXFCLEtBQUtDLEtBQTFCLEVBQWlDLFdBQVcsT0FBS0MsT0FBTCxDQUFhSixJQUFiLENBQWtCLE1BQWxCLENBQTVDLEVBQXFFLFFBQVEsT0FBS3ZCLEtBQUwsQ0FBV00sV0FBeEYsR0FEMkI7QUFBQSxlQUEvQjtBQUREO0FBREEsV0FERjtBQVFFO0FBQUE7QUFBQSxjQUFLLFdBQVUsS0FBZjtBQUNBO0FBQUE7QUFBQSxnQkFBSyxXQUFVLFVBQWY7QUFDQTtBQUFBO0FBQUE7QUFDRSxvQ0FBQyxHQUFELElBQU0sUUFBUSxLQUFLTixLQUFMLENBQVdJLGVBQXpCLEVBQTBDLFNBQVMsS0FBS3dCLFFBQUwsQ0FBY0wsSUFBZCxDQUFtQixJQUFuQixDQUFuRDtBQURGO0FBREE7QUFEQTtBQVJGO0FBWEYsT0FERjtBQThCRDs7OztFQWhGZU0sTUFBTUMsUzs7QUFtRnhCNUIsT0FBT0osR0FBUCxHQUFhQSxHQUFiIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIFxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBtb3ZpZXM6ICB3aW5kb3cubW92aWVsaXN0LFxuICAgICAgZGlzcGxheWVkTW92aWVzOiB3aW5kb3cubW92aWVsaXN0LFxuICAgICAgc3RvcmU6IFtdLFxuICAgICAgbW92aWVTdGF0dXM6ICdUbyB3YXRjaCdcbiAgICB9O1xuICB9XG5cbiAgc2VhcmNoKHF1ZXJ5KSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIGlmIChxdWVyeSA9PT0gJycpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZGlzcGxheWVkTW92aWVzOiB0aGlzLnN0YXRlLm1vdmllc1xuICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBwYXR0ZXJuID0gbmV3IFJlZ0V4cChxdWVyeSwgJ2knKTtcbiAgICAgIHZhciBmaWx0ZXJlZCA9IF8uZmlsdGVyKHRoaXMuc3RhdGUubW92aWVzICxmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QoZGF0YS50aXRsZSk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBkaXNwbGF5ZWRNb3ZpZXM6IGZpbHRlcmVkXG4gICAgICB9KTtcbiAgICB9IFxufVxuICBhZGRNb3ZpZShxdWVyeSkge1xuICAgIHZhciBvYmogPSB7fVxuICAgIG9iai50aXRsZSA9IHF1ZXJ5XG4gICAgdGhpcy5zdGF0ZS5tb3ZpZXMucHVzaChvYmopXG4gICAgfVxuXG4gICAgd2F0Y2hlZCgpIHtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUubW92aWVTdGF0dXMpXG4gICAgICBpZiAodGhpcy5zdGF0ZS5tb3ZpZVN0YXR1cyA9PT0gJ1RvIHdhdGNoJykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHttb3ZpZVN0YXR1czogJ1dhdGNoZWQnfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe21vdmllU3RhdHVzOiAnVG8gd2F0Y2gnfSlcbiAgICAgIH1cbiAgICAgIC8vIGlmICh0aGlzLnN0YXRlLm1vdmllU3RhdHVzID09PSAnV2F0Y2hlZCcpIHtcbiAgICAgIC8vICAgICB0aGlzLnN0YXRlLnN0b3JlLnB1c2godGhpcy5wcm9wcy5tb3ZpZSlcbiAgICAgIC8vICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnN0b3JlKVxuICAgICAgLy8gfVxuICAgIH1cblxuXG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaDFcIj4gTW92aWUgTGlzdDwvaDE+XG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBvZmZzZXQtbWQtM1wiPlxuICAgICAgICAgIDxTZWFyY2hNb3ZpZSBtb3ZpZXM9e3RoaXMuc3RhdGUuZGlzcGxheWVkTW92aWVzfSBzZWFyY2hGdW5jPXt0aGlzLnNlYXJjaC5iaW5kKHRoaXMpfS8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmF2PlxuICAgICAgPGRpdj5cbiAgICAgIDxidXR0b24+IFdhdGNoZWQgPC9idXR0b24+XG4gICAgICA8YnV0dG9uPiBUbyB3YXRjaCA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTdcIj5cbiAgICAgICAgICA8ZGl2PiBcbiAgICAgICAgICB7dGhpcy5zdGF0ZS5kaXNwbGF5ZWRNb3ZpZXMubWFwKChtb3ZpZSwgaW5kZXgpID0+XG4gICAgICAgICAgICAgICA8TW92aWUgbW92aWU9e21vdmllfSBrZXk9e2luZGV4fSBmdW5jTW92aWU9e3RoaXMud2F0Y2hlZC5iaW5kKHRoaXMpfSBzdGF0dXM9e3RoaXMuc3RhdGUubW92aWVTdGF0dXN9Lz4gKX1cbiAgICAgICAgICAgIHsvKiA8TW92aWUgbW92aWU9e3RoaXMuc3RhdGUuZGlzcGxheWVkTW92aWVzfSAvPiAqL31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtN1wiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8QWRkICBtb3ZpZXM9e3RoaXMuc3RhdGUuZGlzcGxheWVkTW92aWVzfSBhZGRGdW5jPXt0aGlzLmFkZE1vdmllLmJpbmQodGhpcyl9Lz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbndpbmRvdy5BcHAgPSBBcHA7XG4iXX0=