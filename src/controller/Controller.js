import Lotto from '../Lotto.js';
import Bonus from '../models/Bonus.js';
import Calculator from '../models/Calculator.js';
import Comparator from '../models/Comparator.js';
import Issuer from '../models/Issuer.js';
import Purchaser from '../models/Purchaser.js';
import handlerErrorAndProceed from '../utils/handlerErrorAndProceed.js';
import lottoNumbersValidation from '../utils/lottoNumbersValidation.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';

class Controller {
  #purchaseQuantity;

  #tickts;

  #lottoNumbers;

  #bonusNumber;

  #winningHistory;

  constructor() {
    this.#purchaseQuantity = 0;
    this.#tickts = [];
    this.#lottoNumbers = [];
    this.#bonusNumber = 0;
  }

  async progress() {
    this.#purchaseQuantity = await handlerErrorAndProceed(
      this.setPurchaseQuantity,
    );
    this.#tickts = this.setTickets(this.#purchaseQuantity);
    OutputView.printTickets(this.#tickts);
    this.#lottoNumbers = await handlerErrorAndProceed(this.setLottoNumbers);
    this.#bonusNumber = await handlerErrorAndProceed(
      this.setBonusNumber,
      this.#lottoNumbers,
    );
    this.#winningHistory = this.setWinningHistory(
      this.#lottoNumbers,
      this.#bonusNumber,
      this.#tickts,
    );
    OutputView.printWinningHistory(this.#winningHistory);
    const rateOfReturn = new Calculator(
      this.#purchaseQuantity,
      this.#winningHistory,
    ).result;
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
    lottoNumbersValidation(inputValue);
    const convertStringToArray = inputValue.split(',').map((e) => Number(e));
    return new Lotto(convertStringToArray).result;
  }

  async setBonusNumber(lottoNumbers) {
    const inputValue = await InputView.readBonusNumber();
    return new Bonus(inputValue, lottoNumbers).result;
  }

  setWinningHistory(lottoNumbers, bonusNumber, tickts) {
    return new Comparator(lottoNumbers, bonusNumber, tickts).result;
  }
}

export default Controller;
