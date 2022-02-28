import React, { useState, useEffect } from "react";
import millify from "millify";
import { localStorageState } from "../../reducers/getDataApi";
import Footer from "../../components/Footer/Footer";

const CryptoCurrenciesCard = ({ price, market, change, icon, name, rank }) => {
  return (
    <div className="CryptoCurrenciesPage_Items_Card">
      <div className="CryptoCurrenciesPage_Items_Card_Header">
        <div className="CryptoCurrencies_Card_Header_CryptoName">{rank}. {name}</div>
        <img className="CryptoCurrencies_Card_Header_Icon" src={icon}/>
      </div>
      <div className="CryptoCurrenciesPage_Card_Description">
        <p>Price : {price}</p>
        <p>Market : {market}</p>
        <p>Daily Change : {change}%</p>
      </div>
    </div>
  );
};

const CryptoCurrenciesPage = () => {
  const { localCoins } = localStorageState;
  const [currencies, setCurrencies] = useState([]);
  const [searchItem, setSearchItem] = useState("");

  const handleFilter = (text) => {
    setSearchItem(text);
    const filterCurrencies = localCoins.filter((coin) =>
      coin.name.toLowerCase().includes(searchItem.toLowerCase())
    );

    setCurrencies(filterCurrencies);
    console.log(searchItem);
    console.log(currencies);
  };
  useEffect(() => {
  }, []);
  console.log(currencies);
  return (
    <div className="CryptoCurrenciesPage">
      <input
        type="text"
        className="CryptoCurrenciesPage_input"
        placeholder="Write your currency"
        onChange={(e) => handleFilter(e.target.value)}
      />
      <div className="CryptoCurrenciesPage_Items">
        {searchItem === ""
          ? localCoins.map((item) => (
              <CryptoCurrenciesCard
                name={item.name}
                icon={item.iconUrl}
                price={item.btcPrice}
                market={item.marketCap}
                change={item.change}
                rank={item.rank}
              />
            ))
          : currencies.map((item) => (
              <CryptoCurrenciesCard
                name={item.name}
                icon={item.iconUrl}
                price={item.btcPrice}
                market={item.marketCap}
                change={item.change}
                rank={item.rank}
              />
            ))}
      </div>
      <Footer />
    </div>
  );
};

export default CryptoCurrenciesPage;
