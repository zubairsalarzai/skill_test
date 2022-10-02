import React from "react";
import rewardStyle from "./Rewards.module.css";
import oneman from "../../assets/12.svg";
import threeman from "../../assets/08.svg";
import fourman from "../../assets/09.svg";
import fiveman from "../../assets/10.svg";
import sixman from "../../assets/11.svg";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
function Rewards() {
  return (
    <div className={rewardStyle.reward}>
      <div className={rewardStyle.referral}>
        <h1 className={rewardStyle.heading}>Referral Rewards</h1>
        <p className="mt-4">
          To add an anchor to a heading in HTML, add a element with an id
          attribute. Don't use . Use lowercase for id values, and put hyphens
          between words. To add an anchor to a heading in Markdown, add the
          following code to the end of the line that the heading is on
        </p>
        <div className="d-flex justify-content-around mt-5">
          <div className="p-2">
            <p className="m-0 p-0">level 1</p>
            <p>1</p>
            <img src={oneman} />
            <p>5%</p>
          </div>

          <FontAwesomeIcon className={rewardStyle.arrow} icon={faArrowRight} />

          <div className="p-2">
            <p className="m-0 p-0">level 1</p>
            <p>1</p>
            <img src={threeman} />
            <p>5%</p>
          </div>
          <FontAwesomeIcon className={rewardStyle.arrow} icon={faArrowRight} />

          <div className="p-2">
            <p className="m-0 p-0">level 1</p>
            <p>1</p>
            <img src={fourman} />
            <p>5%</p>
          </div>
          <FontAwesomeIcon className={rewardStyle.arrow} icon={faArrowRight} />
          <div className="p-2">
            <p className="m-0 p-0">level 1</p>
            <p>1</p>
            <img src={fiveman} />
            <p>5%</p>
          </div>
          <FontAwesomeIcon className={rewardStyle.arrow} icon={faArrowRight} />
          <div className="p-2">
            <p className="m-0 p-0">level 1</p>
            <p>1</p>
            <img src={sixman} />
            <p>5%</p>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-3">
          <div className="w-50 me-2">
            <input
              className="p-1"
              type="password"
              class="form-control"
              id="pwd"
              placeholder="0.0"
            />
          </div>
          <div className="w-15">
            {" "}
            <Button className={rewardStyle.btn}>STAKE MATIC</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rewards;
