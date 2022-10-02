import React from "react";
import styles from "./Header.module.css";
import { Button } from "react-bootstrap";
import FantomNetwork from "../FantomNetwork/FantomNetwork";

function Header() {
  return (
    <div className={styles.header}>
      <div className={`${styles.headerMain} p-3`}>
        <div className={` container d-flex justify-content-between `}>
          <div className="mt-1">logo</div>
          <div className="mt-1">
            <span className={styles.headerSpan}>Home</span>
            <span className={styles.headerSpan}>Investment</span>
            <span className={styles.headerSpan}>Withdrawal</span>
            <span className={styles.headerSpan}>Referral</span>
          </div>
          <div className="d-flex">
            <Button className={styles.headerBtn}>Telegram</Button>
            <Button className={styles.headerBtn}>Whitepaper</Button>
          </div>
        </div>
      </div>
      <FantomNetwork />
    </div>
  );
}

export default Header;
