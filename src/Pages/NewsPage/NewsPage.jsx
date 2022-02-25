import React,{useEffect} from "react";
import axios from "axios";


const NewsPage = () => {
  const getNewsData = () => {
    const options = {
      method: "GET",
      url: "https://bing-news-search1.p.rapidapi.com/news",
      params: { safeSearch: "Off", textFormat: "Raw" },
      headers: {
        "x-bingapis-sdk": "true",
        "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
        "x-rapidapi-key": "cccf8699bbmshf19b932735676e1p1f292djsne4898d6a0813",
      },
    };
  
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        console.log("estos son los datos")
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  useEffect(() => {
    getNewsData()
  }, []);
  return <div className="NewsPage">newspage</div>;
};

export default NewsPage;
