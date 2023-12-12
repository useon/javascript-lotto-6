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
  async progress() {
    const purchaseQuantity = await handlerErrorAndProceed(
      this.setPurchaseQuantity,
    );
    const tickts = this.setTickets(purchaseQuantity);
    OutputView.printTickets(tickts);
    const lottoNumbers = await handlerErrorAndProceed(this.setLottoNumbers);
    const bonusNumber = await handlerErrorAndProceed(
      this.setBonusNumber,
      lottoNumbers,
    );
    const winningHistory = this.setWinningHistory(
      lottoNumbers,
      bonusNumber,
      tickts,
    );
    OutputView.printWinningHistory(winningHistory);
    const rateOfReturnOutPutFormat = new Calculator(
      purchaseQuantity,
      winningHistory,
    ).result;
    OutputView.printRateOfReturn(rateOfReturnOutPutFormat);
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
