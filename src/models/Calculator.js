class Calculator {
  #outputFormatRateOfReturn;
  constructor(purchaseQuantity, winningHistory) {
    const purchaseAmount = this.calculatePurchaseAmount(purchaseQuantity);
    const totalWinningAmount = this.calculateTotalWinningAmount(winningHistory);
    const rateOfReturn = this.calculateRateOfReturn(
      purchaseAmount,
      totalWinningAmount,
    );
    this.#outputFormatRateOfReturn = this.setOutPutFormat(rateOfReturn);
  }

  calculatePurchaseAmount(purchaseQuantity) {
    return purchaseQuantity * 1000;
  }

  calculateTotalWinningAmount(winningHistory) {
    const winningAmountArr = [];
    winningHistory.forEach((count, winningAmount) => {
      winningAmountArr.push(winningAmount * count);
    });
    return winningAmountArr.reduce((a, b) => a + b, 0);
  }

  calculateRateOfReturn(purchaseAmount, totalWinningAmount) {
    return ((totalWinningAmount / purchaseAmount) * 100).toFixed(1);
  }

  setOutPutFormat(rateOfReturn) {
    const convertOutPutFormat = rateOfReturn
      .toString()
      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
    return convertOutPutFormat;
  }

  get result() {
    return this.#outputFormatRateOfReturn;
  }
}

export default Calculator;
