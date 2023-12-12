class Purchaser {
  #purchaseQuantity;
  constructor(amount) {
    this.#purchaseQuantity = 0;
    this.#validate(amount);
    this.#purchase(amount);
  }

  #validate(amount) {
    if (Number.isNaN(Number(amount)))
      throw new Error('[ERROR] 구매 금액은 1,000원 단위여야 합니다.');
    if (Number(amount) % 1000 !== 0)
      throw new Error('[ERROR] 구매 금액은 1,000원 단위여야 합니다.');
  }

  #purchase(amount) {
    return (this.#purchaseQuantity = Number(amount) / 1000);
  }

  get result() {
    return this.#purchaseQuantity;
  }
}

export default Purchaser;
