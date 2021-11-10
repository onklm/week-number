const MILLISECONDS_PER_DAY = 86400000; // 24 * 60 * 60 * 1000

const getNumberOfWeek = (dt) => {
  const date = dt || new Date();
  const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
  const pastDaysOfYear = (date.valueOf() - firstDayOfYear.valueOf()) / MILLISECONDS_PER_DAY;

  return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
};

module.exports = { getNumberOfWeek };
