import React, { useEffect, useContext } from "react";
import Launches from "../apis/Launches";
import { LaunchesContext } from "../context/LaunchesContext";

const LaunchList = () => {
  const {
    latestLaunchData,
    setLatestLaunchData,
    shipsData,
    setShipsData,
  } = useContext(LaunchesContext);

  useEffect(() => {
    async function fetchData() {
      try {
        const latestLaunch = await Launches.get("/launches/latest");
        // https://api.spacexdata.com/v4/launches/latest

        const ships = await Launches.get("/ships");
        // https://api.spacexdata.com/v4/ships

        setLatestLaunchData(latestLaunch.data);
        setShipsData(ships.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  if (latestLaunchData.ships) {
    // comparing assigned ships id from latest launch with the id from ships
    let launchesShipIdData = latestLaunchData.ships.map((item) => item);

    let shipIdData = shipsData.map((item) => item.launches.map((id) => id));
    console.log(shipIdData);

    console.log(launchesShipIdData);

    // compare the ids and filter
  }

  return (
    <div>
      <h1>Latest Launch</h1>
      {latestLaunchData && (
        <>
          <h2>{latestLaunchData.name}</h2>
          <h2>{latestLaunchData.date_utc}</h2>
          {/* .split("T")[0] */}
          <p>{latestLaunchData.details}</p>
        </>
      )}
    </div>
  );
};

export default LaunchList;
