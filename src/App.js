import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

//Components
import MyGarageDashboard from "./Pages/MyGarageDashboard";
import ApplicationMenu from "./Pages/ApplicationMenu";
import AddCar from "./Pages/AddCar";
import Register from "./Pages/Register";

export default function App() {
  const [tab, setTab] = useState(1);

  return (
    <>
      <Routes>
        <Route path="/" element={<MyGarageDashboard />} />
        <Route
          path="/menu"
          element={<ApplicationMenu setTab={setTab} tab={tab} />}
        />
        <Route path="/add_car" element={<AddCar setTab={setTab} />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}
