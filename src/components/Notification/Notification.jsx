import PropTypes from "prop-types";

function Notification({ message }) {
  return (
    <>
        <p className="notification">{message}</p>
    </>
  )  
};

Notification.propTypes = {
  message: PropTypes.string
}

export default Notification;