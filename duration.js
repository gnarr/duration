function isSingular(value) {
  return value % 100 !== 11 && value % 10 === 1;
}
function toSingular(value) {
  return value.replace(/ies$/, 'y').replace(/s$/, '');
}
/**
 * Duration can easily convert between units. E.g '7 Weeks' to Micro Seconds.
 * Usage:
 * const sevenWeeks = new Duration('7 Weeks');
 * const milliseconds = sevenWeeks.MilliSeconds;
 *
 * @class Duration
 */
module.exports = class Duration {
  constructor(input) {
    if (!input) {
      this.milliSeconds = 0;
      return;
    }
    const parts = input.split(/([0-9]+)/);
    const number = Number(parts[1]);
    if (isNaN(number) || parts[2].length === 0) {
      throw new Error('Error in input');
    }
    const unit = parts[2].trim().toLowerCase();
    switch(unit) {
      case 'nanosecond':
      case 'nanoseconds':
        this.NanoSeconds = number;
        return;
      case 'microsecond':
      case 'microseconds':
        this.MicroSeconds = number;
        return;
      case 'millisecond':
      case 'milliseconds':
        this.MilliSeconds = number;
        return;
      case 'second':
      case 'seconds':
        this.Seconds = number;
        return;
      case 'minute':
      case 'minutes':
        this.Minutes = number;
        return;
      case 'hour':
      case 'hours':
        this.Hours = number;
        return;
      case 'day':
      case 'days':
        this.Days = number;
        return;
      case 'week':
      case 'weeks':
        this.Weeks = number;
        return;
      case 'year':
      case 'years':
        this.Years = number;
        return;
      case 'decade':
      case 'decades':
        this.Decades = number;
        return;
      case 'century':
      case 'centuries':
        this.Centuries = number;
        return;
      case 'millennium':
      case 'millenniums':
      case 'millennia':
        this.Millenniums = number;
        return;
      default:
        throw new Error('Error in input');
    }
  }
  get NanoSeconds() {
    return this.MicroSeconds * 1000;
  }
  set NanoSeconds(nanoSeconds) {
    this.MicroSeconds = nanoSeconds / 1000;
  }
  get MicroSeconds() {
    return this.milliSeconds * 1000;
  }
  set MicroSeconds(microSeconds) {
    this.milliSeconds = microSeconds / 1000;
  }
  get MilliSeconds() {
    return this.milliSeconds;
  }
  set MilliSeconds(milliSeconds) {
    this.milliSeconds = milliSeconds;
  }
  get Seconds() {
    return this.MilliSeconds / 1000;
  }
  set Seconds(seconds) {
    this.MilliSeconds = seconds * 1000;
  }
  get Minutes() {
    return this.Seconds / 60;
  }
  set Minutes(minutes) {
    this.Seconds = minutes * 60;
  }
  get Hours() {
    return this.Minutes / 60;
  }
  set Hours(hours) {
    this.Minutes = hours * 60;
  }
  get Days() {
    return this.Hours / 24;
  }
  set Days(days) {
    this.Hours = days * 24;
  }
  get Weeks() {
    return this.Days / 7;
  }
  set Weeks(weeks) {
    this.Days = weeks * 7;
  }
  get Years() {
    return this.Days / 365;
  }
  set Years(years) {
    this.Days = years * 365;
  }
  get Decades() {
    return this.Years / 10;
  }
  set Decades(decades) {
    this.Years = decades * 10;
  }
  get Centuries() {
    return this.Decades / 10;
  }
  set Centuries(centuries) {
    this.Decades = centuries * 10;
  }
  get Millenniums() {
    return this.Centuries / 10;
  }
  set Millenniums(millenniums) {
    this.Centuries = millenniums * 10;
  }
  static getters() {
    return ['NanoSeconds', 'MicroSeconds', 'MilliSeconds', 'Seconds', 'Minutes', 'Hours', 'Days', 'Weeks', 'Years', 'Decades', 'Centuries', 'Millenniums'];
  }
  toString() {
    for (const getter of Duration.getters().reverse()) {
      const test = this[getter];
      if (test >= 1 ) {
        const unit = isSingular(test) ? toSingular(getter) : getter;
        return `${test} ${unit.toLowerCase()}`;
      }
    }
    return `${this.MicroSeconds} microseconds`;
  }
};
