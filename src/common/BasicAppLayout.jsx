import React from "react";
import * as Theme from "../theme";
import ResumeAreaLayout from "../components/resumeAreaLayout";

const appStyle = {
  background: Theme.colors.grey,
  width: window.screen.width,
  height: "1500px",
  display: "flex",
  justifyContent: "center",
  padding: "50px 0"
};
const BasicLayout = () => (
  <div style={appStyle}>
    <ResumeAreaLayout />
  </div>
);

export default BasicLayout;
