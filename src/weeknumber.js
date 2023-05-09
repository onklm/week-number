const getWeekNumber = (date = new Date()) => {
  const thursday = new Date(date);
  thursday.setDate(date.getDate() - ((date.getDay() + 6) % 7) + 3); // Get Thursday of the same week
  const firstThursday = new Date(thursday.getFullYear(), 0, 4); // Get the first Thursday of the year
  const diffInMilliseconds = thursday - firstThursday;
  const daysBetween = diffInMilliseconds / 86400000;
  return 1 + Math.floor(daysBetween / 7);
}

module.exports = { getWeekNumber };
