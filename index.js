function produceDrivingRange(blockRange) {
  return function calculateRange(startBlock, endBlock) {
    const startBlockInt = startBlock.slice(0,-2);
    const endBlockInt = endBlock.slice(0,-2);
    const blockDiff = endBlockInt - startBlockInt
    const rangeVal = Math.abs(blockRange - blockDiff)

    if (blockDiff <= blockRange) {
      return `within range by ${rangeVal}`
    } else {
      return `${rangeVal} blocks out of range`
    }
  }
}

function produceTipCalculator(tipPercetange) {
  return function(tripPrice) {
    return tripPrice * tipPercetange;
  }
}

function createDriver() {
  let driverId = 0

  return class {
    constructor(name) {
      this.name = name;
      this.id = ++driverId;
    }

  }
}
