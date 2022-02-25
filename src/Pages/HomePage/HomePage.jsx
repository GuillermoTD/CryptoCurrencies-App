import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import CryptoCurrencies from "../../components/CryptoCurrencies/CryptoCurrencies";
import millify from "millify";
import aveta from "aveta";
import {initialState,localStorageState} from "../../reducers/getDataApi"

const HomePage = () => {
 const {localStats, localCoins} = localStorageState;
const {stats} = initialState;
// const {stats, coins} = data
console.log(typeof(localStats.total))
console.log(typeof(stats.total))
// console.log(typeof(initialState? stats.total: localStats.total))

  return (
    <div className="Home">
      <div className="Home_Stats">
        <h2 className="Home_Stats_Title">Global crypto Stats</h2>
        <div className="Home_Stats_Details">
          <div className="Home_Stats_Details_item">
            <p className="Home_Stats_Details_item_Title">
              Total Cryptocurrencies
            </p>
            <p className="Home_Stats_Details_item_Amount">
              {millify(parseInt(localStats.total))}
            </p>
          </div>

          <div className="Home_Stats_Details_item">
            <p className="Home_Stats_Details_item_Title">Total Exchanges</p>
            <p className="Home_Stats_Details_item_Amount">
              {millify(parseInt(localStats.totalExchanges))}
            </p>
          </div>

          <div className="Home_Stats_Details_item">
            <p className="Home_Stats_Details_item_Title">Total Market Cap</p>
            <p className="Home_Stats_Details_item_Amount">
              {millify(parseInt(localStats.totalMarketCap))}
            </p>
          </div>

          <div className="Home_Stats_Details_item">
            <p className="Home_Stats_Details_item_Title">Total 24h Volume</p>
            <p className="Home_Stats_Details_item_Amount">
              {millify(parseInt(localStats.total24hVolume))}
            </p>
          </div>

          <div className="Home_Stats_Details_item">
            <p className="Home_Stats_Details_item_Title">Total Markets</p>
            <p className="Home_Stats_Details_item_Amount">
              {millify(parseInt(localStats.totalMarkets))}
            </p>
          </div>
        </div>
      </div>
      <div className="Home_TopList">
        <div className="Home_TopList_Title">
          <h2>Top 50 Cryptos in the world</h2>
          <Link to="cryptocurrencies" className="Show-More">
            Show More
          </Link>
        </div>
        <CryptoCurrencies simplified />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
