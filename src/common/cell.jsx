import React from "react";
import PropTypes from "prop-types";
import { colors, fontFamily } from "../theme";

const SkillCellStyle = {
  borderStyle: "solid",
  borderRadius: "8px",
  borderColor: colors.lightBlue,
  color: "white",
  backgroundColor: colors.lightBlue,
  fontFamily,
  fontWeight: 700,
  fontSize: "18px",
  padding: "6px 14px",
  margin: "8px 6px"
};

const Cell = ({ skillName }) => <span style={SkillCellStyle}>{skillName}</span>;

Cell.propTypes = {
  skillName: PropTypes.string.isRequired
};
export default Cell;
