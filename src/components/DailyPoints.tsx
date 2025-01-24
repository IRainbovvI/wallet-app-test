import React, { useEffect, useState } from "react";

const DailyPoints = () => {
  const [dPoints, setDPoints] = useState("0");

  useEffect(() => {
    calcDailyPointSum();
  }, []);

  const calcDailyPointSum = () => {
    const todayDate = new Date();
    let seasonStartDate;

    switch (todayDate.getMonth()) {
      case 2:
      case 3:
      case 4:
        seasonStartDate = new Date("03.01." + todayDate.getFullYear());
        break;
      case 5:
      case 6:
      case 7:
        seasonStartDate = new Date("06.01." + todayDate.getFullYear());
        break;
      case 8:
      case 9:
      case 10:
        seasonStartDate = new Date("09.01." + todayDate.getFullYear());
        break;
      case 11:
        seasonStartDate = new Date("12.01." + todayDate.getFullYear());
        break;
      default:
        seasonStartDate = new Date("12.01." + (todayDate.getFullYear() - 1));
        break;
    }

    const daysFromSeasonStart =
      Math.floor(
        (todayDate.getTime() - seasonStartDate.getTime()) / (1000 * 3600 * 24)
      ) + 1;

    let pointsArr = [2, 3];

    for (let i = 2; i < daysFromSeasonStart; i++) {
      pointsArr.push(pointsArr[i - 2] + pointsArr[i - 1] * 0.6);
    }

    const formatPoints = (points: number): string => {
      return points > 1000
        ? `${Math.round(points / 1000)}K`
        : points.toString();
    };

    setDPoints(formatPoints(pointsArr[daysFromSeasonStart - 1]));
  };

  return (
    <div
      className="dailyPoints"
      style={{
        gridArea: "dailyPoints",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div>Daily Points</div>
      <div style={{ color: "gray" }}>{dPoints}</div>
    </div>
  );
};

export default DailyPoints;
