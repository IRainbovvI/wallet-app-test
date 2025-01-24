import { faAngleRight, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TransactionCard = ({
  transaction,
  isLast,
}: {
  transaction: {
    id: number;
    type: string;
    amount: string;
    transactionName: string;
    transactionDescription: string;
    date: string;
    pending: boolean;
    authorizedUser: string;
  };
  isLast?: boolean;
}) => {
  const [date, setDate] = useState("");

  useEffect(() => {
    const transactionDate = new Date(transaction.date);
    const currentDate = new Date();
    if (
      Math.floor(
        (currentDate.getTime() - transactionDate.getTime()) / (1000 * 3600 * 24)
      ) <= 7
    ) {
      setDate(
        transactionDate.toLocaleDateString(undefined, { weekday: "long" })
      );
    } else {
      setDate(new Intl.DateTimeFormat("en-US").format(transactionDate));
    }
  }, [transaction.date]);

  return (
    <Link
      to={"/transactions/" + transaction.id}
      style={{
        display: "flex",
        padding: "3vw",
        borderBottom: isLast ? "none" : "1px solid lightgray",
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <div
        style={{
          backgroundColor: "darkgray",
          width: "10vw",
          height: "10vw",
          alignSelf: "center",
          flexShrink: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FontAwesomeIcon icon={faHeart} style={{}} />
      </div>
      <div style={{ margin: "0 3vw", flex: "1 1 auto", minWidth: 0 }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>{transaction.transactionName}</div>
          <div>
            {transaction.type === "Payment" ? "+" : ""}${transaction.amount}
          </div>
        </div>
        <div
          style={{
            color: "gray",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {transaction.pending ? "Pending - " : ""}
          {transaction.transactionDescription}
        </div>
        <div style={{ color: "gray" }}>
          {transaction.authorizedUser ? transaction.authorizedUser + " - " : ""}
          {date}
        </div>
      </div>
      <div style={{ marginLeft: "auto", flexShrink: 0 }}>
        <FontAwesomeIcon icon={faAngleRight} color="lightgray" />
      </div>
    </Link>
  );
};

export default TransactionCard;
