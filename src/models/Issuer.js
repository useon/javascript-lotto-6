import lottery from '../utils/lottery.js';

class Issuer {
  #tickets;

  constructor(quantity) {
    this.#tickets = this.issue(quantity);
  }

  issue(quantity) {
    const ticketArr = [];
    while (ticketArr.length < quantity) {
      const ticket = lottery().sort((a, b) => a - b);
      ticketArr.push(ticket);
    }
    return ticketArr;
  }

  get result() {
    return this.#tickets;
  }
}

export default Issuer;
