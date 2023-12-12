class Comparator {
  #winningHistory;

  constructor(lottoNumbers, bonusNumber, tickts) {
    // 로또 번호와 당첨 번호와 티켓들 이렇게 받아오고
    this.#winningHistory = new Map([
      [5000, 0],
      [50000, 0],
      [1500000, 0],
      [30000000, 0],
      [2000000000, 0],
    ]);
    this.comparate(lottoNumbers, bonusNumber, tickts);
  }

  // 비교하기
  comparate(lottoNumbers, bonusNumber, tickts) {
    tickts.forEach((tickt) => {
      const matchCount = lottoNumbers.filter((number) =>
        tickt.includes(number),
      ).length;
      const isBonusMatch = tickt.includes(bonusNumber);
      if (matchCount === 3)
        this.#winningHistory.set(5000, this.#winningHistory.get(5000) + 1);
      if (matchCount === 4)
        this.#winningHistory.set(50000, this.#winningHistory.get(50000) + 1);
      if (matchCount === 5 && !isBonusMatch)
        this.#winningHistory.set(
          1500000,
          this.#winningHistory.get(1500000) + 1,
        );
      if (matchCount === 5 && isBonusMatch)
        this.#winningHistory.set(
          30000000,
          this.#winningHistory.get(30000000) + 1,
        );
      if (matchCount === 6)
        this.#winningHistory.set(
          2000000000,
          this.#winningHistory.get(2000000000) + 1,
        );
    });
  }

  get result() {
    return this.#winningHistory;
  }
}

export default Comparator;
