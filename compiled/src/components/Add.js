"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Add = function (_React$Component) {
  _inherits(Add, _React$Component);

  function Add(props) {
    _classCallCheck(this, Add);

    var _this = _possibleConstructorReturn(this, (Add.__proto__ || Object.getPrototypeOf(Add)).call(this, props));

    _this.state = {
      addValue: { value: '' }
    };
    return _this;
  }

  _createClass(Add, [{
    key: "getMovie",
    value: function getMovie(valueAdded) {
      this.setState({ addValue: valueAdded });
    }
  }, {
    key: "addButton",
    value: function addButton(actualState) {
      this.props.addFunc(actualState);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(
        "div",
        { className: "add" },
        React.createElement(
          "button",
          { onClick: function onClick() {
              return _this2.addButton(_this2.state.addValue);
            } },
          "Add"
        ),
        React.createElement("input", { className: "searchBox", type: "text", placeholder: "Add a Movie", onChange: function onChange(e) {
            return _this2.getMovie(e.target.value);
          } })
      );
    }
  }]);

  return Add;
}(React.Component);

Add.propTypes = {
  movies: React.PropTypes.array.isRequired };

window.Add = Add;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FkZC5qc3giXSwibmFtZXMiOlsiQWRkIiwicHJvcHMiLCJzdGF0ZSIsImFkZFZhbHVlIiwidmFsdWUiLCJ2YWx1ZUFkZGVkIiwic2V0U3RhdGUiLCJhY3R1YWxTdGF0ZSIsImFkZEZ1bmMiLCJhZGRCdXR0b24iLCJlIiwiZ2V0TW92aWUiLCJ0YXJnZXQiLCJSZWFjdCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIm1vdmllcyIsIlByb3BUeXBlcyIsImFycmF5IiwiaXNSZXF1aXJlZCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFDSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEdBQ1hBLEtBRFc7O0FBRW5CLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxnQkFBVSxFQUFDQyxPQUFPLEVBQVI7QUFEQyxLQUFiO0FBRm1CO0FBS3BCOzs7OzZCQUVRQyxVLEVBQVk7QUFDbkIsV0FBS0MsUUFBTCxDQUFjLEVBQUNILFVBQVVFLFVBQVgsRUFBZDtBQUNEOzs7OEJBRVNFLFcsRUFBYTtBQUNyQixXQUFLTixLQUFMLENBQVdPLE9BQVgsQ0FBbUJELFdBQW5CO0FBQ0Q7Ozs2QkFFUTtBQUFBOztBQUNQLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxLQUFmO0FBQ0U7QUFBQTtBQUFBLFlBQVEsU0FBUztBQUFBLHFCQUFNLE9BQUtFLFNBQUwsQ0FBZSxPQUFLUCxLQUFMLENBQVdDLFFBQTFCLENBQU47QUFBQSxhQUFqQjtBQUFBO0FBQUEsU0FERjtBQUVFLHVDQUFPLFdBQVUsV0FBakIsRUFBNkIsTUFBSyxNQUFsQyxFQUF5QyxhQUFZLGFBQXJELEVBQW1FLFVBQVUsa0JBQUNPLENBQUQ7QUFBQSxtQkFBTyxPQUFLQyxRQUFMLENBQWNELEVBQUVFLE1BQUYsQ0FBU1IsS0FBdkIsQ0FBUDtBQUFBLFdBQTdFO0FBRkYsT0FERjtBQU1BOzs7O0VBdkJnQlMsTUFBTUMsUzs7QUEwQnhCZCxJQUFJZSxTQUFKLEdBQWdCO0FBQ2RDLFVBQVFILE1BQU1JLFNBQU4sQ0FBZ0JDLEtBQWhCLENBQXNCQyxVQURoQixFQUFoQjs7QUFHQUMsT0FBT3BCLEdBQVAsR0FBYUEsR0FBYiIsImZpbGUiOiJBZGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBZGQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgdGhpcy5zdGF0ZSA9IHtcbiAgICBhZGRWYWx1ZToge3ZhbHVlOiAnJ30sXG4gIH1cbn1cblxuZ2V0TW92aWUodmFsdWVBZGRlZCkge1xuICB0aGlzLnNldFN0YXRlKHthZGRWYWx1ZTogdmFsdWVBZGRlZH0pXG59XG5cbmFkZEJ1dHRvbihhY3R1YWxTdGF0ZSkge1xuICB0aGlzLnByb3BzLmFkZEZ1bmMoYWN0dWFsU3RhdGUpO1xufTtcblxucmVuZGVyKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRkXCI+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuYWRkQnV0dG9uKHRoaXMuc3RhdGUuYWRkVmFsdWUpfT5BZGQ8L2J1dHRvbj5cbiAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJzZWFyY2hCb3hcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiQWRkIGEgTW92aWVcIiBvbkNoYW5nZT17KGUpID0+IHRoaXMuZ2V0TW92aWUoZS50YXJnZXQudmFsdWUpfSAvPlxuICAgIDwvZGl2PlxuICApXG4gfVxufVxuXG5BZGQucHJvcFR5cGVzID0ge1xuICBtb3ZpZXM6IFJlYWN0LlByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkIH07XG5cbndpbmRvdy5BZGQgPSBBZGQ7ICJdfQ==