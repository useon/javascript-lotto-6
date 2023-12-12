import InputView from '../views/InputView.js';

class Controller {
  #purchaseAmount;

  constructor() {
    this.#purchaseAmount = 0;
  }

  async progress() {
    this.setPurchaseAmount();
  }

  async setPurchaseAmount() {
    const inputValue = await InputView.readPurchaseAmount();
  }
}

export default Controller;
