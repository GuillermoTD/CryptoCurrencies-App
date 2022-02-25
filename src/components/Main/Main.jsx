import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import HomePage from "../../Pages/HomePage/HomePage";
import CryptoCurrenciesPage from "../../Pages/CryptoCurrenciesPage/CryptoCurrenciesPage";
import NewsPage from "../../Pages/NewsPage/NewsPage"
const Main = () => {
  return (
    <div className="Main">
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="cryptocurrencies" element={<CryptoCurrenciesPage />} />
          <Route path="news" element={<NewsPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Main;
