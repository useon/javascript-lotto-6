const lottoNumbersValidation = (inputValue) => {
  const inputValueArr = inputValue.split('');
  const commaCount = inputValueArr.filter((e) => e === ',').length;
  if (commaCount !== 5)
    throw new Error('[ERROR] 로또 번호는 콤마로 구분되어야 합니다.');
};

export default lottoNumbersValidation;
