import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printErrorMessage(message) {
    Console.print(`[ERROR] ${message}`);
  },

  printTickets(tickets) {
    Console.print(`\n${tickets.length}개를 구매했습니다.`);
    tickets.forEach((ticket) => {
      Console.print(`[${ticket.join(', ')}]`);
    });
  },
};

export default OutputView;
