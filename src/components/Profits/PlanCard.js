import React from "react";
import planCardStyle from "./PlanCard.module.css";
import { Button } from "react-bootstrap";
function PlanCard({ head, day, totalReturn, withDrawal }) {
  return (
    <div className={planCardStyle.planCard}>
      <h5 className={`${planCardStyle.head} text-center`}>{head}</h5>
      <div className="">
        <div className="d-flex">
          <div className=" w-50 p-2">
            <p className={planCardStyle.pColor}>Days</p>
            <p className="p-2">{day}</p>
          </div>
          <div className=" w-50 p-2">
            <p className={planCardStyle.pColor}>you will get %</p>
            <p className={`${planCardStyle.pColor} p-0 m-0`}>per day</p>
          </div>
        </div>
        <div className="d-flex">
          <div className=" w-50  p-2">
            <p className={planCardStyle.pColor}>Total return</p>
            <p className="p-2">{totalReturn}</p>
          </div>
          <div className=" w-50  p-2">
            <p className={planCardStyle.pColor}>WidthDrawal</p>
            <p className="pt-2">{withDrawal}</p>
          </div>
        </div>
      </div>
      <p className="text-center p-2 ">Enter Amount</p>
      <div className="mt-4">
        <input
          className="w-100 p-1"
          type="password"
          class="form-control"
          id="pwd"
          placeholder="0.0"
        />

        <Button className={`${planCardStyle.btn} w-100 mt-1 `}>
          STAKE MATIC
        </Button>
      </div>
    </div>
  );
}

export default PlanCard;
