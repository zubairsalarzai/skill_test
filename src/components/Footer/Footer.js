import React from "react";
import footerStyle from "./Footer.module.css";
function Footer(props) {
  return (
    <div className={footerStyle.footer}>
      <div className="d-flex justify-content-between container">
        <p>copyright Daily Matic. All rights reserved</p>
        <p>DappRadar</p>
      </div>
    </div>
  );
}

export default Footer;
