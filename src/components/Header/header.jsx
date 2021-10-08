import React, { useState, useEffect } from "react";
import { useHistory, withRouter } from "react-router-dom";
import { styleDark } from "../../styleDark.js";
import { styleLight } from "../../styleLight.js";

import { connect } from "react-redux";
import { setMetaMask, deleteMetaMask, Web3Object,Web3Connected } from "../../redux/actions/web3action";
import { blockChainConfig } from "../../constants/config";
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
} = selectedBlockChain;

const Web3 = require("web3");

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showFlag: false,
      showSpinner: true,
      showWalletConnectDialog: false,
      theme: "",
      selectedTab: "gojiswap",
    };
  }

  addContract(calledFor, provider = null) {
    // let web3ForAliaPrice;
    if (
      calledFor === "metamask" &&
      Web3.givenProvider &&
      Web3.givenProvider.networkVersion === networkIdTestNet &&
      Web3.givenProvider.networkVersion === networkIdMainNet
    ) {
      this.props.Web3Object(Web3.givenProvider);
      this.props.Web3Connected(true);
    } 
  }

  clearReducer() {
    this.props.setMetaMask("");
  }

  async connectWithWalletMetaMask(calledFor = "connected") {
    if (window.screen.width > 768) {
      let ethereum;
      console.log(window.ethereum);
      if (typeof window.ethereum !== "undefined") {
        ethereum = window.ethereum;
        if (ethereum.networkVersion !== networkIdTestNet) {
          return;
        }
        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });

        localStorage.setItem("accounts", accounts[0]);
        localStorage.setItem("connectedWith", "metamask");
        localStorage.setItem("userConnected", true);

        if (accounts.length > 0) {
          // console.log("accounts", accounts[0]);
          this.props.setMetaMask(accounts[0]);
        }

        if (accounts.length === 0) {
          this.clearReducer();
        }

        ethereum.on("networkChanged", (accounts) => {
          // console.log(accounts);
          // this.clearReducer();
          this.addContract("metamask");
          this.props.setMetaMask("");
          if (accounts !== networkIdMainNet) {
          }
        });

        this.addContract("metamask");
      } else {
        this.clearReducer();
      }
    } else {
      return;
    }
  }

  async connectWithWalletConnect(provider) {
    localStorage.setItem("accounts", provider.accounts[0]);
    localStorage.setItem("connectedWith", "walletConnect");
    localStorage.setItem("userConnected", true);
    this.props.setMetaMask(provider.accounts[0]);
    this.addContract("walletConnect", provider);
  }

  connectWithWallet(calledFor) {
    if (calledFor === "metamask") {
      this.connectWithWalletMetaMask();
    }

  }

  componentDidMount(prevProps) {
    const account = localStorage.getItem("accounts");
    const userlogout = localStorage.getItem("logout");

    setInterval(() => {
      let web3 = "";
      if (typeof window.ethereum !== "undefined") {
        web3 = new Web3(Web3.givenProvider);
      }
      if (web3 !== "") {
        web3.eth
          .getAccounts()
          .then((acc) => {
            if (
              acc.length === 0 &&
              localStorage.getItem("userConnected") === "true" &&
              localStorage.getItem("connectedWith") === "metamask"
            ) {
              localStorage.removeItem("userConnected");
              localStorage.removeItem("connectedWith");
              window.location.reload();
            }
          })
          .catch((e) => {
            // console.log(e);
          });
      }
    }, 1000);

    if (localStorage.getItem("userConnected") === "true") {
      setTimeout(() => {
        // document.getElementById("connectButton").click();
        const connectedWith = localStorage.getItem("connectedWith");
        if (connectedWith === "metamask") {
          this.connectWithWallet("metamask");
        }
      }, 600);

        // const selTab = sessionStorage.getItem("selectedTab");
    // if (selTab) {
    // this.setState({ selectedTab:selTab});
    // } else {
    //   sessionStorage.setItem("selectedTab", "gojiswap");
    // }
    if (!localStorage.getItem("theme")) {
      localStorage.setItem("theme", "light");
    }
    this.setState({
      theme: localStorage.getItem("theme")
        ? localStorage.getItem("theme")
        : "light",
    });
    }

    window.ethereum !== undefined &&
      window.ethereum.on("accountsChanged", (acc) => {
        if (this.props.metaMaskAddress !== "" && acc.length > 0) {
          this.handleLogout(false);
          this.clearReducer();
          this.connectWithWallet("metamask");
        }
      });

    if (!this.props.metaMaskAddress && !account && !userlogout) {
      this.setState({ showWalletConnectDialog: true });
    }
  }

  handleButtonClick = () => {
    if (localStorage.getItem("theme")) {
      if (localStorage.getItem("theme") === "dark") {
        localStorage.setItem("theme", "light");
        this.setState({ theme: "light" });
      } else {
        localStorage.setItem("theme", "dark");
        this.setState({ theme: "dark" });
      }
    }
  };

  //   const changeSelectedTab = (key) => {
  //     sessionStorage.setItem("selectedTab", key);
  // this.setState({ selectedTab:key});
  //     props.history.push(`/${key}`);
  //   };

  handleLogout()
  {
    sessionStorage.removeItem("userConnected");
    sessionStorage.removeItem("userAccount");
    sessionStorage.removeItem("userBalance");
    localStorage.removeItem("walletconnect");
    localStorage.removeItem("connectedWith");
    localStorage.removeItem("accounts");
    localStorage.removeItem("connectorId");
    localStorage.removeItem("userConnected");
    this.props.Web3Connected(false)
    this.props.Web3Object({})
    this.props.setMetaMask("")
  }

  render() {
    window.ethereum !== undefined &&
      window.ethereum.on("accountsChanged", (acc) => {
        if (acc.length === 0) {
          this.handleLogout();
        }
      });

      return (
        <>
          <div>
            <div className="d-flex w-auto d-none d-sm-flex">
              <a
                className="me-3 theme-toggle d-flex align-items-center"
                onClick={this.handleButtonClick}
              >
                <svg
                  width="69"
                  height="24"
                  viewBox="0 0 69 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.66002 4.20002L6.05002 4.59002C6.44002 4.97002 6.44002 5.61002 6.05002 5.99002L6.04002 6.00002C5.65002 6.39002 5.03002 6.39002 4.64002 6.00002L4.25002 5.61002C3.86002 5.23002 3.86002 4.60002 4.25002 4.21002L4.26002 4.20002C4.64002 3.82002 5.27002 3.81002 5.66002 4.20002Z"
                    fill="white"
                  />
                  <path
                    d="M1.99 10.95H3.01C3.56 10.95 4 11.39 4 11.95V11.96C4 12.51 3.56 12.95 3 12.94H1.99C1.44 12.94 1 12.5 1 11.95V11.94C1 11.39 1.44 10.95 1.99 10.95Z"
                    fill="white"
                  />
                  <path
                    d="M12 1H12.01C12.56 1 13 1.44 13 1.99V2.96C13 3.51 12.56 3.95 12 3.94H11.99C11.44 3.94 11 3.5 11 2.95V1.99C11 1.44 11.44 1 12 1Z"
                    fill="white"
                  />
                  <path
                    d="M18.3402 4.20002C18.7302 3.82002 19.3602 3.82002 19.7502 4.21002C20.1402 4.60002 20.1402 5.22002 19.7502 5.61002L19.3602 6.00002C18.9802 6.39002 18.3502 6.39002 17.9602 6.00002L17.9502 5.99002C17.5602 5.61002 17.5602 4.98002 17.9502 4.59002L18.3402 4.20002Z"
                    fill="white"
                  />
                  <path
                    d="M18.3302 19.7L17.9402 19.31C17.5502 18.92 17.5502 18.3 17.9502 17.9C18.3302 17.52 18.9602 17.51 19.3502 17.9L19.7402 18.29C20.1302 18.68 20.1302 19.31 19.7402 19.7C19.3502 20.09 18.7202 20.09 18.3302 19.7Z"
                    fill="white"
                  />
                  <path
                    d="M20 11.95V11.94C20 11.39 20.44 10.95 20.99 10.95H22C22.55 10.95 22.99 11.39 22.99 11.94V11.95C22.99 12.5 22.55 12.94 22 12.94H20.99C20.44 12.94 20 12.5 20 11.95Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6 11.95C6 8.63995 8.69 5.94995 12 5.94995C15.31 5.94995 18 8.63995 18 11.95C18 15.26 15.31 17.95 12 17.95C8.69 17.95 6 15.26 6 11.95ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79081 14.2091 7.99995 12 7.99995C9.79086 7.99995 8 9.79081 8 12C8 14.2091 9.79086 16 12 16Z"
                    fill="white"
                  />
                  <path
                    d="M12 22.9H11.99C11.44 22.9 11 22.46 11 21.91V20.95C11 20.4 11.44 19.96 11.99 19.96H12C12.55 19.96 12.99 20.4 12.99 20.95V21.91C12.99 22.46 12.55 22.9 12 22.9Z"
                    fill="white"
                  />
                  <path
                    d="M5.65982 19.69C5.26982 20.08 4.63982 20.08 4.24982 19.69C3.85982 19.3 3.85982 18.68 4.23982 18.28L4.62982 17.89C5.01982 17.5 5.64982 17.5 6.03982 17.89L6.04982 17.9C6.42982 18.28 6.43982 18.91 6.04982 19.3L5.65982 19.69Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M49.1532 13.5796L49.1534 13.5807C49.773 16.782 52.4218 19.3384 55.6468 19.856L55.65 19.8565C58.041 20.2443 60.2623 19.581 61.942 18.254C56.3547 16.2585 52.9746 10.3231 54.2624 4.45887C50.6982 5.74265 48.3579 9.48316 49.1532 13.5796ZM55.0081 2.18125C49.766 3.22401 46.0987 8.34018 47.1898 13.9608C47.9698 17.9908 51.2798 21.1808 55.3299 21.8308C58.851 22.4018 62.0953 21.1315 64.266 18.8294C64.2763 18.8185 64.2864 18.8077 64.2966 18.7968C64.4383 18.6452 64.5755 18.4891 64.7077 18.3288C64.7103 18.3257 64.7128 18.3226 64.7154 18.3194C64.8851 18.1133 65.0467 17.9002 65.1999 17.6808C65.4099 17.3708 65.2399 16.9308 64.8699 16.8908C64.5112 16.8503 64.16 16.7916 63.8168 16.7159C63.7962 16.7113 63.7756 16.7067 63.755 16.702C63.6674 16.6821 63.5802 16.661 63.4936 16.6388C63.4917 16.6383 63.4899 16.6379 63.488 16.6374C58.0232 15.2354 54.7249 9.45077 56.454 4.00488C56.4547 4.00285 56.4553 4.00083 56.456 3.99881C56.4873 3.90025 56.5203 3.8018 56.555 3.70349C56.5563 3.69982 56.5576 3.69614 56.5589 3.69246C56.6766 3.35992 56.8134 3.029 56.9699 2.70076C57.1299 2.36076 56.8499 1.98076 56.4699 2.00076C56.1952 2.0145 55.9238 2.03919 55.6559 2.07439C55.6515 2.07498 55.647 2.07557 55.6426 2.07616C55.4411 2.10292 55.2416 2.13563 55.0444 2.17411C55.0323 2.17647 55.0202 2.17885 55.0081 2.18125Z"
                    fill="white"
                  />
                  <line x1="34.5" y1="3" x2="34.5" y2="21" stroke="white" />
                </svg>
              </a>
              <a className="m-0">
                <button
                id={"connectButton"}
                  className="btn theme-btn m-0 top-btn"
                  onClick={() =>this.props.web3connected ? this.handleLogout() : this.connectWithWalletMetaMask()}
                >
                  {this.props.web3connected ?
                 "Connected" :"Connect to wallet"}
                </button>
              </a>
            </div>
          </div>
          <style
            dangerouslySetInnerHTML={{
              __html: this.state.theme === "dark" ? styleDark : styleLight,
            }}
          />
        </>
      );
  }
}

const mapDispatchToProps = {
  setMetaMask,
  deleteMetaMask,
  Web3Connected,
  Web3Object
};

const mapStateToProps = (state, ownProps) => {
  return {
    metaMaskAddress: state.web3.metaMaskAddress,
    web3connected: state.web3.web3connected,

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));

