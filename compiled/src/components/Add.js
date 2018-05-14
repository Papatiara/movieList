'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Add = function (_React$Component) {
  _inherits(Add, _React$Component);

  function Add(props) {
    _classCallCheck(this, Add);

    var _this = _possibleConstructorReturn(this, (Add.__proto__ || Object.getPrototypeOf(Add)).call(this, props));

    _this.state + {
      input: ''
    };
    return _this;
  }

  _createClass(Add, [{
    key: 'submitHandler',
    value: function submitHandler(event) {
      event.preventDefault();
      this.setState({
        input: document.getElementById('newMovie').value
      }, function () {
        this.props.submit(this.state.input);
        document.getElementById('newMovie').value = '';
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'add' },
        React.createElement(
          'form',
          { id: 'addForm', onSubmit: this.submitHandler.bind(this) },
          React.createElement('input', { id: 'newMovie', type: 'text', placeholder: 'Add a Movie' }),
          React.createElement(
            'button',
            null,
            'Add'
          )
        )
      );
    }
  }]);

  return Add;
}(React.Component);

window.Add = Add;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FkZC5qc3giXSwibmFtZXMiOlsiQWRkIiwicHJvcHMiLCJzdGF0ZSIsImlucHV0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInZhbHVlIiwic3VibWl0Iiwic3VibWl0SGFuZGxlciIsImJpbmQiLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFDRixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEdBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxhQUFPO0FBREksS0FBYjtBQUZpQjtBQUtsQjs7OztrQ0FFYUMsSyxFQUFPO0FBQ25CQSxZQUFNQyxjQUFOO0FBQ0EsV0FBS0MsUUFBTCxDQUFjO0FBQ1pILGVBQU9JLFNBQVNDLGNBQVQsQ0FBd0IsVUFBeEIsRUFBb0NDO0FBRC9CLE9BQWQsRUFFRyxZQUFXO0FBQ1osYUFBS1IsS0FBTCxDQUFXUyxNQUFYLENBQWtCLEtBQUtSLEtBQUwsQ0FBV0MsS0FBN0I7QUFDQUksaUJBQVNDLGNBQVQsQ0FBd0IsVUFBeEIsRUFBb0NDLEtBQXBDLEdBQTRDLEVBQTVDO0FBQ0QsT0FMRDtBQVFEOzs7NkJBRVE7QUFDUCxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsS0FBZjtBQUNFO0FBQUE7QUFBQSxZQUFNLElBQUcsU0FBVCxFQUFtQixVQUFVLEtBQUtFLGFBQUwsQ0FBbUJDLElBQW5CLENBQXdCLElBQXhCLENBQTdCO0FBQ0UseUNBQU8sSUFBRyxVQUFWLEVBQXFCLE1BQUssTUFBMUIsRUFBaUMsYUFBWSxhQUE3QyxHQURGO0FBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGO0FBREYsT0FERjtBQVFEOzs7O0VBN0JhQyxNQUFNQyxTOztBQWdDdEJDLE9BQU9mLEdBQVAsR0FBYUEsR0FBYiIsImZpbGUiOiJBZGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBZGQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICBzdXBlcihwcm9wcyk7XG4gICAgICB0aGlzLnN0YXRlICsge1xuICAgICAgICBpbnB1dDogJydcbiAgICAgIH1cbiAgICB9XG4gIFxuICAgIHN1Ym1pdEhhbmRsZXIoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgaW5wdXQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdNb3ZpZScpLnZhbHVlXG4gICAgICB9LCBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5zdWJtaXQodGhpcy5zdGF0ZS5pbnB1dCk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdNb3ZpZScpLnZhbHVlID0gJyc7XG4gICAgICB9KTtcbiAgICAgIFxuICBcbiAgICB9XG4gIFxuICAgIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRkXCI+XG4gICAgICAgICAgPGZvcm0gaWQ9XCJhZGRGb3JtXCIgb25TdWJtaXQ9e3RoaXMuc3VibWl0SGFuZGxlci5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgIDxpbnB1dCBpZD1cIm5ld01vdmllXCIgdHlwZT0ndGV4dCcgcGxhY2Vob2xkZXI9XCJBZGQgYSBNb3ZpZVwiLz5cbiAgICAgICAgICAgIDxidXR0b24+QWRkPC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICB9XG4gIFxuICB3aW5kb3cuQWRkID0gQWRkOyJdfQ==