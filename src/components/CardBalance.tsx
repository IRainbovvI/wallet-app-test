import React, { useEffect, useState } from "react";

const CardBalance = () => {
  const [balance, setBalance] = useState(0);
  const [available, setAvailable] = useState(1500);

  useEffect(() => {
    const bal = Math.random() * 1500;
    setBalance(Math.round(bal * 100) / 100);
    setAvailable(Math.round((1500 - bal) * 100) / 100);
  }, []);

  return (
    <div
      className="cardBalance"
      style={{
        gridArea: "cardBalance",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div>Card Balance</div>
      <div style={{ fontSize: "x-large", fontWeight: "700" }}>
        ${balance.toLocaleString()}
      </div>
      <div style={{ color: "gray" }}>
        ${available.toLocaleString()} Available
      </div>
    </div>
  );
};

export default CardBalance;
