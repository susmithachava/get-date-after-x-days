const addDays = require("date-fns/addDays");
const getDateAfterXDays = (n) => {
  const result = addDays(new Date(2020, 7, 22), n);
  return `${result.getDate()}-${result.getMonth() + 1}-${result.getFullYear()}`;
};
module.exports = getDateAfterXDays;
