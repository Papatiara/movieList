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
      console.log(actualState);
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
  movies: React.PropTypes.array.isRequired
};

window.Add = Add;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FkZC5qc3giXSwibmFtZXMiOlsiQWRkIiwicHJvcHMiLCJzdGF0ZSIsImFkZFZhbHVlIiwidmFsdWUiLCJ2YWx1ZUFkZGVkIiwic2V0U3RhdGUiLCJhY3R1YWxTdGF0ZSIsImFkZEZ1bmMiLCJjb25zb2xlIiwibG9nIiwiYWRkQnV0dG9uIiwiZSIsImdldE1vdmllIiwidGFyZ2V0IiwiUmVhY3QiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJtb3ZpZXMiLCJQcm9wVHlwZXMiLCJhcnJheSIsImlzUmVxdWlyZWQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBQ0osZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBHQUNiQSxLQURhOztBQUVuQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsZ0JBQVUsRUFBQ0MsT0FBTyxFQUFSO0FBREMsS0FBYjtBQUZtQjtBQUtwQjs7Ozs2QkFFUUMsVSxFQUFZO0FBQ25CLFdBQUtDLFFBQUwsQ0FBYyxFQUFDSCxVQUFVRSxVQUFYLEVBQWQ7QUFDRDs7OzhCQUVTRSxXLEVBQWE7QUFDbkIsV0FBS04sS0FBTCxDQUFXTyxPQUFYLENBQW1CRCxXQUFuQjtBQUNBRSxjQUFRQyxHQUFSLENBQVlILFdBQVo7QUFDSDs7OzZCQUVRO0FBQUE7O0FBQ0wsYUFDSjtBQUFBO0FBQUEsVUFBSyxXQUFVLEtBQWY7QUFDRTtBQUFBO0FBQUEsWUFBUSxTQUFTO0FBQUEscUJBQU0sT0FBS0ksU0FBTCxDQUFlLE9BQUtULEtBQUwsQ0FBV0MsUUFBMUIsQ0FBTjtBQUFBLGFBQWpCO0FBQUE7QUFBQSxTQURGO0FBRUksdUNBQU8sV0FBVSxXQUFqQixFQUE2QixNQUFLLE1BQWxDLEVBQXlDLGFBQVksYUFBckQsRUFBbUUsVUFBVSxrQkFBQ1MsQ0FBRDtBQUFBLG1CQUFPLE9BQUtDLFFBQUwsQ0FBY0QsRUFBRUUsTUFBRixDQUFTVixLQUF2QixDQUFQO0FBQUEsV0FBN0U7QUFGSixPQURJO0FBTUY7Ozs7RUF4QmdCVyxNQUFNQyxTOztBQTJCdkJoQixJQUFJaUIsU0FBSixHQUFnQjtBQUNiQyxVQUFRSCxNQUFNSSxTQUFOLENBQWdCQyxLQUFoQixDQUFzQkM7QUFEakIsQ0FBaEI7O0FBU0RDLE9BQU90QixHQUFQLEdBQWFBLEdBQWIiLCJmaWxlIjoiQWRkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQWRkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgc3VwZXIocHJvcHMpO1xuICB0aGlzLnN0YXRlID0ge1xuICAgIGFkZFZhbHVlOiB7dmFsdWU6ICcnfSxcbiAgfVxufVxuXG5nZXRNb3ZpZSh2YWx1ZUFkZGVkKSB7XG4gIHRoaXMuc2V0U3RhdGUoe2FkZFZhbHVlOiB2YWx1ZUFkZGVkfSlcbn1cblxuYWRkQnV0dG9uKGFjdHVhbFN0YXRlKSB7XG4gICAgdGhpcy5wcm9wcy5hZGRGdW5jKGFjdHVhbFN0YXRlKTtcbiAgICBjb25zb2xlLmxvZyhhY3R1YWxTdGF0ZSlcbn07XG5cbnJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuPGRpdiBjbGFzc05hbWU9XCJhZGRcIj5cbiAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLmFkZEJ1dHRvbih0aGlzLnN0YXRlLmFkZFZhbHVlKX0gPkFkZDwvYnV0dG9uPlxuICAgIDxpbnB1dCBjbGFzc05hbWU9XCJzZWFyY2hCb3hcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiQWRkIGEgTW92aWVcIiBvbkNoYW5nZT17KGUpID0+IHRoaXMuZ2V0TW92aWUoZS50YXJnZXQudmFsdWUpfSAvPlxuPC9kaXY+XG4gICAgKVxuIH1cbn1cblxuIEFkZC5wcm9wVHlwZXMgPSB7XG4gICAgbW92aWVzOiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZFxuICB9O1xuXG5cblxuXG5cblxud2luZG93LkFkZCA9IEFkZDsgIl19