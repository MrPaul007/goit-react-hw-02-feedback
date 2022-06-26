import PropTypes from "prop-types";

function Statistic( {good, neutral, bad, total, positivePercents } ) {
  return (
    <>
        <p className="statItem">Good: {good}</p>
        <p className="statItem">Neutral: {neutral}</p>
        <p className="statItem">Bad: {bad}</p>
        <p className="statItem">Total: {total}</p>
        <p className="statItem">Positive feedback: {positivePercents}%</p>
    </>
  )  
};

Statistic.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercents: PropTypes.number
};

export default Statistic;