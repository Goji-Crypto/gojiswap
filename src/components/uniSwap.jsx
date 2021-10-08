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
  uniswapConConfig: { add: UniSwapConAdd },
  uniswapConConfig: { abi: UniSwapConAbi },
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
    let amountToBuyWith = web3.utils.toHex(amount);
    let amountOutMin = "100" + Math.random().toString().slice(2, 6);
    console.log("amountToBuyWith", amountToBuyWith);
    const contract = new web3.eth.Contract(UniSwapConAbi, UniSwapConAdd);

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
    var contract = new web3.eth.Contract(UniSwapConAbi, UniSwapConAdd);
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
          console.log(divideNo(res[1]));
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
    <div className="uniswap">
      <img
        className="position-absolute gradient uniswap"
        src="img/uniswap-gradient.svg"
        alt=""
      />
      <svg
        className="position-absolute watermark uniswap"
        width="404"
        height="507"
        viewBox="0 0 404 507"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0"
          mask-type="alpha"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="404"
          height="507"
        >
          <rect width="404" height="507" fill="#C4C4C4" />
        </mask>
        <g mask="url(#mask0)">
          <g opacity="0.1">
            <mask
              id="mask1"
              mask-type="alpha"
              maskUnits="userSpaceOnUse"
              x="-28"
              y="30"
              width="310"
              height="389"
            >
              <rect
                x="-28"
                y="30"
                width="309.323"
                height="388.185"
                rx="16"
                fill="#C4C4C4"
              />
            </mask>
            <g mask="url(#mask1)"></g>
            <path
              d="M163.113 110.991C157.673 110.15 157.444 110.052 160.004 109.659C164.91 108.908 176.494 109.932 184.477 111.823C203.113 116.237 220.071 127.544 238.173 147.625L242.982 152.96L249.861 151.858C278.844 147.217 308.328 150.906 332.988 162.256C339.772 165.379 350.47 171.595 351.806 173.192C352.232 173.701 353.013 176.978 353.542 180.475C355.373 192.573 354.456 201.846 350.745 208.772C348.723 212.541 348.61 213.735 349.969 216.961C351.054 219.535 354.077 221.44 357.071 221.436C363.198 221.427 369.797 211.557 372.852 197.823L374.067 192.367L376.471 195.082C389.662 209.973 400.024 230.281 401.804 244.737L402.266 248.506L400.051 245.08C396.235 239.184 392.399 235.17 387.49 231.933C378.638 226.098 369.279 224.112 344.496 222.811C322.111 221.636 309.442 219.731 296.88 215.649C275.507 208.706 264.732 199.459 239.343 166.27C228.067 151.529 221.097 143.373 214.163 136.805C198.409 121.88 182.929 114.053 163.113 110.991Z"
              fill="white"
            />
            <path
              d="M356.861 143.906C357.425 134.028 358.767 127.512 361.472 121.562C362.543 119.207 363.544 117.279 363.7 117.279C363.853 117.279 363.387 119.017 362.664 121.142C360.7 126.916 360.376 134.815 361.73 144.004C363.448 155.664 364.426 157.346 376.796 169.941C382.596 175.849 389.345 183.3 391.789 186.499L396.239 192.316L391.789 188.159C386.351 183.075 373.842 173.162 371.079 171.744C369.225 170.794 368.95 170.811 367.808 171.944C366.755 172.988 366.532 174.557 366.387 181.976C366.159 193.539 364.576 200.96 360.761 208.381C358.695 212.394 358.368 211.538 360.237 207.007C361.631 203.625 361.773 202.138 361.764 190.945C361.741 168.455 359.062 163.048 343.348 153.786C339.368 151.44 332.807 148.056 328.771 146.266C324.735 144.477 321.529 142.917 321.646 142.801C322.091 142.36 337.415 146.817 343.586 149.181C352.762 152.697 354.275 153.153 355.389 152.729C356.138 152.445 356.499 150.277 356.861 143.906Z"
              fill="white"
            />
            <path
              d="M173.681 182.378C162.637 167.229 155.804 144.002 157.283 126.639L157.741 121.265L160.255 121.722C164.976 122.58 173.115 125.599 176.927 127.906C187.386 134.234 191.914 142.567 196.521 163.965C197.87 170.232 199.641 177.325 200.455 179.726C201.767 183.591 206.722 192.618 210.752 198.481C213.654 202.704 211.726 204.705 205.311 204.128C195.513 203.247 182.242 194.121 173.681 182.378Z"
              fill="white"
            />
            <path
              d="M343.46 295.125C291.85 274.42 273.673 256.448 273.673 226.125C273.673 221.662 273.827 218.011 274.015 218.011C274.203 218.011 276.2 219.484 278.452 221.284C288.918 229.648 300.637 233.22 333.081 237.936C352.174 240.711 362.918 242.953 372.829 246.228C404.329 256.637 423.818 277.761 428.467 306.533C429.818 314.893 429.025 330.571 426.836 338.834C425.108 345.361 419.832 357.124 418.432 357.577C418.044 357.702 417.665 356.22 417.564 354.204C417.035 343.4 411.555 332.882 402.353 325.003C391.89 316.045 377.833 308.913 343.46 295.125Z"
              fill="white"
            />
            <path
              d="M307.232 303.728C306.585 299.893 305.463 294.997 304.739 292.847L303.422 288.938L305.868 291.673C309.253 295.458 311.928 300.302 314.195 306.754C315.925 311.678 316.12 313.143 316.107 321.145C316.094 329 315.878 330.647 314.28 335.079C311.761 342.069 308.634 347.025 303.387 352.344C293.96 361.905 281.839 367.197 264.347 369.393C261.307 369.773 252.445 370.416 244.654 370.82C225.021 371.837 212.099 373.94 200.487 378.003C198.818 378.586 197.328 378.943 197.176 378.792C196.706 378.325 204.612 373.63 211.142 370.495C220.349 366.075 229.514 363.665 250.05 360.258C260.194 358.573 270.67 356.531 273.33 355.719C298.451 348.045 311.364 328.241 307.232 303.728Z"
              fill="white"
            />
            <path
              d="M330.89 345.592C324.033 330.905 322.458 316.724 326.215 303.499C326.617 302.086 327.263 300.929 327.652 300.929C328.041 300.929 329.659 301.801 331.247 302.866C334.408 304.985 340.746 308.555 357.629 317.727C378.698 329.173 390.712 338.035 398.881 348.16C406.035 357.027 410.461 367.128 412.593 379.444C413.8 386.419 413.091 403.204 411.294 410.228C405.63 432.378 392.465 449.775 373.687 459.928C370.936 461.415 368.466 462.636 368.2 462.642C367.931 462.648 368.934 460.108 370.427 456.999C376.742 443.841 377.462 431.044 372.686 416.799C369.762 408.076 363.8 397.433 351.762 379.444C337.764 358.532 334.333 352.967 330.89 345.592Z"
              fill="white"
            />
            <path
              d="M137.034 424.837C156.187 408.725 180.017 397.279 201.724 393.764C211.079 392.25 226.664 392.85 235.327 395.06C249.213 398.601 261.634 406.533 268.094 415.981C274.408 425.214 277.116 433.262 279.936 451.166C281.049 458.231 282.259 465.321 282.625 466.928C284.743 476.208 288.864 483.623 293.971 487.35C302.082 493.266 316.05 493.631 329.79 488.292C332.122 487.385 334.146 486.758 334.288 486.9C334.788 487.393 327.868 492.007 322.987 494.437C316.419 497.706 311.197 498.97 304.257 498.97C291.673 498.97 281.226 492.593 272.508 479.586C270.792 477.026 266.936 469.361 263.939 462.549C254.734 441.631 250.189 435.26 239.502 428.286C230.201 422.219 218.206 421.131 209.183 425.539C197.33 431.33 194.023 446.422 202.512 455.986C205.886 459.788 212.178 463.065 217.323 463.703C226.948 464.898 235.22 457.602 235.22 447.918C235.22 441.631 232.795 438.044 226.69 435.298C218.351 431.548 209.387 435.93 209.43 443.737C209.449 447.066 210.903 449.154 214.252 450.665C216.4 451.633 216.45 451.709 214.698 451.346C207.047 449.766 205.255 440.576 211.406 434.474C218.792 427.152 234.065 430.382 239.31 440.381C241.513 444.581 241.769 452.944 239.848 457.993C235.549 469.297 223.013 475.239 210.296 472.006C201.638 469.802 198.112 467.418 187.674 456.705C169.535 438.087 162.493 434.48 136.343 430.414L131.332 429.634L137.034 424.837Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M51.9211 91.6355C112.497 164.889 154.218 195.112 158.854 201.497C162.682 206.769 161.242 211.51 154.684 215.224C151.037 217.29 143.539 219.382 139.785 219.382C135.539 219.382 134.081 217.751 134.081 217.751C131.619 215.424 130.232 215.831 117.589 193.471C100.037 166.334 85.3483 143.824 84.9476 143.447C84.021 142.575 84.0369 142.604 115.8 199.23C120.932 211.032 116.821 215.364 116.821 217.045C116.821 220.464 115.884 222.262 111.651 226.967C104.593 234.812 101.438 243.626 99.1605 261.869C96.6075 282.319 89.428 296.764 69.532 321.487C57.8855 335.959 55.9798 338.612 53.0411 344.444C49.3395 351.79 48.3217 355.904 47.9092 365.178C47.4732 374.986 48.3224 381.323 51.3295 390.698C53.9622 398.908 56.7102 404.329 63.7354 415.169C69.798 424.524 73.2888 431.478 73.2888 434.198C73.2888 436.362 73.7036 436.365 83.0982 434.251C105.581 429.193 123.836 420.296 134.103 409.392C140.458 402.644 141.95 398.917 141.998 389.672C142.03 383.623 141.816 382.355 140.175 378.875C137.504 373.212 132.641 368.502 121.922 361.203C107.878 351.636 101.879 343.935 100.223 333.345C98.8634 324.655 100.44 318.524 108.21 302.299C116.251 285.506 118.244 278.349 119.592 261.422C120.463 250.486 121.669 246.173 124.822 242.711C128.111 239.101 131.072 237.878 139.212 236.77C152.482 234.964 160.932 231.543 167.878 225.166C173.903 219.634 176.425 214.303 176.811 206.279L177.105 200.197L173.738 196.285C161.544 182.119 43.755 80.5 43.0046 80.5C42.8443 80.5 46.8569 85.5113 51.9211 91.6355ZM80.1339 376.277C82.8908 371.411 81.4258 365.158 76.8143 362.102C72.4571 359.216 65.6881 360.576 65.6881 364.338C65.6881 365.486 66.3252 366.321 67.761 367.058C70.1788 368.296 70.3543 369.691 68.452 372.539C66.5256 375.424 66.681 377.962 68.8908 379.684C72.4522 382.462 77.4936 380.934 80.1339 376.277Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M185.483 239.96C179.253 241.867 173.197 248.446 171.323 255.343C170.179 259.552 170.828 266.933 172.541 269.213C175.308 272.895 177.984 273.865 185.23 273.814C199.418 273.716 211.751 267.653 213.185 260.075C214.36 253.862 208.944 245.252 201.482 241.472C197.632 239.522 189.444 238.749 185.483 239.96ZM202.067 252.882C204.255 249.784 203.298 246.437 199.577 244.173C192.491 239.862 181.776 243.429 181.776 250.099C181.776 253.419 187.364 257.041 192.486 257.041C195.895 257.041 200.561 255.016 202.067 252.882Z"
              fill="white"
            />
          </g>
        </g>
      </svg>

      <TopNav selectedTab={"uniswap"} />

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
                        <img className="me-2" src="img/Hanu-input-ic.svg" />
                        <span>Hanu</span>
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            <img className="me-2" src="img/eth-input-ic.svg" />
                            <span>ETH</span>
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <img
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
                        <img className="me-2" src="img/usdtc-input-ic.svg" />
                        <span>USDTC</span>
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            <img className="me-2" src="img/eth-input-ic.svg" />
                            <span>ETH</span>
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <img className="me-2" src="img/Hanu-input-ic.svg" />
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
                        <img className="me-2" src="img/Hanu-input-ic.svg" />
                        <span>Hanu</span>
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            <img className="me-2" src="img/eth-input-ic.svg" />
                            <span>ETH</span>
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <img
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
                        <img className="me-2" src="img/usdtc-input-ic.svg" />
                        <span>USDTC</span>
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            <img className="me-2" src="img/eth-input-ic.svg" />
                            <span>ETH</span>
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <img className="me-2" src="img/Hanu-input-ic.svg" />
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
          width="94"
          height="38"
          viewBox="0 0 94 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M52.4062 19.6426C52.4062 20.1074 52.3184 20.5449 52.1426 20.9551C51.9668 21.3613 51.7266 21.7168 51.4219 22.0215C51.1172 22.3223 50.7598 22.5605 50.3496 22.7363C49.9434 22.9121 49.5078 23 49.043 23C48.5781 23 48.1406 22.9121 47.7305 22.7363C47.3242 22.5605 46.9688 22.3223 46.6641 22.0215C46.3633 21.7168 46.125 21.3613 45.9492 20.9551C45.7734 20.5449 45.6855 20.1074 45.6855 19.6426V14.5977H47.3613V19.6426C47.3613 19.873 47.4043 20.0898 47.4902 20.293C47.5801 20.4961 47.7012 20.6738 47.8535 20.8262C48.0059 20.9785 48.1836 21.0996 48.3867 21.1895C48.5938 21.2754 48.8125 21.3184 49.043 21.3184C49.2734 21.3184 49.4902 21.2754 49.6934 21.1895C49.9004 21.0996 50.0801 20.9785 50.2324 20.8262C50.3848 20.6738 50.5039 20.4961 50.5898 20.293C50.6797 20.0898 50.7246 19.873 50.7246 19.6426V14.5977H52.4062V19.6426ZM55.1777 23H53.5781V16.7246H53.9648L54.4922 17.334C54.75 17.0996 55.041 16.9199 55.3652 16.7949C55.6934 16.666 56.0352 16.6016 56.3906 16.6016C56.7734 16.6016 57.1348 16.6758 57.4746 16.8242C57.8145 16.9688 58.1113 17.1699 58.3652 17.4277C58.6191 17.6816 58.8184 17.9805 58.9629 18.3242C59.1113 18.6641 59.1855 19.0273 59.1855 19.4141V23H57.5859V19.4141C57.5859 19.25 57.5547 19.0957 57.4922 18.9512C57.4297 18.8027 57.3438 18.6738 57.2344 18.5645C57.125 18.4551 56.998 18.3691 56.8535 18.3066C56.709 18.2441 56.5547 18.2129 56.3906 18.2129C56.2227 18.2129 56.0645 18.2441 55.916 18.3066C55.7676 18.3691 55.6387 18.4551 55.5293 18.5645C55.4199 18.6738 55.334 18.8027 55.2715 18.9512C55.209 19.0957 55.1777 19.25 55.1777 19.4141V23ZM62.2148 15.0195C62.2148 15.168 62.1855 15.3066 62.127 15.4355C62.0723 15.5645 61.9961 15.6777 61.8984 15.7754C61.8008 15.8691 61.6855 15.9453 61.5527 16.0039C61.4238 16.0586 61.2852 16.0859 61.1367 16.0859C60.9883 16.0859 60.8477 16.0586 60.7148 16.0039C60.5859 15.9453 60.4727 15.8691 60.375 15.7754C60.2812 15.6777 60.2051 15.5645 60.1465 15.4355C60.0918 15.3066 60.0645 15.168 60.0645 15.0195C60.0645 14.875 60.0918 14.7383 60.1465 14.6094C60.2051 14.4766 60.2812 14.3633 60.375 14.2695C60.4727 14.1719 60.5859 14.0957 60.7148 14.041C60.8477 13.9824 60.9883 13.9531 61.1367 13.9531C61.2852 13.9531 61.4238 13.9824 61.5527 14.041C61.6855 14.0957 61.8008 14.1719 61.8984 14.2695C61.9961 14.3633 62.0723 14.4766 62.127 14.6094C62.1855 14.7383 62.2148 14.875 62.2148 15.0195ZM61.9395 23H60.3281V16.7246H61.9395V23ZM62.8418 17.1172C62.8418 16.7695 62.9082 16.4434 63.041 16.1387C63.1738 15.834 63.3535 15.5684 63.5801 15.3418C63.8105 15.1113 64.0781 14.9297 64.3828 14.7969C64.6875 14.6641 65.0137 14.5977 65.3613 14.5977H69.2168V16.2793H65.3613C65.2441 16.2793 65.1348 16.3008 65.0332 16.3438C64.9316 16.3867 64.8418 16.4473 64.7637 16.5254C64.6895 16.5996 64.6309 16.6875 64.5879 16.7891C64.5449 16.8906 64.5234 17 64.5234 17.1172C64.5234 17.2344 64.5449 17.3457 64.5879 17.4512C64.6309 17.5527 64.6895 17.6426 64.7637 17.7207C64.8418 17.7949 64.9316 17.8535 65.0332 17.8965C65.1348 17.9395 65.2441 17.9609 65.3613 17.9609H67.043C67.3906 17.9609 67.7168 18.0273 68.0215 18.1602C68.3301 18.2891 68.5977 18.4688 68.8242 18.6992C69.0547 18.9258 69.2344 19.1934 69.3633 19.502C69.4961 19.8066 69.5625 20.1328 69.5625 20.4805C69.5625 20.8281 69.4961 21.1543 69.3633 21.459C69.2344 21.7637 69.0547 22.0312 68.8242 22.2617C68.5977 22.4883 68.3301 22.668 68.0215 22.8008C67.7168 22.9336 67.3906 23 67.043 23H63.3105V21.3184H67.043C67.1602 21.3184 67.2695 21.2969 67.3711 21.2539C67.4727 21.2109 67.5605 21.1523 67.6348 21.0781C67.7129 21 67.7734 20.9102 67.8164 20.8086C67.8594 20.707 67.8809 20.5977 67.8809 20.4805C67.8809 20.3633 67.8594 20.2539 67.8164 20.1523C67.7734 20.0508 67.7129 19.9629 67.6348 19.8887C67.5605 19.8105 67.4727 19.75 67.3711 19.707C67.2695 19.6641 67.1602 19.6426 67.043 19.6426H65.3613C65.0137 19.6426 64.6875 19.5762 64.3828 19.4434C64.0781 19.3105 63.8105 19.1309 63.5801 18.9043C63.3535 18.6738 63.1738 18.4062 63.041 18.1016C62.9082 17.793 62.8418 17.4648 62.8418 17.1172ZM78.3633 20.7324C78.3633 21.0605 78.3008 21.3711 78.1758 21.6641C78.0508 21.9531 77.8789 22.2051 77.6602 22.4199C77.4453 22.6348 77.1914 22.8047 76.8984 22.9297C76.6094 23.0547 76.2988 23.1172 75.9668 23.1172C75.6699 23.1172 75.3848 23.0664 75.1113 22.9648C74.8379 22.8594 74.5898 22.707 74.3672 22.5078C74.1484 22.707 73.9023 22.8594 73.6289 22.9648C73.3594 23.0664 73.0742 23.1172 72.7734 23.1172C72.4414 23.1172 72.1309 23.0547 71.8418 22.9297C71.5527 22.8047 71.2988 22.6348 71.0801 22.4199C70.8652 22.2051 70.6953 21.9531 70.5703 21.6641C70.4453 21.3711 70.3828 21.0605 70.3828 20.7324V16.7363H71.9824V20.7324C71.9824 20.8418 72.002 20.9453 72.041 21.043C72.084 21.1367 72.1406 21.2207 72.2109 21.2949C72.2852 21.3652 72.3691 21.4219 72.4629 21.4648C72.5605 21.5039 72.6641 21.5234 72.7734 21.5234C72.8828 21.5234 72.9863 21.5039 73.084 21.4648C73.1816 21.4219 73.2676 21.3652 73.3418 21.2949C73.416 21.2207 73.4727 21.1367 73.5117 21.043C73.5547 20.9453 73.5762 20.8418 73.5762 20.7324V16.7363H75.1699V20.7324C75.1699 20.8418 75.1914 20.9453 75.2344 21.043C75.2773 21.1367 75.334 21.2207 75.4043 21.2949C75.4785 21.3652 75.5625 21.4219 75.6562 21.4648C75.7539 21.5039 75.8574 21.5234 75.9668 21.5234C76.0762 21.5234 76.1797 21.5039 76.2773 21.4648C76.375 21.4219 76.459 21.3652 76.5293 21.2949C76.6035 21.2207 76.6621 21.1367 76.7051 21.043C76.748 20.9453 76.7695 20.8418 76.7695 20.7324V16.7363H78.3633V20.7324ZM85.5996 23H85.2129L84.5918 22.1387C84.4395 22.2754 84.2773 22.4043 84.1055 22.5254C83.9375 22.6426 83.7598 22.7461 83.5723 22.8359C83.3848 22.9219 83.1914 22.9902 82.9922 23.041C82.7969 23.0918 82.5977 23.1172 82.3945 23.1172C81.9531 23.1172 81.5371 23.043 81.1465 22.8945C80.7598 22.7461 80.4199 22.5312 80.127 22.25C79.8379 21.9648 79.6094 21.6172 79.4414 21.207C79.2734 20.7969 79.1895 20.3301 79.1895 19.8066C79.1895 19.3184 79.2734 18.8711 79.4414 18.4648C79.6094 18.0547 79.8379 17.7031 80.127 17.4102C80.4199 17.1172 80.7598 16.8906 81.1465 16.7305C81.5371 16.5664 81.9531 16.4844 82.3945 16.4844C82.5977 16.4844 82.7988 16.5098 82.998 16.5605C83.1973 16.6113 83.3906 16.6816 83.5781 16.7715C83.7656 16.8613 83.9434 16.9668 84.1113 17.0879C84.2832 17.209 84.4434 17.3398 84.5918 17.4805L85.2129 16.7363H85.5996V23ZM83.9883 19.8066C83.9883 19.5879 83.9453 19.377 83.8594 19.1738C83.7773 18.9668 83.6641 18.7852 83.5195 18.6289C83.375 18.4688 83.2051 18.3418 83.0098 18.248C82.8184 18.1504 82.6133 18.1016 82.3945 18.1016C82.1758 18.1016 81.9688 18.1387 81.7734 18.2129C81.582 18.2871 81.4141 18.3965 81.2695 18.541C81.1289 18.6855 81.0176 18.8652 80.9355 19.0801C80.8535 19.291 80.8125 19.5332 80.8125 19.8066C80.8125 20.0801 80.8535 20.3242 80.9355 20.5391C81.0176 20.75 81.1289 20.9277 81.2695 21.0723C81.4141 21.2168 81.582 21.3262 81.7734 21.4004C81.9688 21.4746 82.1758 21.5117 82.3945 21.5117C82.6133 21.5117 82.8184 21.4648 83.0098 21.3711C83.2051 21.2734 83.375 21.1465 83.5195 20.9902C83.6641 20.8301 83.7773 20.6484 83.8594 20.4453C83.9453 20.2383 83.9883 20.0254 83.9883 19.8066ZM88.4355 25.3906H86.8242V16.7246H87.2109L87.8496 17.4805C87.9941 17.3438 88.1523 17.2148 88.3242 17.0938C88.4961 16.9727 88.6738 16.8691 88.8574 16.7832C89.0449 16.6934 89.2383 16.623 89.4375 16.5723C89.6367 16.5215 89.8379 16.4961 90.041 16.4961C90.4824 16.4961 90.8965 16.5762 91.2832 16.7363C91.6738 16.8926 92.0137 17.1152 92.3027 17.4043C92.5957 17.6934 92.8262 18.043 92.9941 18.4531C93.1621 18.8594 93.2461 19.3105 93.2461 19.8066C93.2461 20.3223 93.1621 20.7871 92.9941 21.2012C92.8262 21.6113 92.5957 21.9609 92.3027 22.25C92.0137 22.5352 91.6738 22.7539 91.2832 22.9062C90.8965 23.0586 90.4824 23.1348 90.041 23.1348C89.9004 23.1348 89.7598 23.1191 89.6191 23.0879C89.4824 23.0566 89.3457 23.0156 89.209 22.9648C89.0762 22.9102 88.9434 22.8496 88.8105 22.7832C88.6816 22.7168 88.5566 22.6484 88.4355 22.5781V25.3906ZM91.6406 19.8066C91.6406 19.541 91.5977 19.3027 91.5117 19.0918C91.4297 18.8809 91.3164 18.7031 91.1719 18.5586C91.0273 18.4102 90.8574 18.2969 90.6621 18.2188C90.4668 18.1406 90.2598 18.1016 90.041 18.1016C89.8223 18.1016 89.6152 18.1406 89.4199 18.2188C89.2285 18.2969 89.0605 18.4102 88.916 18.5586C88.7715 18.7031 88.6562 18.8809 88.5703 19.0918C88.4883 19.3027 88.4473 19.541 88.4473 19.8066C88.4473 20.0605 88.4883 20.293 88.5703 20.5039C88.6562 20.7148 88.7715 20.8945 88.916 21.043C89.0605 21.1914 89.2285 21.3066 89.4199 21.3887C89.6152 21.4707 89.8223 21.5117 90.041 21.5117C90.2598 21.5117 90.4668 21.4707 90.6621 21.3887C90.8574 21.3066 91.0273 21.1914 91.1719 21.043C91.3164 20.8945 91.4297 20.7148 91.5117 20.5039C91.5977 20.293 91.6406 20.0605 91.6406 19.8066Z"
            fill="white"
          />
          <g clip-path="url(#clip0)">
            <path
              d="M10.3803 3.87858C9.91013 3.80611 9.89031 3.79761 10.1115 3.76381C10.5355 3.69901 11.5366 3.78733 12.2265 3.95036C13.8371 4.33086 15.3026 5.30558 16.8669 7.03671L17.2825 7.49661L17.877 7.40161C20.3817 7.00156 22.9297 7.31951 25.0608 8.29801C25.6471 8.56721 26.5716 9.10308 26.6871 9.24078C26.7238 9.28466 26.7913 9.56716 26.8371 9.86861C26.9953 10.9115 26.9161 11.7109 26.5953 12.308C26.4206 12.6329 26.4108 12.7359 26.5283 13.0139C26.6221 13.2358 26.8833 13.4 27.1421 13.3997C27.6716 13.399 28.2418 12.5481 28.5058 11.3641L28.6108 10.8938L28.8186 11.1278C29.9586 12.4115 30.8541 14.1623 31.0078 15.4084L31.0478 15.7334L30.8563 15.438C30.5266 14.9297 30.1951 14.5837 29.7708 14.3046C29.0058 13.8016 28.1971 13.6304 26.0553 13.5182C24.1208 13.4169 23.026 13.2527 21.9404 12.9009C20.0933 12.3023 19.1622 11.5052 16.9681 8.64406C15.9935 7.37326 15.3912 6.67016 14.792 6.10393C13.4305 4.81733 12.0927 4.14258 10.3803 3.87858Z"
              fill="white"
            />
            <path
              d="M27.1236 6.71591C27.1724 5.86436 27.2884 5.30268 27.5221 4.78973C27.6146 4.58671 27.7011 4.42053 27.7146 4.42053C27.7279 4.42053 27.6876 4.57038 27.6251 4.75353C27.4554 5.25133 27.4274 5.93223 27.5444 6.72443C27.6929 7.72958 27.7774 7.87461 28.8464 8.96038C29.3476 9.46968 29.9309 10.112 30.1421 10.3878L30.5266 10.8892L30.1421 10.5308C29.6721 10.0926 28.5911 9.23798 28.3524 9.11581C28.1921 9.03388 28.1684 9.03531 28.0696 9.13301C27.9786 9.22303 27.9594 9.35831 27.9469 9.99786C27.9271 10.9946 27.7904 11.6344 27.4606 12.2741C27.2821 12.6201 27.2539 12.5463 27.4154 12.1557C27.5359 11.8641 27.5481 11.736 27.5474 10.771C27.5454 8.83226 27.3139 8.36616 25.9559 7.56771C25.6119 7.36543 25.0449 7.07373 24.6961 6.91943C24.3473 6.76513 24.0703 6.63073 24.0803 6.62068C24.1188 6.58266 25.4431 6.96686 25.9764 7.17068C26.7694 7.47383 26.9001 7.51313 26.9964 7.47656C27.0611 7.45203 27.0924 7.26518 27.1236 6.71591Z"
              fill="white"
            />
            <path
              d="M11.2938 10.0326C10.3394 8.72663 9.74885 6.72431 9.8767 5.22748L9.91622 4.76428L10.1335 4.80368C10.5414 4.87763 11.2449 5.13786 11.5742 5.33671C12.4781 5.88231 12.8695 6.60066 13.2676 8.44526C13.3842 8.98556 13.5372 9.59698 13.6076 9.80398C13.7209 10.1372 14.1492 10.9154 14.4974 11.4208C14.7482 11.7849 14.5816 11.9574 14.0272 11.9076C13.1805 11.8317 12.0336 11.045 11.2938 10.0326Z"
              fill="white"
            />
            <path
              d="M25.9656 19.7522C21.5054 17.9673 19.9346 16.418 19.9346 13.8039C19.9346 13.4192 19.9479 13.1045 19.9641 13.1045C19.9804 13.1045 20.1529 13.2314 20.3476 13.3866C21.252 14.1076 22.2648 14.4156 25.0686 14.8221C26.7186 15.0614 27.6471 15.2546 28.5036 15.5369C31.2258 16.4343 32.9101 18.2553 33.3118 20.7357C33.4286 21.4564 33.3601 22.8079 33.1708 23.5203C33.0216 24.0829 32.5656 25.097 32.4446 25.136C32.4111 25.1468 32.3783 25.019 32.3696 24.8452C32.3238 23.9139 31.8503 23.0071 31.0551 22.3279C30.1508 21.5557 28.9361 20.9408 25.9656 19.7522Z"
              fill="white"
            />
            <path
              d="M22.8345 20.4938C22.7786 20.1632 22.6816 19.7411 22.6191 19.5557L22.5053 19.2188L22.7166 19.4545C23.0092 19.7809 23.2403 20.1985 23.4363 20.7547C23.5858 21.1792 23.6026 21.3054 23.6015 21.9952C23.6003 22.6724 23.5817 22.8144 23.4436 23.1965C23.2259 23.799 22.9557 24.2262 22.5023 24.6848C21.6875 25.509 20.64 25.9653 19.1284 26.1545C18.8657 26.1873 18.0998 26.2428 17.4266 26.2775C15.7298 26.3653 14.6131 26.5465 13.6097 26.8968C13.4654 26.947 13.3366 26.9778 13.3235 26.9648C13.2829 26.9245 13.9661 26.5198 14.5304 26.2495C15.3261 25.8685 16.1182 25.6608 17.8928 25.367C18.7695 25.2218 19.6748 25.0458 19.9047 24.9758C22.0757 24.3142 23.1916 22.6069 22.8345 20.4938Z"
              fill="white"
            />
            <path
              d="M24.8795 24.1028C24.2869 22.8366 24.1508 21.6142 24.4755 20.4741C24.5102 20.3523 24.5661 20.2526 24.5997 20.2526C24.6332 20.2526 24.7731 20.3277 24.9104 20.4195C25.1835 20.6022 25.7313 20.9099 27.1903 21.7006C29.011 22.6873 30.0493 23.4513 30.7553 24.3242C31.3735 25.0886 31.756 25.9593 31.9403 27.0211C32.0445 27.6223 31.9833 29.0693 31.828 29.6748C31.3385 31.5843 30.2008 33.0841 28.578 33.9593C28.3403 34.0876 28.1268 34.1928 28.1038 34.1933C28.0805 34.1938 28.1673 33.9748 28.2963 33.7068C28.842 32.5726 28.9043 31.4693 28.4915 30.2413C28.2388 29.4893 27.7235 28.5718 26.6833 27.0211C25.4735 25.2183 25.177 24.7385 24.8795 24.1028Z"
              fill="white"
            />
            <path
              d="M8.12608 30.9342C9.78123 29.5452 11.8407 28.5584 13.7166 28.2554C14.5251 28.1249 15.8719 28.1767 16.6205 28.3672C17.8205 28.6724 18.894 29.3562 19.4523 30.1707C19.9979 30.9667 20.232 31.6604 20.4757 33.2039C20.5718 33.8129 20.6764 34.4242 20.708 34.5627C20.891 35.3627 21.2472 36.0019 21.6885 36.3232C22.3895 36.8332 23.5966 36.8647 24.784 36.4044C24.9855 36.3262 25.1604 36.2722 25.1727 36.2844C25.2159 36.3269 24.6179 36.7247 24.1961 36.9342C23.6285 37.2159 23.1772 37.3249 22.5775 37.3249C21.49 37.3249 20.5871 36.7752 19.8337 35.6539C19.6854 35.4332 19.3522 34.7724 19.0932 34.1852C18.2977 32.3819 17.9049 31.8327 16.9813 31.2314C16.1775 30.7084 15.141 30.6147 14.3612 30.9947C13.3368 31.4939 13.051 32.7949 13.7847 33.6194C14.0763 33.9472 14.62 34.2297 15.0646 34.2847C15.8965 34.3877 16.6113 33.7587 16.6113 32.9239C16.6113 32.3819 16.4017 32.0727 15.8741 31.8359C15.1534 31.5127 14.3788 31.8904 14.3825 32.5634C14.3841 32.8504 14.5098 33.0304 14.7992 33.1607C14.9849 33.2442 14.9892 33.2507 14.8378 33.2194C14.1766 33.0832 14.0217 32.2909 14.5533 31.7649C15.1916 31.1337 16.5115 31.4122 16.9647 32.2742C17.1551 32.6362 17.1772 33.3572 17.0112 33.7924C16.6397 34.7669 15.5563 35.2792 14.4574 35.0004C13.7091 34.8104 13.4045 34.6049 12.5024 33.6814C10.9348 32.0764 10.3263 31.7654 8.06635 31.4149L7.6333 31.3477L8.12608 30.9342Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.770957 2.20996C6.00587 8.5249 9.61142 11.1303 10.0121 11.6808C10.3429 12.1353 10.2184 12.5439 9.65168 12.8642C9.3365 13.0422 8.68852 13.2226 8.3641 13.2226C7.99717 13.2226 7.87117 13.0819 7.87117 13.0819C7.65842 12.8814 7.5386 12.9164 6.446 10.9889C4.92915 8.64952 3.65972 6.70892 3.6251 6.67642C3.54502 6.6013 3.5464 6.60383 6.29135 11.4853C6.73485 12.5028 6.37955 12.8762 6.37955 13.0211C6.37955 13.3159 6.29865 13.4709 5.93278 13.8765C5.32285 14.5528 5.0502 15.3126 4.85337 16.8852C4.63275 18.6481 4.0123 19.8934 2.29289 22.0247C1.2864 23.2723 1.12171 23.501 0.86775 24.0038C0.54786 24.6371 0.459902 24.9917 0.424252 25.7912C0.386572 26.6367 0.459958 27.183 0.719835 27.9912C0.947348 28.699 1.18483 29.1663 1.79194 30.1008C2.31588 30.9073 2.61755 31.5067 2.61755 31.7412C2.61755 31.9277 2.6534 31.928 3.46527 31.7458C5.4082 31.3098 6.98585 30.5427 7.87313 29.6027C8.42228 29.021 8.5512 28.6998 8.55537 27.9028C8.55812 27.3813 8.53967 27.272 8.39785 26.972C8.167 26.4838 7.74672 26.0778 6.82042 25.4485C5.60675 24.6238 5.08835 23.9599 4.94518 23.0469C4.8277 22.2978 4.96397 21.7693 5.6354 20.3706C6.33035 18.9229 6.50257 18.306 6.61907 16.8467C6.69432 15.9039 6.79852 15.5322 7.07105 15.2337C7.3553 14.9225 7.61117 14.8171 8.3146 14.7216C9.46143 14.5659 10.1917 14.271 10.7919 13.7212C11.3126 13.2443 11.5305 12.7848 11.5639 12.093L11.5893 11.5687L11.2984 11.2315C10.2446 10.0103 0.0652507 1.25 0.000401091 1.25C-0.0134526 1.25 0.333312 1.68201 0.770957 2.20996ZM3.2091 26.748C3.44735 26.3285 3.32075 25.7895 2.92222 25.526C2.54568 25.2772 1.9607 25.3945 1.9607 25.7188C1.9607 25.8178 2.01576 25.8897 2.13984 25.9532C2.34879 26.06 2.36395 26.1803 2.19956 26.4258C2.03308 26.6745 2.04651 26.8932 2.23748 27.0417C2.54525 27.2812 2.98093 27.1495 3.2091 26.748Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.3133 14.9966C11.7749 15.161 11.2516 15.7281 11.0896 16.3228C10.9908 16.6855 11.0468 17.3219 11.1949 17.5184C11.434 17.8358 11.6653 17.9195 12.2915 17.9151C13.5176 17.9066 14.5834 17.384 14.7073 16.7306C14.8089 16.195 14.3408 15.4528 13.696 15.127C13.3633 14.9589 12.6557 14.8922 12.3133 14.9966ZM13.7466 16.1106C13.9356 15.8435 13.8529 15.555 13.5314 15.3598C12.919 14.9881 11.9929 15.2957 11.9929 15.8707C11.9929 16.1569 12.4759 16.4691 12.9185 16.4691C13.2131 16.4691 13.6163 16.2945 13.7466 16.1106Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="35" height="37.5" fill="white" />
            </clipPath>
          </defs>
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
      {/* <!-- Filter Modal End --> */}
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
