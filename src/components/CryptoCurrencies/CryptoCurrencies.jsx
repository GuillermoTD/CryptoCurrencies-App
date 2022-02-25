import React, { useState } from "react";
// import millify from "millify";
import { Link } from "react-router-dom";
import { localStorageState } from "../../reducers/getDataApi";
import { useGetCryptosQuery } from "../../services/CriptoApi";
import millify from "millify";

const CryptoCurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 50;
const {localCoins} = localStorageState;
  
  //Here we rename data to cryptoList
//   const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
//   const [cryptos, setCryptos] = useState(cryptosList.data.coins);

//   console.log(cryptos);
  return (
    <div className="CryptoCurrencies">
      {localCoins?.map((currency) => (
        <Link to={`/crypto/${currency.id}`}>
          <div className="CryptoCurrencies_Card">
              <div className="CryptoCurrencies_Card_Header">
                  <div className="CryptoCurrencies_Card_Header_CryptoName">{currency.rank }. {currency.name}</div>
                  <img src={currency.iconUrl} className="CryptoCurrencies_Card_Header_Icon"/>

              </div>
              <div className="CryptoCurrencies_Card_Description">
                <p>Price : {millify(currency.btcPrice,{precision:8})}</p>
                <p>Market : {currency.marketCap}</p>
                <p>Daily Change : {currency.change}%</p>
              </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CryptoCurrencies;
