export const isOneDigitNumber = (number: Number | String) => {
  const regExp = new RegExp(/[0-9]+$/);
  return String(number).match(regExp);
};
