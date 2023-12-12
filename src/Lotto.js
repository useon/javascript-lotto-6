class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== numbers.length) {
      throw new Error('[ERROR] 로또 번호는 서로 다른 숫자 6개여야 합니다.');
    }
    numbers.forEach((number) => {
      if (number < 1 || number > 45 || Number.isNaN(number)) {
        throw new Error('[ERROR] 로또 번호는 숫자 1 이상 45 이하여야 합니다.');
      }
    });
  }

  get result() {
    return this.#numbers;
  }
}

export default Lotto;
