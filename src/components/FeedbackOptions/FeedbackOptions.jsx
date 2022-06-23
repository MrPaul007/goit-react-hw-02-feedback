import PropTypes from "prop-types";

function FeedbackOptions({ options, onClick }) {
  return options.map(option => (
    <button type="button" className="btn" onClick={onClick} key={option.id} name={option.id}>
      {option.title}
    </button>));
};

FeedbackOptions.propTypes = {
  onClick: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired
};

export default FeedbackOptions;