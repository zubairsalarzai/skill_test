import React from "react";
import analyticStyle from "./FantomAnalytics.module.css";
import withDraw from "../../assets/05.svg";
import invested from "../../assets/14.svg";
import Reinvested from "../../assets/16.svg";
import { Button } from "react-bootstrap";
function FantomAnalytics() {
  return (
    <div className={`${analyticStyle.fantomAnalytics}  `}>
      <div className=" container d-flex justify-content-between mt-3">
        <div className="text-center">
          <h4 className="mb-3">Total invested</h4>
          <img src={invested} />
          <p className="mt-3">543254</p>
          <p className={analyticStyle.matic}>MATIC</p>
        </div>
        <div className="text-center">
          <h4 className="mb-3">Total WithDraw</h4>
          <img src={withDraw} />
          <p className="mt-3">543254</p>
          <p className={analyticStyle.matic}>MATIC</p>
        </div>
        <div className="text-center">
          <h4 className="mb-3">Total Reinvested</h4>
          <img src={Reinvested} />
          <p className="mt-3">543254</p>
          <p className={analyticStyle.matic}>MATIC</p>
        </div>

        <div className={`${analyticStyle.withDrawDiv} text-center `}>
          <h4>WithDraw</h4>
          <p className="mt-3">543254</p>
          <p className={analyticStyle.matic}>MATIC</p>
          <Button className={analyticStyle.btn}>withDraw</Button>
        </div>
      </div>
    </div>
  );
}

export default FantomAnalytics;
