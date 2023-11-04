import InputView from './InputView.js';
import LottoTicket from './LottoTicket.js';
import OutputView from './OutputView.js';

class Controller {
  #lottoTicketList;

  async progress() {
    try {
      await this.#generateLottoTicketList();
    } catch (error) {
      OutputView.printMessage(error.message);
      await this.#generateLottoTicketList();
    }
    this.#displayLottoTicket();
  }

  async #generateLottoTicketList() {
    const inputLottoPurchaseAmount = await InputView.readLottoPurchaseAmount();
    this.#lottoTicketList = new LottoTicket(
      inputLottoPurchaseAmount,
    ).getLottoList;
  }

  #displayLottoTicket() {
    OutputView.printLottoTicket(this.#lottoTicketList);
  }
}

export default Controller;
