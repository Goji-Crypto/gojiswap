import React, { useState, useEffect } from "react";
import { useHistory, withRouter } from "react-router-dom";
import Header from "./Header/header";
import { tokens } from "../constants/tokens";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import {
  setMetaMask,
  deleteMetaMask,
  Web3Object,
  Web3Connected,
} from "../redux/actions/web3action";
import { blockChainConfig } from "../constants/config";
import { divideNo, isGreater, validateInput } from "../helpers/helpers";
import TopNav from "../components/commonComponents/navbarDesktop";

const selectedBlockChain =
  blockChainConfig[
    sessionStorage.getItem("selectedBlockChain")
      ? sessionStorage.getItem("selectedBlockChain")
      : 0
  ];

const {
  networkIdTestNet,
  networkIdMainNet,
  providerUrl,
  oneinchConConfig: { add: UniSwapConAdd },
  oneinchConConfig: { abi: UniSwapConAbi },
  ethTokenConConfig: { add: EthTokenConAdd },
  ethTokenConConfig: { abi: EthTokenConAbi },
} = selectedBlockChain;

const Web3 = require("web3");

function Home(props) {
  const [fromCurrency, setFromCurrency] = useState(tokens[1]);
  const [toCurrency, setToCurrency] = useState(tokens[2]);
  const [fromCurrencyOptions, setFromCurrencyOptions] = useState([]);
  const [toCurrencyOptions, setToCurrencyOptions] = useState([]);

  const [fromCurrencyValue, setFromCurrencyValue] = useState("");
  const [toCurrencyValue, setToCurrencyValue] = useState("");

  const showToast = (msg) => {
    toast.info(msg, {
      position: "bottom-right",
      autoClose: 3000,
      progress: undefined,
    });
  };

  async function swapExactETHForTokens(web3, targetAccount, amount) {
    var amountToBuyWith = web3.utils.toHex(amount);
    var amountOutMin = "100" + Math.random().toString().slice(2, 6);
    console.log("amountToBuyWith", amountToBuyWith);
    var contract = new web3.eth.Contract(UniSwapConAbi, UniSwapConAdd);
    var data = contract.methods.swapExactETHForTokens(
      web3.utils.toHex(amountOutMin),
      [fromCurrency.address, toCurrency.address],
      targetAccount,
      web3.utils.toHex(Math.round(Date.now() / 1000) + 60 * 20)
    );

    var rawTransaction = {
      from: targetAccount,
      to: UniSwapConAdd,
      value: web3.utils.toHex(amountToBuyWith),
      data: data.encodeABI(),
    };
    var result = await web3.eth.sendTransaction(rawTransaction);
    return result;
  }

  async function swapExactTokensForETH(web3, targetAccount, amount) {
    var amountOutMin = "100" + Math.random().toString().slice(2, 6);
    console.log("amountOutMin", amountOutMin, amount);
    var contract = new web3.eth.Contract(UniSwapConAbi, UniSwapConAdd, {
      from: targetAccount,
    });
    var result = await contract.methods
      .swapExactTokensForETH(
        amount,
        amountOutMin,
        [fromCurrency.address, toCurrency.address],
        targetAccount,
        Math.round(Date.now() / 1000) + 60 * 20
      )
      .send({
        from: targetAccount,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    return result;
  }

  async function swapExactTokensForTokens(web3, targetAccount, amount) {
    var amountOutMin = "100" + Math.random().toString().slice(2, 6);
    console.log("amountOutMin", amountOutMin, amount);
    var contract = new web3.eth.Contract(UniSwapConAbi, UniSwapConAdd, {
      from: targetAccount,
    });
    var result = await contract.methods
      .swapExactTokensForTokens(
        amount,
        amountOutMin,
        [fromCurrency.address, toCurrency.address],
        targetAccount,
        Math.round(Date.now() / 1000) + 60 * 20
      )
      .send({
        from: targetAccount,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    return result;
  }

  async function checkForTokenApproval(web3, targetAccount, amount) {
    console.log(fromCurrency, toCurrency);
    const fromCurrencyContract = new web3.eth.Contract(
      fromCurrency.abi,
      fromCurrency.address
    );
    const balance = await fromCurrencyContract.methods
      .balanceOf(targetAccount)
      .call();
    if (isGreater(amount, balance)) {
      showToast("You don't have enough balance to swap");
      return;
    }

    fromCurrencyContract.methods
      .allowance(targetAccount, UniSwapConAdd)
      .call()
      .then((resAllowance) => {
        console.log("res for allowance", resAllowance);
        if (resAllowance === "0") {
          fromCurrencyContract.methods
            .approve(
              UniSwapConAdd,
              "115792089237316195423570985008687907853269984665640564039457584007913129639935"
            )
            .send({ from: targetAccount })
            .then((res) => {
              console.log(res);
              if (toCurrency.key === "ETH") {
                swapExactTokensForETH(web3, targetAccount, amount);
              } else {
                swapExactTokensForTokens(web3, targetAccount, amount);
              }
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          if (toCurrency.key === "ETH") {
            swapExactTokensForETH(web3, targetAccount, amount);
          } else {
            swapExactTokensForTokens(web3, targetAccount, amount);
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleSwap() {
    if (props.web3connected) {
      if (fromCurrency.key === toCurrency.key) {
        showToast("Same tokens can't be exchanged");
        return;
      }

      if (!validateInput(fromCurrencyValue.toString())) {
        showToast("Please add valid input.");
        return;
      }
      const web3 = new Web3(Web3.givenProvider);
      web3.eth.getAccounts().then(async (acc) => {
        console.log("acc", acc);
        if (fromCurrency.key === "ETH") {
          swapExactETHForTokens(
            web3,
            acc[0],
            web3.utils.toWei(fromCurrencyValue, "ether")
          );
        } else {
          checkForTokenApproval(
            web3,
            acc[0],
            web3.utils.toWei(fromCurrencyValue, "ether")
          );
        }
      });
    } else {
      document.getElementById("connectButton").click();
    }
  }

  function handleLiquidity() {
    if (props.web3connected) {
    } else {
      document.getElementById("connectButton").click();
    }
  }

  const handleInputChange = (e) => {
    var re = /^\d*\.?\d*$/;
    if (re.test(e.target.value)) {
      if (e.target.name === "toCurrencyValue") {
        setToCurrencyValue(e.target.value);
      } else if (e.target.name === "fromCurrencyValue")
        setFromCurrencyValue(e.target.value);
    }
  };

  useEffect(() => {
    let temp = tokens.filter((curr) => curr.key !== fromCurrency.key);
    setFromCurrencyOptions([...temp]);
  }, [fromCurrency]);

  useEffect(() => {
    let temp = tokens.filter((curr) => curr.key !== toCurrency.key);
    setToCurrencyOptions([...temp]);
  }, [toCurrency]);

  function handleChangeCurrencyType(curr, comingFor) {
    if (comingFor === "toCurrency") {
      setToCurrency(curr);
    } else if (comingFor === "fromCurrency") {
      setFromCurrency(curr);
    }
  }
  useEffect(() => {
    if (validateInput(fromCurrencyValue)) {
      const web3 = new Web3(providerUrl);
      var contract = new web3.eth.Contract(UniSwapConAbi, UniSwapConAdd);
      contract.methods
        .getAmountsOut(web3.utils.toWei(fromCurrencyValue, "ether"), [
          fromCurrency.address,
          toCurrency.address,
        ])
        .call()
        .then((res) => {
          // console.log(divideNo(res[1]));
          if (res && res[1]) {
            setToCurrencyValue(parseFloat(divideNo(res[1])).toFixed(6));
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [fromCurrencyValue, fromCurrency, toCurrency]);

  return (
    <div className="oneinch">
      <img
        alt=""
        className="position-absolute gradient oneinch"
        src="img/1inch-gradient.svg"
      />
      <img
        alt=""
        className="position-absolute watermark oneinch"
        src="img/1inch-watermark.svg"
      />

      <TopNav selectedTab={"oneinch"} />

      <div className="container mt-5">
        <div className="row m-0 position-relative">
          <div className="col-sm-12 swapper-section d-flex justify-content-center">
            <div className="swapper position-relative">
              <button
                type="button"
                className="btn filter-btn"
                data-mdb-toggle="modal"
                data-mdb-target="#exampleModal"
              >
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 34 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="34"
                    width="34"
                    height="34"
                    rx="6"
                    transform="rotate(-90 0 34)"
                    fill="#1F1F1F"
                  />
                  <path
                    d="M10 21.5254V22.3457H19.8984V23.166H22.3594V22.3457H24V21.5254H22.3594V20.7051H19.8984V21.5254H10ZM21.5391 21.5254V22.3457H20.7188V21.5254H21.5391Z"
                    fill="white"
                  />
                  <path
                    d="M19.8984 10.834V11.6543H10V12.4746H19.8984V13.2949H22.3594V12.4746H24V11.6543H22.3594V10.834H19.8984ZM21.5391 11.6543V12.4746H20.7188V11.6543H21.5391Z"
                    fill="white"
                  />
                  <path
                    d="M10 14.9355V15.7559H16.0703V16.5762H18.5312V15.7559H24V14.9355H18.5312V14.1152H16.0703V14.9355H10ZM17.7109 14.9355V15.7559H16.8906V14.9355H17.7109Z"
                    fill="white"
                  />
                  <path
                    d="M10 18.2441V19.0645H11.467V19.8848H13.928V19.0645H24V18.2441H13.928V17.4238H11.467V18.2441H10ZM13.1077 18.2441V19.0645H12.2874V18.2441H13.1077Z"
                    fill="white"
                  />
                </svg>
              </button>
              {/* <!-- Tabs navs --> */}
              <ul
                className="nav nav-tabs mb-3 mt-sm-3 mt-5 justify-content-center"
                id="ex1"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link px-sm-4 px-3 active"
                    id="ex1-tab-1"
                    data-mdb-toggle="tab"
                    href="#ex1-tabs-1"
                    role="tab"
                    aria-controls="ex1-tabs-1"
                    aria-selected="true"
                  >
                    Swap
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link px-sm-4 px-3"
                    id="ex1-tab-2"
                    data-mdb-toggle="tab"
                    href="#ex1-tabs-2"
                    role="tab"
                    aria-controls="ex1-tabs-2"
                    aria-selected="false"
                  >
                    Limit
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link px-sm-4 px-3"
                    id="ex1-tab-3"
                    data-mdb-toggle="tab"
                    href="#ex1-tabs-3"
                    role="tab"
                    aria-controls="ex1-tabs-3"
                    aria-selected="false"
                  >
                    Liquidity
                  </a>
                </li>
              </ul>
              {/* <!-- Tabs navs --> */}

              {/* <!-- Tabs content --> */}
              <div className="tab-content" id="ex1-content">
                <div
                  className="tab-pane fade show active"
                  id="ex1-tabs-1"
                  role="tabpanel"
                  aria-labelledby="ex1-tab-1"
                >
                  <div className="swap-form form px-sm-5 pb-sm-5 pt-sm-4">
                    <div className="input-group">
                      <button
                        className="btn dropdown-toggle"
                        type="button"
                        data-mdb-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <img
                          className="me-2"
                          src={fromCurrency.imageSrc}
                          alt=""
                        />
                        <span>{fromCurrency.value}</span>
                      </button>
                      <ul className="dropdown-menu">
                        {fromCurrencyOptions.map((option, index) => {
                          return (
                            <li key={index}>
                              <a
                                className="dropdown-item"
                                onClick={() =>
                                  handleChangeCurrencyType(
                                    option,
                                    "fromCurrency"
                                  )
                                }
                              >
                                <img
                                  className="me-2"
                                  src={option.imageSrc}
                                  alt=""
                                />
                                <span>{option.value}</span>
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                      <input
                        className="form-control"
                        aria-label=""
                        placeholder="0.00"
                        value={fromCurrencyValue}
                        name="fromCurrencyValue"
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="input-group justify-content-center swipe-btn">
                      <a href="">
                        <svg
                          width="30"
                          height="30"
                          viewBox="0 0 30 30"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="0.25"
                            y="0.25"
                            width="29.5"
                            height="29.5"
                            rx="9.75"
                            fill="#1F1F1F"
                          />
                          <path
                            d="M9.66763 13.6084C10.0228 13.2549 10.5974 13.2563 10.9509 13.6115L14.1189 16.7948V11.0074C14.1189 10.5062 14.5252 10.1 15.0263 10.1C15.5275 10.1 15.9337 10.5062 15.9337 11.0074V16.7949L19.1017 13.6114C19.4553 13.2562 20.0298 13.2549 20.385 13.6084C20.7403 13.962 20.7416 14.5365 20.3881 14.8917L15.6695 19.6332C15.6692 19.6335 15.6689 19.6337 15.6686 19.634C15.3151 19.9883 14.7387 19.9894 14.384 19.634C14.3837 19.6337 14.3834 19.6335 14.3831 19.6332L9.66454 14.8918C9.3111 14.5366 9.31233 13.962 9.66763 13.6084Z"
                            fill="#8DC33F"
                          />
                          <rect
                            x="0.25"
                            y="0.25"
                            width="29.5"
                            height="29.5"
                            rx="9.75"
                            stroke="#484848"
                            stroke-width="0.5"
                          />
                        </svg>
                      </a>
                    </div>
                    <div className="input-group">
                      <button
                        className="btn dropdown-toggle"
                        type="button"
                        data-mdb-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <img
                          className="me-2"
                          src={toCurrency.imageSrc}
                          alt=""
                        />
                        <span>{toCurrency.value}</span>
                      </button>
                      <ul className="dropdown-menu">
                        {toCurrencyOptions.map((option, index) => {
                          return (
                            <li key={index}>
                              <a
                                className="dropdown-item"
                                onClick={() =>
                                  handleChangeCurrencyType(option, "toCurrency")
                                }
                              >
                                <img
                                  className="me-2"
                                  src={option.imageSrc}
                                  alt=""
                                />
                                <span>{option.value}</span>
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                      <input
                        className="form-control"
                        aria-label=""
                        placeholder="0.00"
                        value={toCurrencyValue}
                        name="toCurrencyValue"
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-btn mt-sm-5 mt-5">
                      <button
                        className="btn theme-btn w-100"
                        onClick={handleSwap}
                      >
                        {props.web3connected ? "Swap" : "Connect to wallet"}
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="ex1-tabs-2"
                  role="tabpanel"
                  aria-labelledby="ex1-tab-2"
                >
                  <div className="limit-form form px-sm-5 pb-sm-5 pt-sm-4">
                    <div className="input-group mb-4 d-flex flex-column toggle-switch">
                      <div className="input-heading">Pay from:</div>
                      <div className="d-flex">
                        <label className="pe-2">BentoBox</label>
                        <label className="toggle-control">
                          <input type="checkbox" checked="checked" />
                          <span className="control"></span>
                        </label>
                        <label className="pe-2">Wallet</label>
                      </div>
                    </div>
                    <div className="input-group">
                      <button
                        className="btn dropdown-toggle"
                        type="button"
                        data-mdb-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <img
                          alt=""
                          className="me-2"
                          src="img/Hanu-input-ic.svg"
                        />
                        <span>Hanu</span>
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            <img
                              alt=""
                              className="me-2"
                              src="img/eth-input-ic.svg"
                            />
                            <span>ETH</span>
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <img
                              alt=""
                              className="me-2"
                              src="img/usdtc-input-ic.svg"
                            />
                            <span>USDTC</span>
                          </a>
                        </li>
                      </ul>
                      <input
                        type="text"
                        className="form-control"
                        aria-label=""
                        placeholder="0.00"
                      />
                    </div>
                    <div className="input-info">
                      <div className="row m-0 position-relative">
                        <div className="col-sm-6">
                          <label>In Bento:</label>
                          <label>0 Hanu</label>
                        </div>
                        <div className="col-sm-6">
                          <label>In Wallet:</label>
                          <label>0 Hanu</label>
                        </div>
                      </div>
                    </div>
                    <div className="input-group justify-content-center swipe-btn">
                      <a href="">
                        <svg
                          width="30"
                          height="30"
                          viewBox="0 0 30 30"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="0.25"
                            y="0.25"
                            width="29.5"
                            height="29.5"
                            rx="9.75"
                            fill="#1F1F1F"
                          />
                          <path
                            d="M9.66763 13.6084C10.0228 13.2549 10.5974 13.2563 10.9509 13.6115L14.1189 16.7948V11.0074C14.1189 10.5062 14.5252 10.1 15.0263 10.1C15.5275 10.1 15.9337 10.5062 15.9337 11.0074V16.7949L19.1017 13.6114C19.4553 13.2562 20.0298 13.2549 20.385 13.6084C20.7403 13.962 20.7416 14.5365 20.3881 14.8917L15.6695 19.6332C15.6692 19.6335 15.6689 19.6337 15.6686 19.634C15.3151 19.9883 14.7387 19.9894 14.384 19.634C14.3837 19.6337 14.3834 19.6335 14.3831 19.6332L9.66454 14.8918C9.3111 14.5366 9.31233 13.962 9.66763 13.6084Z"
                            fill="#8DC33F"
                          />
                          <rect
                            x="0.25"
                            y="0.25"
                            width="29.5"
                            height="29.5"
                            rx="9.75"
                            stroke="#484848"
                            stroke-width="0.5"
                          />
                        </svg>
                      </a>
                    </div>
                    <div className="input-group">
                      <button
                        className="btn dropdown-toggle"
                        type="button"
                        data-mdb-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <img
                          alt=""
                          className="me-2"
                          src="img/usdtc-input-ic.svg"
                        />
                        <span>USDTC</span>
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            <img
                              alt=""
                              className="me-2"
                              src="img/eth-input-ic.svg"
                            />
                            <span>ETH</span>
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <img
                              alt=""
                              className="me-2"
                              src="img/Hanu-input-ic.svg"
                            />
                            <span>Hanu</span>
                          </a>
                        </li>
                      </ul>
                      <input
                        type="text"
                        className="form-control"
                        aria-label=""
                        placeholder="0.00"
                      />
                    </div>
                    <div className="input-info">
                      <div className="row m-0 position-relative">
                        <div className="col-sm-6">
                          <label>In Bento:</label>
                          <label>0 Hanu</label>
                        </div>
                        <div className="col-sm-6">
                          <label>In Wallet:</label>
                          <label>0 Hanu</label>
                        </div>
                      </div>
                    </div>
                    <div className="form-btn mt-4 mt-sm-5 mb-5">
                      <button className="btn theme-btn w-100">
                        {" "}
                        Limit Order Disabled
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="ex1-tabs-3"
                  role="tabpanel"
                  aria-labelledby="ex1-tab-3"
                >
                  <div className="swap-form form px-sm-5 pb-sm-5 pt-sm-4">
                    <div className="input-group">
                      <button
                        className="btn dropdown-toggle"
                        type="button"
                        data-mdb-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <img
                          alt=""
                          className="me-2"
                          src="img/Hanu-input-ic.svg"
                        />
                        <span>Hanu</span>
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            <img
                              alt=""
                              className="me-2"
                              src="img/eth-input-ic.svg"
                            />
                            <span>ETH</span>
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <img
                              alt=""
                              className="me-2"
                              src="img/usdtc-input-ic.svg"
                            />
                            <span>USDTC</span>
                          </a>
                        </li>
                      </ul>
                      <input
                        type="text"
                        className="form-control"
                        aria-label=""
                        placeholder="0.00"
                      />
                    </div>
                    <div className="input-group justify-content-center swipe-btn">
                      <a href="">
                        <svg
                          width="30"
                          height="30"
                          viewBox="0 0 30 30"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="0.25"
                            y="0.25"
                            width="29.5"
                            height="29.5"
                            rx="9.75"
                            fill="#1F1F1F"
                          />
                          <g clip-path="url(#clip0)">
                            <path
                              d="M21.3 14.3H15.7V8.69996C15.7 8.31364 15.3864 8 15 8C14.6136 8 14.3 8.31364 14.3 8.69996V14.3H8.69996C8.31364 14.3 8 14.6136 8 15C8 15.3864 8.31364 15.7 8.69996 15.7H14.3V21.3C14.3 21.6864 14.6136 22 15 22C15.3864 22 15.7 21.6864 15.7 21.3V15.7H21.3C21.6864 15.7 22 15.3864 22 15C22 14.6136 21.6864 14.3 21.3 14.3V14.3Z"
                              fill="#8DC33F"
                            />
                          </g>
                          <rect
                            x="0.25"
                            y="0.25"
                            width="29.5"
                            height="29.5"
                            rx="9.75"
                            stroke="#484848"
                            stroke-width="0.5"
                          />
                          <defs>
                            <clipPath id="clip0">
                              <rect
                                width="14"
                                height="14"
                                fill="white"
                                transform="translate(8 8)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </a>
                    </div>
                    <div className="input-group">
                      <button
                        className="btn dropdown-toggle"
                        type="button"
                        data-mdb-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <img
                          className="me-2"
                          src="img/usdtc-input-ic.svg"
                          alt=""
                        />
                        <span>USDTC</span>
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            <img
                              className="me-2"
                              src="img/eth-input-ic.svg"
                              alt=""
                            />
                            <span>ETH</span>
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <img
                              className="me-2"
                              src="img/Hanu-input-ic.svg"
                              alt=""
                            />
                            <span>Hanu</span>
                          </a>
                        </li>
                      </ul>
                      <input
                        type="text"
                        className="form-control"
                        aria-label=""
                        placeholder="0.00"
                      />
                    </div>
                    <div className="form-btn mt-4 mt-sm-5">
                      <button
                        className="btn theme-btn w-100"
                        onClick={handleLiquidity}
                      >
                        {props.web3connected
                          ? "Add Liquidity"
                          : "Connect to wallet"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Tabs content --> */}
            </div>
          </div>
        </div>
      </div>

      <p className="powered-by logo footer-line">
        <span className="me-2">GojiSwap powered by </span>
        <svg
          width="70"
          height="33"
          viewBox="0 0 70 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M45.9766 21H44.2949V14.2793H43.457V12.5977H45.9766V21ZM49.2812 21H47.5996V12.5977H49.2812V21ZM52.2754 21H50.6758V14.7246H51.0625L51.5898 15.334C51.8477 15.0996 52.1387 14.9199 52.4629 14.7949C52.791 14.666 53.1328 14.6016 53.4883 14.6016C53.8711 14.6016 54.2324 14.6758 54.5723 14.8242C54.9121 14.9688 55.209 15.1699 55.4629 15.4277C55.7168 15.6816 55.916 15.9805 56.0605 16.3242C56.209 16.6641 56.2832 17.0273 56.2832 17.4141V21H54.6836V17.4141C54.6836 17.25 54.6523 17.0957 54.5898 16.9512C54.5273 16.8027 54.4414 16.6738 54.332 16.5645C54.2227 16.4551 54.0957 16.3691 53.9512 16.3066C53.8066 16.2441 53.6523 16.2129 53.4883 16.2129C53.3203 16.2129 53.1621 16.2441 53.0137 16.3066C52.8652 16.3691 52.7363 16.4551 52.627 16.5645C52.5176 16.6738 52.4316 16.8027 52.3691 16.9512C52.3066 17.0957 52.2754 17.25 52.2754 17.4141V21ZM62.9102 15.9727L61.7383 17.1504C61.6797 16.9863 61.5996 16.8398 61.498 16.7109C61.3965 16.5781 61.2812 16.4668 61.1523 16.377C61.0273 16.2871 60.8906 16.2188 60.7422 16.1719C60.5938 16.125 60.4414 16.1016 60.2852 16.1016C60.0664 16.1016 59.8594 16.1465 59.6641 16.2363C59.4727 16.3262 59.3047 16.4531 59.1602 16.6172C59.0195 16.7773 58.9082 16.9688 58.8262 17.1914C58.7441 17.4141 58.7031 17.6602 58.7031 17.9297C58.7031 18.1484 58.7441 18.3535 58.8262 18.5449C58.9082 18.7363 59.0195 18.9043 59.1602 19.0488C59.3047 19.1934 59.4727 19.3066 59.6641 19.3887C59.8594 19.4707 60.0664 19.5117 60.2852 19.5117C60.4414 19.5117 60.5918 19.4902 60.7363 19.4473C60.8809 19.4043 61.0156 19.3438 61.1406 19.2656C61.2695 19.1836 61.3828 19.0859 61.4805 18.9727C61.582 18.8555 61.6641 18.7266 61.7266 18.5859L62.8984 19.7637C62.75 19.9746 62.5781 20.1641 62.3828 20.332C62.1914 20.5 61.9824 20.6426 61.7559 20.7598C61.5332 20.877 61.2969 20.9648 61.0469 21.0234C60.8008 21.0859 60.5469 21.1172 60.2852 21.1172C59.8438 21.1172 59.4277 21.0352 59.0371 20.8711C58.6504 20.7031 58.3105 20.4746 58.0176 20.1855C57.7285 19.8965 57.5 19.5586 57.332 19.1719C57.1641 18.7852 57.0801 18.3711 57.0801 17.9297C57.0801 17.4492 57.1641 17 57.332 16.582C57.5 16.1641 57.7285 15.8008 58.0176 15.4922C58.3105 15.1797 58.6504 14.9336 59.0371 14.7539C59.4277 14.5742 59.8438 14.4844 60.2852 14.4844C60.5469 14.4844 60.8027 14.5176 61.0527 14.584C61.3066 14.6504 61.5469 14.748 61.7734 14.877C62.0039 15.002 62.2148 15.1562 62.4062 15.3398C62.6016 15.5234 62.7695 15.7344 62.9102 15.9727ZM65.2949 21H63.6953V12.2285H65.2949V15C65.4863 14.8555 65.6836 14.7539 65.8867 14.6953C66.0898 14.6328 66.2969 14.6016 66.5078 14.6016C66.8945 14.6016 67.2578 14.6758 67.5977 14.8242C67.9375 14.9688 68.2324 15.1699 68.4824 15.4277C68.7363 15.6816 68.9355 15.9805 69.0801 16.3242C69.2285 16.6641 69.3027 17.0273 69.3027 17.4141V21H67.6914V17.4141H67.7031C67.7031 17.25 67.6719 17.0957 67.6094 16.9512C67.5469 16.8027 67.4609 16.6738 67.3516 16.5645C67.2422 16.4551 67.1152 16.3691 66.9707 16.3066C66.8262 16.2441 66.6719 16.2129 66.5078 16.2129C66.3398 16.2129 66.1816 16.2441 66.0332 16.3066C65.8848 16.3691 65.7559 16.4551 65.6465 16.5645C65.5371 16.6738 65.4512 16.8027 65.3887 16.9512C65.3262 17.0957 65.2949 17.25 65.2949 17.4141V21Z"
            fill="white"
          />
          <path
            d="M8.32888 18.151L9.25326 11.1892L1.22266 5.61401L8.55997 8.09829L10.2932 5.44069L16.6194 1.51208L30.5719 9.19599L31.294 20.9241L25.0833 29.5613L20.1725 30.3124L22.7146 25.6616V21.1841L20.8658 17.6888L18.9881 16.4467L16.0994 19.422V22.5707L13.8463 24.6794L10.9865 25.0261L9.71545 25.7483L7.63559 25.0838L6.76898 21.964L8.32888 19.7686V18.151Z"
            fill="white"
          />
          <path
            d="M21.1542 5.55635C19.6232 5.23856 17.9478 5.32526 17.9478 5.32526C17.9478 5.32526 17.3989 7.86731 13.9902 8.53168C14.0192 8.53168 18.4966 10.0627 21.1542 5.55635Z"
            fill="black"
          />
          <path
            d="M22.5399 28.6081C24.3886 27.1638 25.7752 25.1706 26.4107 22.9174C26.4396 22.8307 26.6996 22.6863 26.8729 22.5708C27.1618 22.3975 27.4507 22.253 27.5084 22.0219C27.624 21.3575 27.6817 20.6642 27.6817 19.971C27.6817 19.7109 27.4217 19.451 27.1618 19.191C26.9595 19.0177 26.7574 18.8155 26.7574 18.671C26.4685 16.0423 25.2552 13.5869 23.3198 11.7959L23.1176 11.9981C24.9952 13.7602 26.2085 16.1579 26.4685 18.6999C26.4973 18.931 26.7284 19.1621 26.9595 19.3932C27.1618 19.5665 27.3929 19.8265 27.3929 19.942C27.3929 20.6065 27.3351 21.2708 27.2196 21.9353C27.1906 22.0508 26.9307 22.1664 26.7284 22.2819C26.4396 22.4263 26.1796 22.5708 26.1219 22.8019C25.4286 25.2572 23.8397 27.3949 21.731 28.7814C22.1065 27.9726 23.2909 25.3439 23.9264 24.0151L23.8109 19.7399L20.1422 16.1867L18.0624 16.4756L15.7803 20.1731C15.7803 20.1731 16.8491 21.5309 15.347 23.1196C13.8738 24.6795 12.7183 25.0261 12.7183 25.0261L11.6494 24.4484C11.9672 24.044 12.6027 23.4374 13.0938 23.033C13.9315 22.3397 14.7692 22.2819 14.7692 21.5309C14.7982 19.971 13.1227 20.4042 13.1227 20.4042L12.5161 20.982L12.2561 23.1196L10.9851 24.7084L10.8406 24.6795L8.76074 24.2173C8.76074 24.2173 10.0318 23.5529 10.234 22.8019C10.4362 22.0797 9.82959 19.6821 9.80067 19.5376C9.82959 19.5665 10.4073 20.0576 10.6673 20.8664C11.1295 19.5954 11.7361 18.3821 11.9095 18.2666C12.0828 18.151 14.4226 16.9089 14.4226 16.9089L13.6427 18.9599L14.2204 18.6422L15.607 15.2335C15.607 15.2335 16.9646 14.5691 17.9757 14.5691C19.7956 14.5402 22.4821 12.3159 21.2688 8.32947C21.6155 8.47394 27.624 11.4782 28.6639 17.3711C29.4438 21.9063 26.8729 26.1528 22.5399 28.6081Z"
            fill="black"
          />
          <path
            d="M15.6666 6.19203C16.331 5.41205 16.071 4.25659 16.071 4.25659L14.1356 7.11642C14.1067 7.11642 14.8289 7.14527 15.6666 6.19203Z"
            fill="#D9D9D9"
          />
          <path
            d="M9.16721 21.8199L9.3983 20.6644C9.3983 20.6644 8.445 22.3399 8.35837 22.571C8.27168 22.831 8.41614 23.2932 8.79164 23.2643C9.16721 23.2354 9.6294 22.6865 9.6294 22.2821C9.6294 21.7621 9.16721 21.8199 9.16721 21.8199Z"
            fill="#D9D9D9"
          />
          <path
            d="M26.3252 3.44781C26.3252 3.44781 27.7697 3.50558 29.2717 3.6789C25.892 1.0213 22.6855 0.241352 20.0857 0.241352C16.5037 0.241352 14.0772 1.71459 13.9328 1.80125L15.0594 0.0102558C15.0594 0.0102558 10.553 -0.423049 8.96421 4.3433C8.55979 3.33226 8.18423 1.85902 8.18423 1.85902C8.18423 1.85902 5.84441 3.91 6.94212 7.31867C4.25563 6.33652 0.413661 4.9788 0.269227 4.94994C0.0670178 4.92102 0.00924384 5.00772 0.00924384 5.00772C0.00924384 5.00772 -0.0485301 5.09434 0.124792 5.23881C0.442548 5.49876 6.50878 9.97628 7.83758 10.8429C7.54871 11.8828 7.54871 12.3739 7.83758 12.865C8.242 13.5293 8.27092 13.876 8.21315 14.3671C8.15537 14.8581 7.63541 19.1046 7.51986 19.6245C7.40431 20.1445 6.19106 21.9933 6.24883 22.5421C6.3066 23.091 7.05767 25.4308 7.7221 25.6908C8.21315 25.8641 9.4264 26.2396 10.2352 26.2396C10.5241 26.2396 10.7841 26.1818 10.8997 26.0663C11.3907 25.633 11.5351 25.5463 11.8818 25.5463C11.9107 25.5463 11.9396 25.5463 11.9685 25.5463C12.1129 25.5463 12.2862 25.5752 12.4884 25.5752C12.9506 25.5752 13.5573 25.4886 13.9905 25.0841C14.6261 24.4486 15.7238 23.582 16.0704 23.1776C16.5037 22.6288 16.7348 21.8777 16.6192 21.1266C16.5326 20.4334 16.9081 19.8267 17.3414 19.2201C17.8903 18.4979 18.9013 17.198 18.9013 17.198C20.8946 18.7001 22.1367 20.9822 22.1367 23.5242C22.1367 28.0306 18.208 31.6704 13.355 31.6704C12.604 31.6704 11.8818 31.5837 11.1596 31.4104C13.3839 32.1903 15.2616 32.4503 16.7926 32.4503C20.0568 32.4503 21.79 31.2659 21.79 31.2659C21.79 31.2659 21.1834 32.0459 20.2012 32.9414C20.2301 32.9414 20.2301 32.9414 20.2301 32.9414C25.632 32.1903 28.2607 27.7417 28.2607 27.7417C28.2607 27.7417 28.0585 29.1861 27.7985 30.1682C34.9913 24.7664 33.7781 18.0069 33.7492 17.7758C33.807 17.8624 34.5291 18.729 34.9047 19.1912C36.0602 7.28975 26.3252 3.44781 26.3252 3.44781ZM15.2616 22.4555C15.146 22.5999 14.655 23.0332 14.3083 23.3509C13.9617 23.6687 13.5861 23.9864 13.2973 24.2753C13.1817 24.3908 12.9506 24.4486 12.604 24.4486C12.4884 24.4486 12.3729 24.4486 12.2862 24.4486C12.2285 24.4486 12.1707 24.4486 12.1129 24.4486C12.0551 24.4486 12.0262 24.4486 11.9973 24.4486C11.9107 24.4486 11.824 24.4486 11.7374 24.4486C12.1707 23.8709 13.4417 22.5421 13.875 22.2532C14.395 21.9066 14.6549 21.5599 14.3372 20.9533C14.0194 20.3467 13.1817 20.4911 13.1817 20.4911C13.1817 20.4911 13.6728 20.2889 14.1061 20.2889C13.5573 20.1445 12.864 20.2889 12.5462 20.6067C12.1995 20.9244 12.2573 22.051 12.1129 22.7732C11.9685 23.5242 11.4773 23.8998 10.7263 24.5931C10.3219 24.9686 10.0331 25.0841 9.80196 25.0841C9.31085 24.9975 8.73311 24.853 8.32869 24.7086C8.03982 24.3331 7.60649 23.091 7.49094 22.571C7.57763 22.2821 7.92428 21.6755 8.0976 21.3288C8.44424 20.6645 8.64648 20.2889 8.70419 19.9422C8.81974 19.4512 9.1953 16.418 9.33977 15.147C9.71527 15.6381 10.2352 16.447 10.1197 16.9669C10.9574 15.7825 10.3508 14.627 10.0619 14.1649C9.80196 13.7027 9.45532 12.7783 9.74419 11.7961C10.0331 10.814 11.073 8.09859 11.073 8.09859C11.073 8.09859 11.4196 8.70525 11.9107 8.5897C12.4018 8.47415 16.3593 2.52342 16.3593 2.52342C16.3593 2.52342 17.4281 4.86325 16.3015 6.56761C15.146 8.27191 14.0194 8.5897 14.0194 8.5897C14.0194 8.5897 15.6082 8.87857 17.0815 7.80972C17.6881 9.22522 18.2658 10.6984 18.2947 10.9007C18.208 11.1028 17.0526 13.876 16.937 14.0493C16.8792 14.1071 16.4748 14.2226 16.186 14.2804C15.6949 14.4249 15.406 14.5115 15.2905 14.5982C15.0882 14.7715 14.1639 17.3136 13.7305 18.5557C13.2106 18.7001 12.6906 18.989 12.3151 19.5668C12.5173 19.4223 13.1528 19.3357 13.615 19.2779C14.0194 19.249 15.2616 19.9134 15.5794 21.1555C15.5794 21.1844 15.5794 21.1844 15.5794 21.2133C15.6371 21.6755 15.4927 22.1088 15.2616 22.4555ZM12.5462 22.8021C12.8062 22.4265 12.7773 21.791 12.8062 21.5888C12.8351 21.3866 12.8928 21.0111 13.1239 20.9533C13.355 20.8956 13.9039 20.9822 13.9039 21.3866C13.9039 21.7622 13.4995 21.8488 13.2106 22.1088C13.0084 22.311 12.604 22.7443 12.5462 22.8021ZM24.0721 17.2846C24.3609 15.8114 24.3899 14.5404 24.3032 13.5005C25.4298 15.0026 26.1231 16.8225 26.3252 18.7001C26.3542 18.9312 26.5853 19.1623 26.8164 19.3934C27.0185 19.5668 27.2496 19.7978 27.2496 19.9422C27.2496 20.6067 27.1919 21.2711 27.0763 21.9355C27.0475 22.0221 26.7874 22.1666 26.5853 22.2821C26.2964 22.4265 26.0364 22.571 25.9786 22.8021C25.3432 25.0264 23.9854 26.9907 22.1655 28.3772C24.852 25.5752 26.1519 20.9533 24.0721 17.2846ZM22.2522 28.6373C24.1298 27.1929 25.5742 25.1708 26.2097 22.8887C26.2386 22.8021 26.4986 22.6576 26.6719 22.5421C26.9608 22.3977 27.2496 22.2244 27.3074 21.9933C27.423 21.3288 27.4807 20.6355 27.4807 19.9422C27.4807 19.6823 27.2208 19.4223 26.9608 19.1623C26.8164 18.989 26.5853 18.7868 26.5853 18.6424C26.3542 16.5336 25.5164 14.5404 24.2165 12.8938C23.6388 9.42739 21.3278 8.35861 21.2701 8.32969C21.3278 8.41638 22.83 10.5829 21.79 13.1249C20.7212 15.6959 17.9769 15.2915 17.7458 15.3203C17.5148 15.3203 16.6192 16.4758 15.4927 18.6134C15.3483 18.5557 14.7416 18.4113 14.0483 18.5268C14.5683 17.0825 15.3483 15.0315 15.4927 14.8581C15.5504 14.8004 15.9838 14.6848 16.2726 14.5982C16.8215 14.4537 17.0815 14.3671 17.1681 14.2515C17.2259 14.1649 17.5148 13.5005 17.8036 12.8072C18.0636 12.8072 18.728 12.7494 18.7858 12.7205C18.8436 12.6627 19.3924 11.2473 19.3924 11.074C19.3924 10.9295 18.2658 8.12751 17.8325 7.05866C18.0347 6.82756 18.237 6.53869 18.4391 6.22097C24.3609 6.85648 28.9828 11.8828 28.9828 17.9779C28.9828 22.6576 26.2386 26.7307 22.2522 28.6373Z"
            fill="#D9D9D9"
          />
          <path
            d="M14.5683 13.0383C15.1172 12.4028 14.8283 11.2184 13.8172 11.0162C14.0772 10.4095 14.4527 9.19629 14.4527 9.19629C14.4527 9.19629 11.5063 13.8182 11.2463 13.9049C10.9863 13.9915 10.7263 12.9805 10.7263 12.9805C10.1775 15.0892 11.6507 15.3781 11.8241 14.7137C12.6329 14.5115 14.0195 13.6449 14.5683 13.0383Z"
            fill="#D9D9D9"
          />
          <path
            d="M12.0557 14.165L13.5578 11.5941C13.5578 11.5941 14.4244 12.0274 13.9911 12.7207C13.4422 13.5295 12.0557 14.165 12.0557 14.165Z"
            fill="white"
          />
          <path
            d="M30.6291 26.0664C30.1957 26.6441 29.7047 27.2507 29.127 27.8285C32.8533 20.6645 29.3003 14.1072 29.1558 13.8472C29.4158 14.1072 29.6758 14.3961 29.9069 14.656C32.7667 17.8336 33.1134 22.6 30.6291 26.0664Z"
            fill="white"
          />
          <path
            d="M34.0952 16.8515C32.7953 13.3562 30.9465 10.3808 26.8735 7.69431C22.9448 5.09448 18.7273 5.29666 18.4963 5.32558C18.4673 5.32558 18.4385 5.32558 18.4385 5.32558C18.5829 5.26781 18.7273 5.23889 18.8717 5.21003C19.7673 4.92116 20.9228 4.69007 22.0782 4.54562C25.1403 4.11231 28.2311 5.15226 30.3399 7.37652C30.3688 7.40544 30.3688 7.40544 30.3977 7.4343C32.7953 9.97635 34.0374 13.1539 34.0952 16.8515Z"
            fill="white"
          />
          <path
            d="M25.9486 2.55246C21.6444 1.74362 18.8712 2.14804 16.878 2.8991C16.8203 2.66801 16.618 2.20582 16.4447 1.83029C15.8381 2.55246 15.2026 3.41907 14.7982 3.96792C13.7005 4.71896 13.2383 5.44116 13.2383 5.44116C13.8738 3.27463 15.7226 1.65696 17.9757 1.25255C18.6113 1.137 19.3045 1.07922 20.0556 1.07922C22.0488 1.10811 24.042 1.59919 25.9486 2.55246Z"
            fill="white"
          />
          <path
            d="M10.0326 8.09877C6.65276 7.98322 7.77939 4.05458 7.83716 3.82349C7.83716 3.85237 8.06826 6.91437 10.0326 8.09877Z"
            fill="white"
          />
          <path
            d="M13.3543 1.02136C10.7545 2.58125 11.2745 6.30766 11.2745 6.30766C8.79018 2.52348 13.1522 1.10802 13.3543 1.02136Z"
            fill="white"
          />
          <path
            d="M9.07965 9.13853C9.25297 9.283 9.42629 9.54294 9.22411 9.91851C9.10856 10.1207 8.93524 10.0918 8.67523 9.97628C8.32858 9.80296 6.24872 8.58971 4.37109 7.34753C6.50874 8.0986 8.67523 8.90743 9.02187 9.08075C9.02187 9.08075 9.05079 9.10967 9.07965 9.13853Z"
            fill="white"
          />
        </svg>
      </p>

      {/* <!-- Filter Modal Start --> */}
      <div
        className="modal fade filter-modal"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Transaction Settings
              </h5>
              <button
                type="button"
                className="btn-close"
                data-mdb-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body px-5">
              <div className="w-100 mb-4">
                <div className="w-100">
                  <h4>Slippage tolerance</h4>
                </div>
                <div className="input-group">
                  <button
                    className="btn dropdown-toggle"
                    type="button"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span>Auto</span>
                  </button>
                  <input
                    type="text"
                    className="form-control"
                    aria-label=""
                    placeholder="0.10%"
                  />
                </div>
              </div>
              <div className="w-100 mb-4">
                <div className="w-100">
                  <h4>Transaction deadline (minutes)</h4>
                </div>
                <div className="input-group">
                  <button
                    className="btn dropdown-toggle"
                    type="button"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span>Mins</span>
                  </button>
                  <input
                    type="text"
                    className="form-control"
                    aria-label=""
                    placeholder="30"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = {
  setMetaMask,
  deleteMetaMask,
  Web3Connected,
  Web3Object,
};

const mapStateToProps = (state, ownProps) => {
  return {
    metaMaskAddress: state.web3.metaMaskAddress,
    web3connected: state.web3.web3connected,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));
