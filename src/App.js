import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

//Components
import MyGarageDashboard from "./Pages/MyGarageDashboard";
import AddCar from "./Pages/AddCar";

export default function App() {
  const [tab, setTab] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<MyGarageDashboard />} />
        <Route path="/add_car" element={<AddCar setTab={setTab} />} />
      </Routes>
    </>
  );
}
