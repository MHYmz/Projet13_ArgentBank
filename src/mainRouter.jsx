import React from "react";
import {Routes, Route} from "react-router";
import HomePage from "./pages/HomePage"

const MainRouter = () => { 
  return ( 
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  )
};

export default MainRouter;