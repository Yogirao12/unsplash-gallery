import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./navbar";
import Home from "./home";
import Login from "./login";
import Detail from "./details";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/details/:id" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
