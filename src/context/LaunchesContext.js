import React, { useState, createContext } from "react";

export const LaunchesContext = createContext();

export const LaunchesContextProvider = (props) => {
  const [latestLaunchData, setLatestLaunchData] = useState([]);
  const [shipsData, setShipsData] = useState([]);

  const value = {
    latestLaunchData,
    setLatestLaunchData,
    shipsData,
    setShipsData,
  };
  return (
    <LaunchesContext.Provider value={value}>
      {props.children}
    </LaunchesContext.Provider>
  );
};
