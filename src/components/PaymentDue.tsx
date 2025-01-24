import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const PaymentDue = () => {
  return (
    <div
      className="paymentDue"
      style={{ gridArea: "paymentDue", position: "relative" }}
    >
      <div>No Payment Due</div>
      <div style={{ color: "gray" }}>You've paid your September balance.</div>
      <div
        className="iconContainer"
        style={{
          position: "absolute",
          bottom: "10px",
          right: "10px",
          backgroundColor: "#eeeeee",
          borderRadius: "50%",
          width: "30%",
          height: "30%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FontAwesomeIcon size={"2x"} icon={faCheck} />
      </div>
    </div>
  );
};

export default PaymentDue;
