import { Random } from '@woowacourse/mission-utils';

const lottery = () => {
  const ticket = Random.pickUniqueNumbersInRange(1, 45, 6);
  return ticket;
};

export default lottery;
