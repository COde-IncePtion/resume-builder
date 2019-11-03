import React from "react";
import { colors } from "../theme";

const SectionLineStyle = {
  borderTop: `2px solid ${colors.lightBlue}`,
  padding: "10px 0"
};

const SectionLine = () => <div style={SectionLineStyle} />;

export default SectionLine;
