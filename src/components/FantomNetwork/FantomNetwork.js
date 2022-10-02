import React from "react";
import { Button } from "react-bootstrap";
import man from "../../assets/13.svg";
import percentage from "../../assets/20.svg";
import box from "../../assets/23.svg";

import fantomNetworkStyle from "./FantomNetwork.module.css";

function FantomNetwork() {
  return (
    <div
      className={`${fantomNetworkStyle.FantomNetwork} container d-flex justify-content-between`}
    >
      <div className={fantomNetworkStyle.FantomNetwork1}>
        <h1 className={fantomNetworkStyle.heading}>FANTOM NETWORK</h1>
        <p className="lh-lg">
          The Fanton network is extermThe Fanton network is extermThe Fanton
          network is extermThe Fanton network is exterm
        </p>
        <div className="d-flex mt-3">
          <Button className={fantomNetworkStyle.headerBtn}>Telegram</Button>
          <Button className={fantomNetworkStyle.headerBtn}>Whitepaper</Button>
        </div>
      </div>
      <div className={fantomNetworkStyle.FantomNetwork2}>
        <div className="d-flex ">
          <div className={fantomNetworkStyle.ss}></div>
          <img className={fantomNetworkStyle.percentage} src={percentage} />
          <div className="ms-4">
            <span className={fantomNetworkStyle.spanNo}>434343264</span>
            <br />
            <span className={fantomNetworkStyle.spanText}>Ref awards</span>
          </div>
        </div>
        <div className="d-flex ">
          <div className={fantomNetworkStyle.ss}></div>
          <img className={fantomNetworkStyle.man} src={man} />
          <div className="ms-4">
            <span className={fantomNetworkStyle.spanNo}>434343264</span>
            <br />
            <span className={fantomNetworkStyle.spanText}>Ref awards</span>
          </div>
        </div>
        <div className="d-flex ">
          <div className={fantomNetworkStyle.ss}></div>
          <img className={fantomNetworkStyle.box} src={box} />
          <div className="ms-4">
            <span className={fantomNetworkStyle.spanNo}>434343264</span>
            <br />
            <span className={fantomNetworkStyle.spanText}>Ref awards</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FantomNetwork;
