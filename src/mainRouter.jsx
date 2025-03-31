import React from "react";
import {Routes, Route} from "react-router";
import HomePage from "./pages/HomePage"
import SignUp from "./pages/SignUp";

const MainRouter = () => { 
  return ( 
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="signup" element={< SignUp/>} />
    </Routes>
  )
};

export default MainRouter;