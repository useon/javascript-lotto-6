import Purchaser from '../models/Purchaser.js';
import handlerErrorAndProceed from '../utils/handlerErrorAndProceed.js';
import InputView from '../views/InputView.js';

class Controller {
  #purchaseQuantity;

  constructor() {
    this.#purchaseQuantity = 0;
  }

  async progress() {
    this.#purchaseQuantity = await handlerErrorAndProceed(
      this.setPurchaseQuantity,
    );
  }

  async setPurchaseQuantity() {
    const inputValue = await InputView.readPurchaseAmount();
    return new Purchaser(inputValue).result;
  }
}

export default Controller;
