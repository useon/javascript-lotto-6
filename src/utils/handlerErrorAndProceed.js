import OutputView from '../views/OutputView.js';

const handlerErrorAndProceed = async (method) => {
  let retryCount = 0;
  while (retryCount !== 10) {
    try {
      return await method.call(this);
    } catch (error) {
      OutputView.printErrorMessage(error.message);
      retryCount += 1;
    }
  }
};

export default handlerErrorAndProceed;
