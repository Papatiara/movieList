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
      console.log(valueAdded);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FkZC5qc3giXSwibmFtZXMiOlsiQWRkIiwicHJvcHMiLCJzdGF0ZSIsImFkZFZhbHVlIiwidmFsdWUiLCJ2YWx1ZUFkZGVkIiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwiYWN0dWFsU3RhdGUiLCJhZGRGdW5jIiwiYWRkQnV0dG9uIiwiZSIsImdldE1vdmllIiwidGFyZ2V0IiwiUmVhY3QiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJtb3ZpZXMiLCJQcm9wVHlwZXMiLCJhcnJheSIsImlzUmVxdWlyZWQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBQ0osZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBHQUNYQSxLQURXOztBQUVuQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsZ0JBQVUsRUFBQ0MsT0FBTyxFQUFSO0FBREMsS0FBYjtBQUZtQjtBQUtwQjs7Ozs2QkFFUUMsVSxFQUFZO0FBQ25CQyxjQUFRQyxHQUFSLENBQVlGLFVBQVo7QUFDQSxXQUFLRyxRQUFMLENBQWMsRUFBQ0wsVUFBVUUsVUFBWCxFQUFkO0FBQ0Q7Ozs4QkFFU0ksVyxFQUFhO0FBQ3JCLFdBQUtSLEtBQUwsQ0FBV1MsT0FBWCxDQUFtQkQsV0FBbkI7QUFDRDs7OzZCQUVRO0FBQUE7O0FBQ1AsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLEtBQWY7QUFDRTtBQUFBO0FBQUEsWUFBUSxTQUFTO0FBQUEscUJBQU0sT0FBS0UsU0FBTCxDQUFlLE9BQUtULEtBQUwsQ0FBV0MsUUFBMUIsQ0FBTjtBQUFBLGFBQWpCO0FBQUE7QUFBQSxTQURGO0FBRUUsdUNBQU8sV0FBVSxXQUFqQixFQUE2QixNQUFLLE1BQWxDLEVBQXlDLGFBQVksYUFBckQsRUFBbUUsVUFBVSxrQkFBQ1MsQ0FBRDtBQUFBLG1CQUFPLE9BQUtDLFFBQUwsQ0FBY0QsRUFBRUUsTUFBRixDQUFTVixLQUF2QixDQUFQO0FBQUEsV0FBN0U7QUFGRixPQURGO0FBTUE7Ozs7RUF4QmdCVyxNQUFNQyxTOztBQTJCeEJoQixJQUFJaUIsU0FBSixHQUFnQjtBQUNkQyxVQUFRSCxNQUFNSSxTQUFOLENBQWdCQyxLQUFoQixDQUFzQkMsVUFEaEIsRUFBaEI7O0FBR0FDLE9BQU90QixHQUFQLEdBQWFBLEdBQWIiLCJmaWxlIjoiQWRkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQWRkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIHRoaXMuc3RhdGUgPSB7XG4gICAgYWRkVmFsdWU6IHt2YWx1ZTogJyd9LFxuICB9XG59XG5cbmdldE1vdmllKHZhbHVlQWRkZWQpIHtcbiAgY29uc29sZS5sb2codmFsdWVBZGRlZClcbiAgdGhpcy5zZXRTdGF0ZSh7YWRkVmFsdWU6IHZhbHVlQWRkZWR9KVxufVxuXG5hZGRCdXR0b24oYWN0dWFsU3RhdGUpIHtcbiAgdGhpcy5wcm9wcy5hZGRGdW5jKGFjdHVhbFN0YXRlKTtcbn07XG5cbnJlbmRlcigpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFkZFwiPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLmFkZEJ1dHRvbih0aGlzLnN0YXRlLmFkZFZhbHVlKX0+QWRkPC9idXR0b24+XG4gICAgICA8aW5wdXQgY2xhc3NOYW1lPVwic2VhcmNoQm94XCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkFkZCBhIE1vdmllXCIgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLmdldE1vdmllKGUudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICA8L2Rpdj5cbiAgKVxuIH1cbn1cblxuQWRkLnByb3BUeXBlcyA9IHtcbiAgbW92aWVzOiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCB9O1xuXG53aW5kb3cuQWRkID0gQWRkOyAiXX0=