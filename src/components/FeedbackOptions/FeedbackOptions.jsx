import PropTypes from "prop-types";

function FeedbackOptions({ options, handleClick }) {
  return options.map(option => (
    <button type="button" key={option} className="btn" onClick={() => handleClick(option)}>
      {option}
    </button>));
};

FeedbackOptions.propTypes = {
  onClick: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired
};

export default FeedbackOptions;