import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onClickAdd, onShow }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={onShow ? "red" : "steelBlue"}
        text={onShow ? "Close" : "Add"}
        onClick={onClickAdd}
      />
    </header>
  );
};

Header.prototype = {
  title: PropTypes.string.isRequired,
};

export default Header;
