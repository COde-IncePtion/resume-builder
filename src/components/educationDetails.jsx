import React from "react";
import PropTypes from "prop-types";
import InfoSection from "./infoSection";
import { cardInfoValidation } from "../common/infoCard";

const EducationDetails = ({ educationDetails }) => (
  <InfoSection
    sectionHeader="EDUCATION"
    sectionData={educationDetails}
    taskInfoSectionTitle="Courses"
  />
);

EducationDetails.propTypes = {
  educationDetails: PropTypes.arrayOf(cardInfoValidation).isRequired
};

export default EducationDetails;
