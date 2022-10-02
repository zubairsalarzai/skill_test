import React from "react";
import profitWorld from "./Profit.module.css";

import PlanCard from "./PlanCard";
function Profit(props) {
  return (
    <div className={profitWorld.profit}>
      <h1 className={`${profitWorld.heading} text-center p-5`}>Profit Plans</h1>

      <div className="d-flex justify-content-center">
        <PlanCard
          head={"7% DAILY PROFIT"}
          day={"01"}
          totalReturn={"107%"}
          withDrawal={"Anytime"}
        />

        <PlanCard
          head={"LOCK 14% PROFIT DAILY"}
          day={"01"}
          totalReturn={"114%"}
          withDrawal={"After 30 days"}
        />
      </div>
    </div>
  );
}

export default Profit;
