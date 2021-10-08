import Big from "big.js";
export function validateInput(input) {
  if (input === "" || parseFloat(input) <= 0) {
    return false;
  }

  if (input.includes(".")) {
    let afterDecimal = input.split(".")[1];
    let beforeDecimal = input.split(".")[0];

    if (afterDecimal.length > 18) {
      return false;
    }

    let nonZeroInput = true;
    for (let i = 0; i < afterDecimal.length; i++) {
      if (parseInt(afterDecimal[i]) >= 1 && parseInt(afterDecimal[i]) <= 9) {
        nonZeroInput = false;
      }
    }

    let nonZeroInputBeforDecimal = true;
    for (let i = 0; i < beforeDecimal.length; i++) {
      if (parseInt(beforeDecimal[i]) >= 1 && parseInt(beforeDecimal[i]) <= 9) {
        nonZeroInputBeforDecimal = false;
      }
    }

    if (nonZeroInput && nonZeroInputBeforDecimal) {
      return false;
    }
  }

  if (input.includes(".") && (!input.split(".")[1] || !input.split(".")[0])) {
    return false;
  }

  let nonZeroInput = true;
  for (let i = 0; i < input.length; i++) {
    if (parseInt(input[i]) >= 1 && parseInt(input[i]) <= 9) {
      nonZeroInput = false;
    }
  }

  if (nonZeroInput) {
    return false;
  }

  return true;
}

export const divideNo = (res) => {
  if (typeof res === "string" && res === "") {
    res = "0";
  }
  let bigNo = new Big(res);
  let bigNo1 = new Big(Math.pow(10, 18));
  let number = bigNo.div(bigNo1).toFixed(18);
  return number;
};

export const isLess = (firstNo, secondNo) => {
  let fNo = new Big(firstNo);
  let sNo = new Big(secondNo);
  if (fNo.lt(sNo)) {
    return true;
  }
  return false;
};

export const isLessOrEqual = (firstNo, secondNo) => {
  let fNo = new Big(firstNo);
  let sNo = new Big(secondNo);
  if (fNo.lte(sNo)) {
    return true;
  }
  return false;
};


export const isGreater = (firstNo, secondNo) => {
  let fNo = new Big(firstNo);
  let sNo = new Big(secondNo);
  if (fNo.gt(sNo)) {
    return true;
  }
  return false;
};

export const isGreaterOrEqual = (firstNo, secondNo) => {
  let fNo = new Big(firstNo);
  let sNo = new Big(secondNo);
  if (fNo.gte(sNo)) {
    return true;
  }
  return false;
};
