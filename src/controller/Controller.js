import Issuer from '../models/Issuer.js';
import Purchaser from '../models/Purchaser.js';
import handlerErrorAndProceed from '../utils/handlerErrorAndProceed.js';
import InputView from '../views/InputView.js';

class Controller {
  #purchaseQuantity;

  #tickts;

  constructor() {
    this.#purchaseQuantity = 0;
    this.#tickts = [];
  }

  async progress() {
    this.#purchaseQuantity = await handlerErrorAndProceed(
      this.setPurchaseQuantity,
    );
    this.#tickts = this.setTickets(this.#purchaseQuantity);
  }

  async setPurchaseQuantity() {
    const inputValue = await InputView.readPurchaseAmount();
    return new Purchaser(inputValue).result;
  }

  setTickets(quantity) {
    return new Issuer(quantity).result;
  }
}

export default Controller;
