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
      console.log(actualState);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NlYXJjaE1vdmllLmpzeCJdLCJuYW1lcyI6WyJTZWFyY2hNb3ZpZSIsInByb3BzIiwic3RhdGUiLCJzZWFyY2hCb3giLCJ2YWx1ZSIsInNlYXJjaFZhbCIsInNldFN0YXRlIiwiYWN0dWFsU3RhdGUiLCJjb25zb2xlIiwibG9nIiwic2VhcmNoRnVuYyIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJidXR0b24iLCJlIiwiZ2V0UXVlcnkiLCJ0YXJnZXQiLCJSZWFjdCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIm1vdmllcyIsIlByb3BUeXBlcyIsImFycmF5IiwiaXNSZXF1aXJlZCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxXOzs7QUFDRix1QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBIQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsaUJBQVcsRUFBQ0MsT0FBTyxFQUFSO0FBREEsS0FBYjtBQUZpQjtBQUtsQjs7Ozs2QkFFUUMsUyxFQUFXO0FBQ2xCLFdBQUtDLFFBQUwsQ0FBYyxFQUFDSCxXQUFXRSxTQUFaLEVBQWQ7QUFDRDs7OzJCQUVNRSxXLEVBQWE7QUFDaEJDLGNBQVFDLEdBQVIsQ0FBWUYsV0FBWjtBQUNBLFdBQUtOLEtBQUwsQ0FBV1MsVUFBWCxDQUFzQkgsV0FBdEI7QUFDSDs7OzZCQUVRSSxLLEVBQU87QUFDZEEsWUFBTUMsY0FBTjtBQUNEOzs7NkJBRVE7QUFBQTs7QUFDUCxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsUUFBZjtBQUNBO0FBQUE7QUFBQSxZQUFRLFNBQVM7QUFBQSxxQkFBTSxPQUFLQyxNQUFMLENBQVksT0FBS1gsS0FBTCxDQUFXQyxTQUF2QixDQUFOO0FBQUEsYUFBakI7QUFBQTtBQUFBLFNBREE7QUFFQSx1Q0FBTyxXQUFVLFdBQWpCLEVBQTZCLE1BQUssTUFBbEMsRUFBeUMsYUFBWSxvQkFBckQsRUFBMEUsVUFBVSxrQkFBQ1csQ0FBRDtBQUFBLG1CQUFPLE9BQUtDLFFBQUwsQ0FBY0QsRUFBRUUsTUFBRixDQUFTWixLQUF2QixDQUFQO0FBQUEsV0FBcEY7QUFGQSxPQURGO0FBTUQ7Ozs7RUE1QnFCYSxNQUFNQyxTOztBQTZCN0I7O0FBRURsQixZQUFZbUIsU0FBWixHQUF3QjtBQUN0QkMsVUFBUUgsTUFBTUksU0FBTixDQUFnQkMsS0FBaEIsQ0FBc0JDO0FBRFIsQ0FBeEI7O0FBSUFDLE9BQU94QixXQUFQLEdBQXFCQSxXQUFyQiIsImZpbGUiOiJTZWFyY2hNb3ZpZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFNlYXJjaE1vdmllIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgc2VhcmNoQm94OiB7dmFsdWU6ICcnfVxuICAgICAgfVxuICAgIH1cbiAgXG4gICAgZ2V0UXVlcnkoc2VhcmNoVmFsKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtzZWFyY2hCb3g6IHNlYXJjaFZhbH0pXG4gICAgfVxuXG4gICAgYnV0dG9uKGFjdHVhbFN0YXRlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGFjdHVhbFN0YXRlKVxuICAgICAgICB0aGlzLnByb3BzLnNlYXJjaEZ1bmMoYWN0dWFsU3RhdGUpO1xuICAgIH07XG4gICAgXG4gICAgbm9TdWJtaXQoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICAgIFxuICAgIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoXCI+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5idXR0b24odGhpcy5zdGF0ZS5zZWFyY2hCb3gpfT4gR28gPC9idXR0b24+XG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJzZWFyY2hCb3hcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGZvciBhIG1vdmllXCIgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLmdldFF1ZXJ5KGUudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgfTtcbiAgXG4gIFNlYXJjaE1vdmllLnByb3BUeXBlcyA9IHtcbiAgICBtb3ZpZXM6IFJlYWN0LlByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkXG4gIH07XG4gIFxuICB3aW5kb3cuU2VhcmNoTW92aWUgPSBTZWFyY2hNb3ZpZTsiXX0=