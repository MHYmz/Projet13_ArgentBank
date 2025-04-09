import React from "react";
import {Routes, Route} from "react-router";
import HomePage from "./pages/HomePage/HomePage"
import Connect from "./pages/ConnectionPage/ConnectionPage";
import UserProfile from "./pages/UserProfile/UserProfile";

const MainRouter = () => { 
  return ( 
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="connect" element={< Connect/>} />
      <Route path="dashboard" element={<UserProfile/>} />
    </Routes>
  )
};

export default MainRouter;