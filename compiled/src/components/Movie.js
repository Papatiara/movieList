'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Movie = function (_React$Component) {
  _inherits(Movie, _React$Component);

  function Movie(props) {
    _classCallCheck(this, Movie);

    var _this = _possibleConstructorReturn(this, (Movie.__proto__ || Object.getPrototypeOf(Movie)).call(this, props));

    _this.state = {
      movieStatus: { movie: 'Never watched' }
    };
    return _this;
  }

  _createClass(Movie, [{
    key: 'watched',
    value: function watched() {
      console.log(this.props.movie.title);
      if (this.state.movieStatus === 'watched') {
        this.setState({ movieStatus: 'Never watched' });
      } else {
        this.setState({ movieStatus: 'watched' });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React.createElement(
        'div',
        { className: 'movie' },
        React.createElement(
          'button',
          { onClick: function onClick() {
              return _this2.watched();
            } },
          this.state.movieStatus.movie || this.state.movieStatus,
          ' '
        ),
        React.createElement(
          'span',
          { className: 'title' },
          this.props.movie.title
        )
      );
    }
  }]);

  return Movie;
}(React.Component);

Movie.propTypes = {
  movie: React.PropTypes.object.isRequired
};
window.Movie = Movie;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01vdmllLmpzeCJdLCJuYW1lcyI6WyJNb3ZpZSIsInByb3BzIiwic3RhdGUiLCJtb3ZpZVN0YXR1cyIsIm1vdmllIiwiY29uc29sZSIsImxvZyIsInRpdGxlIiwic2V0U3RhdGUiLCJ3YXRjaGVkIiwiUmVhY3QiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEs7OztBQUNKLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsOEdBQ1hBLEtBRFc7O0FBRWYsVUFBS0MsS0FBTCxHQUFhO0FBQ1pDLG1CQUFhLEVBQUNDLE9BQU8sZUFBUjtBQURELEtBQWI7QUFGZTtBQUtsQjs7Ozs4QkFDUztBQUNSQyxjQUFRQyxHQUFSLENBQVksS0FBS0wsS0FBTCxDQUFXRyxLQUFYLENBQWlCRyxLQUE3QjtBQUNBLFVBQUksS0FBS0wsS0FBTCxDQUFXQyxXQUFYLEtBQTJCLFNBQS9CLEVBQTBDO0FBQ3hDLGFBQUtLLFFBQUwsQ0FBYyxFQUFDTCxhQUFhLGVBQWQsRUFBZDtBQUNELE9BRkQsTUFFTztBQUNMLGFBQUtLLFFBQUwsQ0FBYyxFQUFDTCxhQUFhLFNBQWQsRUFBZDtBQUNEO0FBQ0Y7Ozs2QkFFUTtBQUFBOztBQUNQLGFBQ0E7QUFBQTtBQUFBLFVBQUssV0FBVSxPQUFmO0FBQ0U7QUFBQTtBQUFBLFlBQVEsU0FBUztBQUFBLHFCQUFNLE9BQUtNLE9BQUwsRUFBTjtBQUFBLGFBQWpCO0FBQXdDLGVBQUtQLEtBQUwsQ0FBV0MsV0FBWCxDQUF1QkMsS0FBdkIsSUFBZ0MsS0FBS0YsS0FBTCxDQUFXQyxXQUFuRjtBQUFBO0FBQUEsU0FERjtBQUVLO0FBQUE7QUFBQSxZQUFNLFdBQVUsT0FBaEI7QUFBeUIsZUFBS0YsS0FBTCxDQUFXRyxLQUFYLENBQWlCRztBQUExQztBQUZMLE9BREE7QUFNRDs7OztFQXZCaUJHLE1BQU1DLFM7O0FBMEIxQlgsTUFBTVksU0FBTixHQUFrQjtBQUNoQlIsU0FBT00sTUFBTUcsU0FBTixDQUFnQkMsTUFBaEIsQ0FBdUJDO0FBRGQsQ0FBbEI7QUFHQUMsT0FBT2hCLEtBQVAsR0FBZUEsS0FBZiIsImZpbGUiOiJNb3ZpZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIE1vdmllIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgICB0aGlzLnN0YXRlID0geyBcbiAgICAgICBtb3ZpZVN0YXR1czoge21vdmllOiAnTmV2ZXIgd2F0Y2hlZCd9XG4gICAgICB9XG4gIH1cbiAgd2F0Y2hlZCgpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLm1vdmllLnRpdGxlKVxuICAgIGlmICh0aGlzLnN0YXRlLm1vdmllU3RhdHVzID09PSAnd2F0Y2hlZCcpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe21vdmllU3RhdHVzOiAnTmV2ZXIgd2F0Y2hlZCd9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHttb3ZpZVN0YXR1czogJ3dhdGNoZWQnfSlcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuICAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtb3ZpZVwiPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLndhdGNoZWQoKX0+e3RoaXMuc3RhdGUubW92aWVTdGF0dXMubW92aWUgfHwgdGhpcy5zdGF0ZS5tb3ZpZVN0YXR1c30gPC9idXR0b24+XG4gICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPnt0aGlzLnByb3BzLm1vdmllLnRpdGxlfTwvc3Bhbj5cbiAgICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4gIFxuTW92aWUucHJvcFR5cGVzID0ge1xuICBtb3ZpZTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG59O1xud2luZG93Lk1vdmllID0gTW92aWU7Il19