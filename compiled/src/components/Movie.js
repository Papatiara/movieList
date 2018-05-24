"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Movie = function (_React$Component) {
  _inherits(Movie, _React$Component);

  function Movie(props) {
    _classCallCheck(this, Movie);

    var _this = _possibleConstructorReturn(this, (Movie.__proto__ || Object.getPrototypeOf(Movie)).call(this, props));

    console.log(_this.props.status);
    _this.state = {
      // status: this.props.status,
    };
    return _this;
  }

  _createClass(Movie, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(
        "div",
        { className: "movie" },
        React.createElement(
          "button",
          { onClick: function onClick() {
              return _this2.props.funcMovie();
            } },
          " ",
          this.props.status,
          " "
        ),
        React.createElement(
          "span",
          { className: "title" },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01vdmllLmpzeCJdLCJuYW1lcyI6WyJNb3ZpZSIsInByb3BzIiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsInN0YXRlIiwiZnVuY01vdmllIiwibW92aWUiLCJ0aXRsZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxLOzs7QUFDSixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDhHQUNYQSxLQURXOztBQUVqQkMsWUFBUUMsR0FBUixDQUFZLE1BQUtGLEtBQUwsQ0FBV0csTUFBdkI7QUFDRSxVQUFLQyxLQUFMLEdBQWE7QUFDWDtBQURXLEtBQWI7QUFIZTtBQU1oQjs7Ozs2QkFDTTtBQUFBOztBQUNQLGFBQ0E7QUFBQTtBQUFBLFVBQUssV0FBVSxPQUFmO0FBQ0U7QUFBQTtBQUFBLFlBQVEsU0FBUztBQUFBLHFCQUFNLE9BQUtKLEtBQUwsQ0FBV0ssU0FBWCxFQUFOO0FBQUEsYUFBakI7QUFBQTtBQUFpRCxlQUFLTCxLQUFMLENBQVdHLE1BQTVEO0FBQUE7QUFBQSxTQURGO0FBRUs7QUFBQTtBQUFBLFlBQU0sV0FBVSxPQUFoQjtBQUF5QixlQUFLSCxLQUFMLENBQVdNLEtBQVgsQ0FBaUJDO0FBQTFDO0FBRkwsT0FEQTtBQU1EOzs7O0VBZmlCQyxNQUFNQyxTOztBQWtCMUJWLE1BQU1XLFNBQU4sR0FBa0I7QUFDaEJKLFNBQU9FLE1BQU1HLFNBQU4sQ0FBZ0JDLE1BQWhCLENBQXVCQztBQURkLENBQWxCO0FBR0FDLE9BQU9mLEtBQVAsR0FBZUEsS0FBZiIsImZpbGUiOiJNb3ZpZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIE1vdmllIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc29sZS5sb2codGhpcy5wcm9wcy5zdGF0dXMpXG4gICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAvLyBzdGF0dXM6IHRoaXMucHJvcHMuc3RhdHVzLFxuICAgICAgfVxuICAgIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAgKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibW92aWVcIj5cbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5mdW5jTW92aWUoKX0+IHt0aGlzLnByb3BzLnN0YXR1c30gPC9idXR0b24+XG4gICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPnt0aGlzLnByb3BzLm1vdmllLnRpdGxlfTwvc3Bhbj5cbiAgICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbiAgXG5Nb3ZpZS5wcm9wVHlwZXMgPSB7XG4gIG1vdmllOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbn07XG53aW5kb3cuTW92aWUgPSBNb3ZpZTsiXX0=