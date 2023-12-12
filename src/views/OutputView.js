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

  printWinningHistory(winningHistory) {
    Console.print('\n당첨 통계');
    Console.print('---');
    Console.print(`3개 일치 (5,000원) - ${winningHistory.get(5000)}개`);
    Console.print(`4개 일치 (50,000원) - ${winningHistory.get(50000)}개`);
    Console.print(`5개 일치 (1,500,000원) - ${winningHistory.get(1500000)}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${winningHistory.get(
        30000000,
      )}개`,
    );
    Console.print(
      `6개 일치 (2,000,000,000원) - ${winningHistory.get(2000000000)}개`,
    );
  },
};

export default OutputView;
