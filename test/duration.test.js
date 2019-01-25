const Duration = require('../duration');

test('convert nanoseconds to microseconds', () => {
  expect(new Duration('4000 nanoseconds').MicroSeconds).toBe(4);
});

test('convert microseconds to milliseconds', () => {
  expect(new Duration('9000 microseconds').milliSeconds).toBe(9);
});

test('convert milliseconds to seconds', () => {
  expect(new Duration('6000 milliseconds').Seconds).toBe(6);
});

test('convert seconds to minutes', () => {
  expect(new Duration('120 seconds').Minutes).toBe(2);
});

test('convert minutes to hours', () => {
  expect(new Duration('360 minutes').Hours).toBe(6);
});

test('convert hours to days', () => {
  expect(new Duration('72 hours').Days).toBe(3);
});

test('convert days to weeks', () => {
  expect(new Duration('14 days').Weeks).toBe(2);
});

test('convert weeks to years', () => {
  expect(new Duration('365 days').Years).toBe(1);
});

test('convert days to years', () => {
  expect(new Duration('365 weeks').Years).toBe(7);
});

test('convert years to decades', () => {
  expect(new Duration('30 years').Decades).toBe(3);
});

test('convert decades to centuries', () => {
  expect(new Duration('40 decades').Centuries).toBe(4);
});

test('convert centuries to millenniums', () => {
  expect(new Duration('50 centuries').Millenniums).toBe(5);
});

test('convert nanoseconds to millenniums', () => {
  expect(new Duration('63072000000000000000 nanoseconds').Millenniums).toBe(2);
});

test('convert millenniums to nanoseconds', () => {
  expect(new Duration('2 millenniums').NanoSeconds).toBe(63072000000000000000);
});

test('convert millenniums to centuries', () => {
  expect(new Duration('2 millenniums').Centuries).toBe(20);
});

test('convert centuries to decades', () => {
  expect(new Duration('60 decades').Centuries).toBe(6);
});

test('convert decades to years', () => {
  expect(new Duration('20 years').Decades).toBe(2);
});

test('convert years to weeks', () => {
  expect(new Duration('7 years').Weeks).toBe(365);
});

test('convert years to days', () => {
  expect(new Duration('5 years').Days).toBe(1825);
});

test('convert weeks to days', () => {
  expect(new Duration('5 weeks').Days).toBe(35);
});

test('convert days to hours', () => {
  expect(new Duration('2 days').Hours).toBe(48);
});

test('convert hours to minutes', () => {
  expect(new Duration('7 hours').Minutes).toBe(420);
});

test('convert minutes to seconds', () => {
  expect(new Duration('3 minutes').Seconds).toBe(180);
});

test('convert seconds to milliseconds', () => {
  expect(new Duration('7 seconds').MilliSeconds).toBe(7000);
});

test('convert milliseconds to microseconds', () => {
  expect(new Duration('2 milliseconds').MicroSeconds).toBe(2000);
});

test('convert microseconds to nanoseconds', () => {
  expect(new Duration('5 microseconds').NanoSeconds).toBe(5000);
});

test('convert floating point microseconds to nanoseconds', () => {
  expect(new Duration('8.432 microseconds').NanoSeconds).toBe(8432);
});

test('convert floating point microseconds to milliseconds', () => {
  expect(new Duration('0.432 microseconds').MilliSeconds).toBe(0.000432);
});

test('Convert to human readable form', () => {
  expect(new Duration('840 seconds').toString()).toBe("14 minutes");
});

test('should fail on bad input', () => {
  expect(() => new Duration('20 meconds')).toThrow();
  expect(() => new Duration('10')).toThrow();
  expect(() => new Duration('minute')).toThrow();
  expect(() => new Duration(8000)).toThrow();
});

test('should not fail on good input', () => {
  expect(() => new Duration("10488.469970703125 milliseconds")).not.toThrow();
});

test('should show input on error', () => {
  expect(() => new Duration("10488,469970703125 milliseconds")).toThrowError("Error in input: '10488,469970703125 milliseconds'");
});

test('should create a new instance', () => {
  expect(Duration.fromMilliseconds(18000).Seconds).toBe(18);
});
