const weeknumber = require('../src/weeknumber');

describe('getNumberOfWeek', () => {
  it('should return one for the first week of the year', async () => {
    const date = new Date("1/1/2021");

    expect(weeknumber.getNumberOfWeek(date)).toEqual(1);
  });

  it('should return week 45 for 10th of November', async () => {
    const date = new Date("11/10/2021");

    expect(weeknumber.getNumberOfWeek(date)).toEqual(45);
  });

  it('should return correct week for Thursday', async () => {
    const date = new Date("2021-12-09T00:00:00.000Z");

    expect(weeknumber.getNumberOfWeek(date)).toEqual(49);
  });
});
