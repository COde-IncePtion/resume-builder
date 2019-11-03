import React from "react";
import PropTypes from "prop-types";
import * as Theme from "../theme";

const spanStyle = {
  display: "flex",
  alignItems: "center",
  fontFamily: Theme.fontFamily,
  height: "30px",
  margin: "2px 0"
};

const contactDetailsLayoutStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end"
};

const IconStyle = {
  paddingLeft: "18px",
  color: Theme.colors.lightBlue
};

const FontAwesomeIconStyle = {
  paddingLeft: "18px",
  color: Theme.colors.lightBlue,
  fontSize: "1.5rem"
};

const ContactDetails = ({ contactDetails }) => (
  <div style={contactDetailsLayoutStyle}>
    <span style={spanStyle}>
      <p>{contactDetails.email}</p>
      <i style={IconStyle} className="material-icons">
        email
      </i>
    </span>
    <span style={spanStyle}>
      <p>{contactDetails.phoneNumber}</p>
      <i style={IconStyle} className="material-icons">
        phone_android
      </i>
    </span>
    <span style={spanStyle}>
      <p>{contactDetails.location}</p>
      <i style={IconStyle} className="material-icons">
        location_on
      </i>
    </span>
    <span style={spanStyle}>
      <p>{contactDetails.linkedIn}</p>
      <i style={FontAwesomeIconStyle} className="fa fa-linkedin" />
    </span>

    <span style={spanStyle}>
      <p>{contactDetails.github}</p>
      <i style={FontAwesomeIconStyle} className="fa fa-github" />
    </span>
  </div>
);

ContactDetails.propTypes = {
  contactDetails: PropTypes.shape({
    email: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    linkedIn: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired
  }).isRequired
};

export default ContactDetails;
