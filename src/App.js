import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/home";
import OneInch from "./components/1inch";
import UniSwap from "./components/uniSwap";
import QuickSwap from "./components/quickSwap";

import ScrollToTop from "./components/commonComponents/scrollToTop";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { coingeckoURLForTokenStats } from "./constants/endpoints";
import axios from "axios";


import { connect , useDispatch } from "react-redux";
import {
  setTokenStats,
  deleteTokenStats,
} from "./redux/actions/tokenStatsActions.js";

function App() {
const dispatch= useDispatch()
  useEffect(() => {
    getTokenStats()
    let interval = setInterval(() => {
      getTokenStats();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  function getTokenStats() {
    // let tokensArray = [
    //   "&ids=hanu-yokia&order=market_cap_desc&per_page=100&page=1&sparkline=false",
    //   "&ids=bitcoin&order=market_cap_desc&per_page=100&page=1&sparkline=false",
    //   "&ids=ethereum&order=market_cap_desc&per_page=100&page=1&sparkline=false",
    //   "&ids=dfyn-network&order=market_cap_desc&per_page=100&page=1&sparkline=false",
    //   "&ids=sushi&order=market_cap_desc&per_page=100&page=1&sparkline=false",
    //   "&ids=1inch&order=market_cap_desc&per_page=100&page=1&sparkline=false",
    // ];

    let tokensArray = [
      "?ids=hanu-yokia&vs_currencies=USD&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true",
      "?ids=bitcoin&vs_currencies=USD&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true",
      "?ids=ethereum&vs_currencies=USD&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true",      
      "?ids=dfyn-network&vs_currencies=USD&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true",      
      "?ids=sushi&vs_currencies=USD&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true",      
      "?ids=1inch&vs_currencies=USD&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true",      
    ];
    let requestUrl = [];
    tokensArray.forEach((element) => {
      requestUrl.push(axios.get(coingeckoURLForTokenStats + element));
    });

    Promise.all(requestUrl)
      .then((res) => {
        dispatch(setTokenStats(res))
      })
      .catch((err) => {
        console.log(err);
        dispatch(setTokenStats([]))

      });
  }

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/gojiswap" component={Home} />
          <Route exact path="/1inch" component={OneInch} />
          <Route exact path="/uniswap" component={UniSwap} />
          <Route exact path="/quickswap" component={QuickSwap} />
        </Switch>
        <ScrollToTop />
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
