import React from "react";
import {Routes, Route} from "react-router";
import HomePage from "./pages/HomePage/HomePage"
import Connect from "./pages/ConnectionPage/ConnectionPage";
import UserProfile from "./pages/UserProfile/UserProfile";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import TransactionPage from "./pages/TransactionPage/TransactionPage";

const MainRouter = () => { 
  return ( 
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="connect" element={< Connect/>} />
      <Route path="dashboard" element={<UserProfile/>} />
      <Route path="transactions/:accountNumber" element={<TransactionPage />} />
      <Route path="*" element={<ErrorPage/>} />
    </Routes>
  )
};

export default MainRouter;