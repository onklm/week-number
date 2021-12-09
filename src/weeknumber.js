const MILLISECONDS_PER_DAY = 86400000; // 24 * 60 * 60 * 1000

const getNumberOfWeek = (dt) => {
  const date = dt || new Date();
  const firstDayOfYear = new Date(date.getFullYear(), 0, 1);

  const weekNumber = Math.ceil((((date.getTime() - firstDayOfYear.getTime()) / MILLISECONDS_PER_DAY) + 1) / 7);

  if (date.getDay() === 4) {
    return weekNumber - 1;
  }

  return weekNumber;
};

module.exports = { getNumberOfWeek };
