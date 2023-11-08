import RandomNumberGenerator from './utils/RandomNumberGenerator.js';

class Issuer {
  #lottoCount;

  #tickets;

  constructor(purchaseAmount) {
    this.#lottoCount = purchaseAmount / 1000;
    this.#tickets = this.#generate();
  }

  #generate() {
    const issuedLottoList = [];
    while (issuedLottoList.length < this.#lottoCount) {
      const sortedRandomNumbers = RandomNumberGenerator().sort((a, b) => a - b);
      issuedLottoList.push(sortedRandomNumbers);
    }
    return issuedLottoList;
  }

  get tickets() {
    return this.#tickets;
  }
}

export default Issuer;
