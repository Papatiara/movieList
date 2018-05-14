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
          { onClick: function onClick() {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NlYXJjaE1vdmllLmpzeCJdLCJuYW1lcyI6WyJTZWFyY2hNb3ZpZSIsInByb3BzIiwic3RhdGUiLCJzZWFyY2hCb3giLCJ2YWx1ZSIsInNlYXJjaFZhbCIsInNldFN0YXRlIiwiYWN0dWFsU3RhdGUiLCJzZWFyY2hGdW5jIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImJ1dHRvbiIsImUiLCJnZXRRdWVyeSIsInRhcmdldCIsIlJlYWN0IiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwibW92aWVzIiwiUHJvcFR5cGVzIiwiYXJyYXkiLCJpc1JlcXVpcmVkIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLFc7OztBQUNGLHVCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEhBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxpQkFBVyxFQUFDQyxPQUFPLEVBQVI7QUFEQSxLQUFiO0FBRmlCO0FBS2xCOzs7OzZCQUVRQyxTLEVBQVc7QUFDbEIsV0FBS0MsUUFBTCxDQUFjLEVBQUNILFdBQVdFLFNBQVosRUFBZDtBQUNEOzs7MkJBRU1FLFcsRUFBYTtBQUNoQixXQUFLTixLQUFMLENBQVdPLFVBQVgsQ0FBc0JELFdBQXRCO0FBQ0g7Ozs2QkFFUUUsSyxFQUFPO0FBQ2RBLFlBQU1DLGNBQU47QUFDRDs7OzZCQUVRO0FBQUE7O0FBQ1AsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLFFBQWY7QUFDQTtBQUFBO0FBQUEsWUFBUSxTQUFTO0FBQUEscUJBQU0sT0FBS0MsTUFBTCxDQUFZLE9BQUtULEtBQUwsQ0FBV0MsU0FBdkIsQ0FBTjtBQUFBLGFBQWpCO0FBQUE7QUFBQSxTQURBO0FBRUEsdUNBQU8sV0FBVSxXQUFqQixFQUE2QixNQUFLLE1BQWxDLEVBQXlDLGFBQVksb0JBQXJELEVBQTBFLFVBQVUsa0JBQUNTLENBQUQ7QUFBQSxtQkFBTyxPQUFLQyxRQUFMLENBQWNELEVBQUVFLE1BQUYsQ0FBU1YsS0FBdkIsQ0FBUDtBQUFBLFdBQXBGO0FBRkEsT0FERjtBQU1EOzs7O0VBM0JxQlcsTUFBTUMsUzs7QUE0QjdCOztBQUVEaEIsWUFBWWlCLFNBQVosR0FBd0I7QUFDdEJDLFVBQVFILE1BQU1JLFNBQU4sQ0FBZ0JDLEtBQWhCLENBQXNCQztBQURSLENBQXhCOztBQUlBQyxPQUFPdEIsV0FBUCxHQUFxQkEsV0FBckIiLCJmaWxlIjoiU2VhcmNoTW92aWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBTZWFyY2hNb3ZpZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIHNlYXJjaEJveDoge3ZhbHVlOiAnJ31cbiAgICAgIH1cbiAgICB9XG4gIFxuICAgIGdldFF1ZXJ5KHNlYXJjaFZhbCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VhcmNoQm94OiBzZWFyY2hWYWx9KVxuICAgIH1cblxuICAgIGJ1dHRvbihhY3R1YWxTdGF0ZSkge1xuICAgICAgICB0aGlzLnByb3BzLnNlYXJjaEZ1bmMoYWN0dWFsU3RhdGUpO1xuICAgIH07XG4gICAgXG4gICAgbm9TdWJtaXQoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2hcIj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLmJ1dHRvbih0aGlzLnN0YXRlLnNlYXJjaEJveCl9PiBHbyA8L2J1dHRvbj5cbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInNlYXJjaEJveFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2ggZm9yIGEgbW92aWVcIiBvbkNoYW5nZT17KGUpID0+IHRoaXMuZ2V0UXVlcnkoZS50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICB9O1xuICBcbiAgU2VhcmNoTW92aWUucHJvcFR5cGVzID0ge1xuICAgIG1vdmllczogUmVhY3QuUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWRcbiAgfTtcbiAgXG4gIHdpbmRvdy5TZWFyY2hNb3ZpZSA9IFNlYXJjaE1vdmllOyJdfQ==