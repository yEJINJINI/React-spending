import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Month from "../pages/Month";
import Spending from "../pages/Spending";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/month" element={<Month />} />
        </Route>

        <Route path="/spending" element={<Spending />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
