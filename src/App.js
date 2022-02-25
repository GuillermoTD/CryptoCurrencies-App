import "./App.css";
import axios from "axios";
import React, { useEffect} from "react";
import "./styles/css/Styles.css";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import {SET_DATA} from "./ActionsTypes";
import  store  from "./store/store";
function App() {
  const { dispatch } = store;
  useEffect(() => {
    const handleResponse=(data)=>{
      console.log("se mandaron los datos")
      return{
        type:SET_DATA,
        data
      }
    }
    function fetchData() {
      var options = {
        method: "GET",
        url: "https://coinranking1.p.rapidapi.com/coins",
        params: {
          referenceCurrencyUuid: "yhjMzLPhuIDl",
          timePeriod: "24h",
          tiers: "1",
          orderBy: "marketCap",
          orderDirection: "desc",
          limit: "50",
          offset: "0",
        },
        headers: {
          "x-rapidapi-host": "coinranking1.p.rapidapi.com",
          "x-rapidapi-key":
            "cccf8699bbmshf19b932735676e1p1f292djsne4898d6a0813",
        },
      };

      axios
        .request(options)
        .then(function (response) {
          console.log(response.data.data);
          console.log(response.data)
          dispatch(handleResponse(response.data.data))
        })
        .catch(function (error) {
          console.error(error);
        });
    }
    fetchData();
  }, [dispatch]);

  return (
    <div className="App">
      {/* {
          coins.map(item=>{
          return <h1>{item.name}</h1>
          })
        } */}
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
