import React from "react";
import PropTypes from "prop-types";

const Button = ({ color, text, onClick }) => {
  return (
    <div>
      <button
        style={{ backgroundColor: color }}
        className="btn"
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
