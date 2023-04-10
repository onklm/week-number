const weeknumber = require('../src/weeknumber');

describe('getNumberOfWeek', () => {
  it('should return one for the first week of the year', async () => {
    const date = new Date("1/1/2023");

    expect(weeknumber.getNumberOfWeek(date)).toEqual(52);
  });

  it('should return week 45 for 10th of November', async () => {
    const date = new Date("11/10/2021");

    expect(weeknumber.getNumberOfWeek(date)).toEqual(45);
  });

  it('should return correct week for Thursday in 2021', async () => {
    const date = new Date("2021-12-09T12:00:00.000");

    expect(weeknumber.getNumberOfWeek(date)).toEqual(49);
  });

  it('should return correct week for Thursday in 2023', async () => {
    const date = new Date("2023-04-06T12:00:00.000");

    expect(weeknumber.getNumberOfWeek(date)).toEqual(14);
  });
});
