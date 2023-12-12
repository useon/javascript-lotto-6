import Issuer from '../models/Issuer.js';
import Purchaser from '../models/Purchaser.js';
import handlerErrorAndProceed from '../utils/handlerErrorAndProceed.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';

class Controller {
  #purchaseQuantity;

  #tickts;

  #lottoNumbers;

  constructor() {
    this.#purchaseQuantity = 0;
    this.#tickts = [];
    this.#lottoNumbers = [];
  }

  async progress() {
    this.#purchaseQuantity = await handlerErrorAndProceed(
      this.setPurchaseQuantity,
    );
    this.#tickts = this.setTickets(this.#purchaseQuantity);
    OutputView.printTickets(this.#tickts);
    this.#lottoNumbers = await handlerErrorAndProceed(this.setLottoNumbers);
  }

  async setPurchaseQuantity() {
    const inputValue = await InputView.readPurchaseAmount();
    return new Purchaser(inputValue).result;
  }

  setTickets(quantity) {
    return new Issuer(quantity).result;
  }

  async setLottoNumbers() {
    const inputValue = await InputView.readLottoNumbers();
  }
}

export default Controller;
