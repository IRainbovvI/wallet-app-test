import React, { useEffect } from "react";
import "./TransactionsList.css";
import CardBalance from "../../components/CardBalance";
import DailyPoints from "../../components/DailyPoints";
import PaymentDue from "../../components/PaymentDue";
import data from "../../data.json";
import TransactionCard from "../../components/TransactionCard";

const TransactionsList = () => {
  useEffect(() => {}, []);

  return (
    <div style={{ padding: "10px" }}>
      <div className="container">
        <CardBalance></CardBalance>
        <DailyPoints></DailyPoints>
        <PaymentDue></PaymentDue>
      </div>
      <div
        style={{
          fontWeight: 700,
          fontSize: "large",
          marginTop: "5vw",
        }}
      >
        Latest Transactions
      </div>
      <div className="listContainer">
        {data.map((el, index) => {
          return (
            <TransactionCard
              key={index}
              transaction={{ ...el, id: index }}
              isLast={index === data.length - 1}
            ></TransactionCard>
          );
        })}
      </div>
    </div>
  );
};

export default TransactionsList;
