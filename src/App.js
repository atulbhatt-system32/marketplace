import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import CreateNftScreen from "./Screens/CreateNftScreen";
import ViewNftScreen from "./Screens/ViewNftScreen";
import SuccessNftScreen from "./Screens/SuccessNftScreen";
import SuccessRentScreen from "./Screens/SuccessRentScreen";

const App = () => {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "768px",
        margin: "auto",
        background: "linear-gradient(180deg, #F1F2FF 0%, #FFFFFF 100%)",
      }}
    >
      <Routes>
        <Route exact path="/" element={<HomeScreen />} />
        <Route path="/create" element={<CreateNftScreen />} />
        <Route path="/nftsuccess" element={<SuccessNftScreen />} />
        <Route path="/view" element={<ViewNftScreen />} />
        <Route path="/rentsuccess" element={<SuccessRentScreen />} />
      </Routes>
    </div>
  );
};

export default App;
