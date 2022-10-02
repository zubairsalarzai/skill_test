import React from "react";
import lotteryStyle from "./Lottery.module.css";
import dollar from "../../assets/06.svg";
import cup from "../../assets/21.svg";
import raduis from "../../assets/07.svg";
function Lottery(props) {
  return (
    <div className={lotteryStyle.lottery}>
      <div className={`${lotteryStyle.imageDiv} text-center pt-4`}>
        <img src={raduis} className={lotteryStyle.raduisImage} />
        <h1 className={lotteryStyle.lotteryHeading}>LOTTERY SYSTEM</h1>
      </div>

      <div className="text-center pb-4">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
      </div>

      <div className={`${lotteryStyle.container} container`}>
        <div className={lotteryStyle.innerContainer}>
          <div className={` d-flex justify-content-around`}>
            <div className="d-flex p-2">
              <div className="mt-2">
                <img src={dollar} />
              </div>

              <p className="p-2 ms-3"> Pooled Percentage</p>
            </div>
            <div className="d-flex p-2">
              <div className="mt-2">
                <img src={dollar} />
              </div>

              <p className="p-2 ms-3">Previous Reward - 0 Matic ( = $0 USD)</p>
            </div>
            <div className="d-flex p-2">
              <div className="mt-2">
                <img src={cup} />
              </div>

              <p className="p-2 ms-3">Previous Winner:</p>
            </div>
          </div>
          <p className="mt-3 w-75 ms-auto me-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitant
            morbi tristique senectus et. Cras pulvinar mattis nunc sed blandit.
            Maecenas sed enim ut sem viverra aliquet eget sit. Risus commodo
            viverra maecenas accumsan lacus vel facilisis volutpat. Orci dapibus
            ultrices in iaculis nunc. Tortor vitae purus faucibus ornare
            suspendisse sed. Vitae tempus quam pellentesque nec nam aliquam sem
            et tortor. Purus ut faucibus pulvinar
          </p>
        </div>
        <div className={lotteryStyle.clock}>
          12<span className={lotteryStyle.clockSpan}> H </span>00
          <span className={lotteryStyle.clockSpan}> M </span>32
          <span className={lotteryStyle.clockSpan}> S </span>
        </div>
      </div>
    </div>
  );
}

export default Lottery;
