import React from "react";
import LaunchList from "./components/LaunchList";
import { LaunchesContextProvider } from "./context/LaunchesContext";

function App() {
  return (
    <LaunchesContextProvider>
      <div className="App">
        <LaunchList />
      </div>
    </LaunchesContextProvider>
  );
}

export default App;
