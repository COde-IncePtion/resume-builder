import React from "react";
import PropTypes from "prop-types";
import { fontFamily } from "../theme";

const Title = ({
  text,
  fontSize,
  textAlign,
  fontWeight,
  margin,
  padding,
  color,
  fontStyle
}) => {
  const style = {
    fontSize,
    textAlign,
    fontFamily,
    fontWeight,
    margin,
    padding,
    fontStyle,
    color
  };

  return <p style={style}>{text}</p>;
};

Title.defaultProps = {
  color: "black",
  fontWeight: "unset",
  padding: "unset",
  textAlign: "unset",
  margin: "unset",
  fontStyle: "unset"
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
  fontSize: PropTypes.string.isRequired,
  textAlign: PropTypes.string,
  fontWeight: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
  color: PropTypes.string,
  fontStyle: PropTypes.string
};

export default Title;
