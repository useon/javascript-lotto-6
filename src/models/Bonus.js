class Bonus {
  #bonusNumber;
  constructor(inputBonusNumber, lottoNumbers) {
    this.#bonusNumber = 0;
    this.#validate(inputBonusNumber, lottoNumbers);
    this.convert(inputBonusNumber);
  }

  #validate(inputBonusNumber, lottoNumbers) {
    if (lottoNumbers.includes(Number(inputBonusNumber)))
      throw new Error(
        '[ERROR] 보너스 번호는 당첨 번호와 중복되지 않아야 합니다.',
      );
    if (
      Number(inputBonusNumber) < 1 ||
      Number(inputBonusNumber) > 45 ||
      Number.isNaN(Number(inputBonusNumber))
    )
      throw new Error('[ERROR] 보너스 번호는 숫자 1 이상 45 이하여야 합니다.');
  }

  convert(inputBonusNumber) {
    this.#bonusNumber = Number(inputBonusNumber);
  }

  get result() {
    return this.#bonusNumber;
  }
}

export default Bonus;
