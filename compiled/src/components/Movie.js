"use strict";

var Movie = function Movie(props) {
  return React.createElement(
    "div",
    { className: "movie" },
    React.createElement(
      "span",
      { className: "title" },
      props.movie.title
    )
  );
};

Movie.propTypes = {
  movie: React.PropTypes.object.isRequired
};

window.Movie = Movie;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01vdmllLmpzeCJdLCJuYW1lcyI6WyJNb3ZpZSIsInByb3BzIiwibW92aWUiLCJ0aXRsZSIsInByb3BUeXBlcyIsIlJlYWN0IiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxRQUFRLFNBQVJBLEtBQVEsQ0FBQ0MsS0FBRDtBQUFBLFNBQ1I7QUFBQTtBQUFBLE1BQUssV0FBVSxPQUFmO0FBQ0U7QUFBQTtBQUFBLFFBQU0sV0FBVSxPQUFoQjtBQUF5QkEsWUFBTUMsS0FBTixDQUFZQztBQUFyQztBQURGLEdBRFE7QUFBQSxDQUFaOztBQU9FSCxNQUFNSSxTQUFOLEdBQWtCO0FBQ2hCRixTQUFPRyxNQUFNQyxTQUFOLENBQWdCQyxNQUFoQixDQUF1QkM7QUFEZCxDQUFsQjs7QUFJQUMsT0FBT1QsS0FBUCxHQUFlQSxLQUFmIiwiZmlsZSI6Ik1vdmllLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIE1vdmllID0gKHByb3BzKSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtb3ZpZVwiPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj57cHJvcHMubW92aWUudGl0bGV9PC9zcGFuPlxuICAgIDwvZGl2PlxuICBcbiAgKTtcbiAgXG4gIE1vdmllLnByb3BUeXBlcyA9IHtcbiAgICBtb3ZpZTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG4gIH07XG4gIFxuICB3aW5kb3cuTW92aWUgPSBNb3ZpZTsiXX0=