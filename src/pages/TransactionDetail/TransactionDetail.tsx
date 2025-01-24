import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import data from "../../data.json";
import TransactionInterface from "../../TransactionInterface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const TransactionDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [transaction, setTransaction] = useState<
    TransactionInterface | undefined
  >();

  useEffect(() => {
    if (id && data[Number(id)]) {
      setTransaction(data[Number(id)]);
    }
  }, [id]);

  return (
    <>
      {!transaction ? (
        <div></div>
      ) : (
        <div
          style={{
            padding: "2rem",
          }}
        >
          <FontAwesomeIcon
            style={{ position: "absolute" }}
            onClick={() => navigate(-1)}
            icon={faAngleLeft}
          />
          <h1
            style={{
              fontSize: "3rem",
              marginBottom: "1rem",
              textAlign: "center",
            }}
          >
            ${transaction.amount}
          </h1>
          <div
            style={{ marginBottom: "1rem", color: "gray", textAlign: "center" }}
          >
            {transaction.transactionName}
          </div>
          <div
            style={{ marginBottom: "2rem", color: "gray", textAlign: "center" }}
          >
            {new Date(transaction.date).toLocaleString()}
          </div>
          <div
            style={{
              backgroundColor: "white",
              padding: "1rem",
              borderRadius: "0.5rem",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            <p>Status: Approved</p>
            <p style={{ color: "gray" }}>Some Card Details idk</p>
            <hr style={{ margin: "1rem 0" }} />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p>Total: </p>
              <p>${transaction.amount}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TransactionDetail;
