import React from "react";
import PropTypes from "prop-types";
import InfoCard, { infoCardValidation } from "../common/infoCard";
import Title from "./title";
import SectionLine from "./SectionLine";
import { colors } from "../theme";

const WorkExperienceLayoutStyle = {
  display: "flex"
};
const WorkExpTilesStyle = {
  paddingLeft: "20px",
  flexGrow: 1
};

const borderStyle = {
  borderWidth: "2px 2px",
  width: "9px",
  borderRightStyle: "solid",
  color: colors.lightBlue,
  flexGrow: 1
};

const WorkExpTileStyle = {
  display: "flex"
};
const InfoCardTileBoundaryStyle = {
  display: "flex",
  flexDirection: "column",
  marginRight: "30px"
};

const circle = {
  height: "12px",
  width: "12px",
  borderRadius: "12px",
  borderStyle: "solid",
  borderColor: colors.lightBlue,
  borderWidth: "4px"
};

const InfoSection = ({ sectionHeader, sectionData, taskInfoSectionTitle }) => (
  <div>
    <Title
      text={sectionHeader}
      fontWeight="700"
      fontSize="28px"
      textAlign="left"
      margin="0 0 4px 50px"
    />
    <SectionLine />
    <div style={WorkExperienceLayoutStyle}>
      <div style={WorkExpTilesStyle}>
        {sectionData.map((info, index) => (
          <div key={index} style={WorkExpTileStyle}>
            <div style={InfoCardTileBoundaryStyle}>
              <span style={circle} />
              {index !== sectionData.length - 1 && <span style={borderStyle} />}
            </div>
            <InfoCard
              key={info.timeSpan.startDate}
              cardInfo={info}
              cardTitle={taskInfoSectionTitle}
            />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const infoSectionValidation = PropTypes.shape({
  sectionHeader: PropTypes.string.isRequired,
  sectionData: PropTypes.arrayOf(PropTypes.shape({ infoCardValidation }))
    .isRequired,
  taskInfoSectionTitle: PropTypes.string.isRequired
});

InfoSection.propTypes = infoSectionValidation.isRequired;

export default InfoSection;
