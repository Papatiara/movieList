"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchMovie = function (_React$Component) {
  _inherits(SearchMovie, _React$Component);

  function SearchMovie(props) {
    _classCallCheck(this, SearchMovie);

    var _this = _possibleConstructorReturn(this, (SearchMovie.__proto__ || Object.getPrototypeOf(SearchMovie)).call(this, props));

    _this.state = {
      searchBox: { value: '' }
    };
    return _this;
  }

  _createClass(SearchMovie, [{
    key: "getQuery",
    value: function getQuery(searchVal) {
      this.setState({ searchBox: searchVal });
      this.props.searchFunc(searchVal);
    }
  }, {
    key: "button",
    value: function button(actualState) {
      this.props.searchFunc(actualState);
    }
  }, {
    key: "noSubmit",
    value: function noSubmit(event) {
      event.preventDefault();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(
        "div",
        { className: "search" },
        React.createElement(
          "button",
          { onChange: function onChange() {
              return _this2.button(_this2.state.searchBox);
            } },
          " Go "
        ),
        React.createElement("input", { className: "searchBox", type: "text", placeholder: "Search for a movie", onChange: function onChange(e) {
            return _this2.getQuery(e.target.value);
          } })
      );
    }
  }]);

  return SearchMovie;
}(React.Component);

;
SearchMovie.propTypes = {
  movies: React.PropTypes.array.isRequired
};

window.SearchMovie = SearchMovie;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NlYXJjaE1vdmllLmpzeCJdLCJuYW1lcyI6WyJTZWFyY2hNb3ZpZSIsInByb3BzIiwic3RhdGUiLCJzZWFyY2hCb3giLCJ2YWx1ZSIsInNlYXJjaFZhbCIsInNldFN0YXRlIiwic2VhcmNoRnVuYyIsImFjdHVhbFN0YXRlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImJ1dHRvbiIsImUiLCJnZXRRdWVyeSIsInRhcmdldCIsIlJlYWN0IiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwibW92aWVzIiwiUHJvcFR5cGVzIiwiYXJyYXkiLCJpc1JlcXVpcmVkIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLFc7OztBQUNKLHVCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEhBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxpQkFBVyxFQUFDQyxPQUFPLEVBQVI7QUFEQSxLQUFiO0FBRmlCO0FBS2xCOzs7OzZCQUVVQyxTLEVBQVc7QUFDbEIsV0FBS0MsUUFBTCxDQUFjLEVBQUNILFdBQVdFLFNBQVosRUFBZDtBQUNBLFdBQUtKLEtBQUwsQ0FBV00sVUFBWCxDQUFzQkYsU0FBdEI7QUFDRDs7OzJCQUVNRyxXLEVBQWE7QUFDaEIsV0FBS1AsS0FBTCxDQUFXTSxVQUFYLENBQXNCQyxXQUF0QjtBQUNIOzs7NkJBRVFDLEssRUFBTztBQUNkQSxZQUFNQyxjQUFOO0FBQ0Q7Ozs2QkFFUTtBQUFBOztBQUNQLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxRQUFmO0FBQ0E7QUFBQTtBQUFBLFlBQVEsVUFBVTtBQUFBLHFCQUFNLE9BQUtDLE1BQUwsQ0FBWSxPQUFLVCxLQUFMLENBQVdDLFNBQXZCLENBQU47QUFBQSxhQUFsQjtBQUFBO0FBQUEsU0FEQTtBQUVBLHVDQUFPLFdBQVUsV0FBakIsRUFBNkIsTUFBSyxNQUFsQyxFQUF5QyxhQUFZLG9CQUFyRCxFQUEwRSxVQUFVLGtCQUFDUyxDQUFEO0FBQUEsbUJBQU8sT0FBS0MsUUFBTCxDQUFjRCxFQUFFRSxNQUFGLENBQVNWLEtBQXZCLENBQVA7QUFBQSxXQUFwRjtBQUZBLE9BREY7QUFNRDs7OztFQTVCcUJXLE1BQU1DLFM7O0FBNkI3QjtBQUNEaEIsWUFBWWlCLFNBQVosR0FBd0I7QUFDdEJDLFVBQVFILE1BQU1JLFNBQU4sQ0FBZ0JDLEtBQWhCLENBQXNCQztBQURSLENBQXhCOztBQUlBQyxPQUFPdEIsV0FBUCxHQUFxQkEsV0FBckIiLCJmaWxlIjoiU2VhcmNoTW92aWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBTZWFyY2hNb3ZpZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzZWFyY2hCb3g6IHt2YWx1ZTogJyd9XG4gICAgfVxuICB9XG4gIFxuICAgIGdldFF1ZXJ5KHNlYXJjaFZhbCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VhcmNoQm94OiBzZWFyY2hWYWx9KVxuICAgICAgdGhpcy5wcm9wcy5zZWFyY2hGdW5jKHNlYXJjaFZhbCk7XG4gICAgfVxuXG4gICAgYnV0dG9uKGFjdHVhbFN0YXRlKSB7XG4gICAgICAgIHRoaXMucHJvcHMuc2VhcmNoRnVuYyhhY3R1YWxTdGF0ZSk7XG4gICAgfTtcbiAgICBcbiAgICBub1N1Ym1pdChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaFwiPlxuICAgICAgICA8YnV0dG9uIG9uQ2hhbmdlPXsoKSA9PiB0aGlzLmJ1dHRvbih0aGlzLnN0YXRlLnNlYXJjaEJveCl9PiBHbyA8L2J1dHRvbj5cbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInNlYXJjaEJveFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2ggZm9yIGEgbW92aWVcIiBvbkNoYW5nZT17KGUpID0+IHRoaXMuZ2V0UXVlcnkoZS50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICB9O1xuICBTZWFyY2hNb3ZpZS5wcm9wVHlwZXMgPSB7XG4gICAgbW92aWVzOiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZFxuICB9O1xuICBcbiAgd2luZG93LlNlYXJjaE1vdmllID0gU2VhcmNoTW92aWU7Il19