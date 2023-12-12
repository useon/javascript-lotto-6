class Calculator {
  #rateOfReturn;
  constructor(purchaseQuantity, winningHistory) {
    const purchaseAmount = this.calculatePurchaseAmount(purchaseQuantity);
    const totalWinningAmount = this.calculateTotalWinningAmount(winningHistory);
    this.#rateOfReturn = this.calculateRateOfReturn(
      purchaseAmount,
      totalWinningAmount,
    );
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
    console.log(purchaseAmount, totalWinningAmount);
    return ((totalWinningAmount / purchaseAmount) * 100).toFixed(1);
  }

  get result() {
    return this.#rateOfReturn;
  }
}

export default Calculator;
