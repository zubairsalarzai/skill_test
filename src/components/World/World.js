import React from "react";
import worldStyle from "./World.module.css";
import world from "../../assets/18.png";
function World(props) {
  return (
    <div className={worldStyle.world}>
      <img className={worldStyle.worldImg} src={world} />
      <div className={worldStyle.worldText}>
        <h1 className={worldStyle.heading}>What is Fantom World</h1>
        <p>
          While Bootstrap doesn’t include an icon set by default, we do have our
          own comprehensive icon library called Bootstrap Icons. Feel free to
          use them or any other icon set in your project. We’ve included details
          for Bootstrap Icons and other preferred icon sets below. While most
          icon sets include multiple file formats, we prefer SVG implementations
          for their improved accessibility and vector support.
        </p>
      </div>
      {/* <div className={worldStyle.worldWork}></div> */}
    </div>
  );
}

export default World;
