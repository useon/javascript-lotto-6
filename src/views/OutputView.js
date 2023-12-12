import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printErrorMessage(message) {
    Console.print(`[ERROR] ${message}`);
  },
};

export default OutputView;
