import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Table(props) {
  const tokenStats = useSelector((state) => state.tokenStatsReducer.tokenStats);
  function tableRow(index,symbol,name, image,key) {
    if(tokenStats.length>0){
    return (
      <>
        <tr className={index === 0 ? "hanu-row" : ""}>
          <td>
            <img className="me-2" src={image} alt="token_hanu" />{" "}
            <span>{symbol.toUpperCase()}</span>
          </td>
          <td>{name}</td>
          <td>${tokenStats[index].data[key].usd}</td>
          <td className="red">{tokenStats[index].data[key].usd_24h_change}%</td>
          <td>${tokenStats[index].data[key].usd_24h_vol}</td>
          <td>${tokenStats[index].data[key].usd_market_cap}</td>
        </tr>
      </>
    );
    }
  }

  return (
    <>
      <div className="container table-grid my-4 px-4">
        <div className="crypto-tbl py-4 px-4">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Market</th>
                <th scope="col">Coin</th>
                <th scope="col">Last Price</th>
                <th scope="col">24 hours change</th>
                <th scope="col">24 Hour Trading Vol </th>
                <th scope="col">Market Capitalization</th>
              </tr>
            </thead>
            <tbody>
              {tableRow(0, "HANU","Hanu Yokia", "img/tbl-hanu.svg", "hanu-yokia")}
              {tableRow(1,"BTC","Bit Coin", "img/wbtc%201.svg","bitcoin")}
              {tableRow(2,"ETH","Etherium", "img/tbl-weth.svg","ethereum")}
              {tableRow(3,"DYFN","Dfyn Network", "img/tbl-dfyn.svg","dfyn-network")}
              {tableRow(4,"sushi","Sushi", "img/tbl-sushi.svg","sushi")}
              {tableRow(5,"1inch","1 inch", "img/tbl-1inch.svg",'1inch')}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Table;
