import React from "react";
import PropTypes from "prop-types";
import Title from "../components/title";
import { colors } from "../theme";

const InfoCardStyle = {
  lineHeight: "22px",
  marginBottom: "30px",
  flexGrow: 1
};

const LocationWorkPeriodStyle = {
  display: "flex",
  justifyContent: "space-between",
  padding: "0 4px",
  margin: "5px 0"
};

const TaskDisplaySectionStyle = {
  padding: "0 10px",
  paddingBottom: "10px",
  flexGrow: 1
};

const TaskTileStyle = {
  display: "flex",
  alignItems: "baseline"
};

const DashIconStyle = {
  color: colors.lightBlue,
  fontSize: "20px"
};

const RightBorderStyle = {
  borderWidth: "2px 2px",
  width: "12px",
  borderTopStyle: "solid",
  borderRightStyle: "solid",
  borderBottomStyle: "solid",
  color: colors.lightBlue,
  marginTop: "11px"
};

const LeftBorderStyle = {
  borderWidth: "2px 2px",
  width: "12px",
  borderTopStyle: "solid",
  borderLeftStyle: "solid",
  borderBottomStyle: "solid",
  color: colors.lightBlue,
  marginTop: "11px"
};

const TaskSectionStyle = {
  display: "flex"
};

const InfoCard = ({ cardInfo, cardTitle }) => (
  <div style={InfoCardStyle}>
    <Title
      text={cardInfo.role}
      fontSize="24px"
      fontWeight="700"
      padding="0 0 4px 0"
      textAlign="left"
    />
    <Title
      text={cardInfo.organizationName}
      fontSize="24px"
      fontWeight="400"
      padding="4px 0"
      textAlign="left"
    />
    <div style={LocationWorkPeriodStyle}>
      <Title
        text={`${cardInfo.timeSpan.startDate} - ${cardInfo.timeSpan.endDate}`}
        fontSize="16px"
        color={colors.lightBlue}
        fontStyle="italic"
      />
      <Title
        text={cardInfo.location}
        color={colors.lightBlue}
        fontSize="16px"
        fontStyle="italic"
      />
    </div>
    {cardInfo.tasks && (
      <div style={TaskSectionStyle}>
        <div style={LeftBorderStyle} />
        <div style={TaskDisplaySectionStyle}>
          <Title
            text={cardTitle}
            color={colors.lightBlue}
            fontSize="16px"
            fontStyle="italic"
            textAlign="left"
          />
          {cardInfo.tasks.map(task => (
            <div style={TaskTileStyle} key={task}>
              <i className="material-icons" style={DashIconStyle}>
                minimize
              </i>
              <Title
                key={task}
                text={task}
                textAlign="left"
                fontSize="18px"
                margin="0 0 0 4px"
              />
            </div>
          ))}
        </div>
        <div style={RightBorderStyle} />
      </div>
    )}
  </div>
);

export const cardInfoValidation = PropTypes.shape({
  role: PropTypes.string.isRequired,
  organizationName: PropTypes.string.isRequired,
  location: PropTypes.string,
  timeSpan: PropTypes.shape({
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired
  })
});

export const infoCardValidation = PropTypes.shape({
  cardTitle: PropTypes.string.isRequired,
  cardInfo: cardInfoValidation.isRequired,
  tasks: PropTypes.shape.isRequired
}).isRequired;

InfoCard.propTypes = infoCardValidation.isRequired;

export default InfoCard;
