import { blockChainConfig } from "../constants/config";
const selectedBlockChain =
  blockChainConfig[
    sessionStorage.getItem("selectedBlockChain")
      ? sessionStorage.getItem("selectedBlockChain")
      : 0
  ];

const {
  uniswapTokenConConfig: { add: UniSwapTokenConAdd },
  uniswapTokenConConfig: { abi: UniSwapTokenConAbi },
  oneinchTokenConConfig: { add: OneinchTokenConAdd },
  oneinchTokenConConfig: { abi: OneinchTokenConAbi },
  daiTokenConConfig: { add: DaiTokenConAdd },
  daiTokenConConfig: { abi: DaiTokenConAbi },
  ethTokenConConfig: { add: EthTokenConAdd },
  ethTokenConConfig: { abi: EthTokenConAbi },
} = selectedBlockChain;

export const tokens = [
  {
    value: "ETH",
    imageSrc: "img/eth-input-ic.svg",
    key: "ETH",
    address: EthTokenConAdd,
    abi: EthTokenConAbi,
  },
  {
    value: "UNI",
    imageSrc: "img/Hanu-input-ic.svg",
    key: "HANU",
    address: UniSwapTokenConAdd,
    abi: UniSwapTokenConAbi,
  },
  {
    value: "DAI",
    imageSrc: "img/usdtc-input-ic.svg",
    key: "USDTC",
    address: DaiTokenConAdd,
    abi: DaiTokenConAbi,
  },
  // {
  //   value: "1inch",
  //   imageSrc: "img/usdtc-input-ic.svg",
  //   key: "1inch",
  //   address: OneinchTokenConAdd,
  //   abi: OneinchTokenConAbi,
  // },
];
