import React from "react";
import PropTypes from "prop-types";
import InfoSection from "./infoSection";
import { cardInfoValidation } from "../common/infoCard";

const WorkExperiences = ({ workExperiences }) => (
  <InfoSection
    sectionHeader="WORK EXPERIENCE"
    sectionData={workExperiences}
    taskInfoSectionTitle="Achievements/Tasks"
  />
);

WorkExperiences.propTypes = {
  workExperiences: PropTypes.arrayOf(cardInfoValidation).isRequired
};
export default WorkExperiences;
