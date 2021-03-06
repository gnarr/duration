export interface IDuration {
  NanoSeconds: number;
  MicroSeconds: number;
  MilliSeconds: number;
  Seconds: number;
  Minutes: number;
  Hours: number;
  Days: number;
  Weeks: number;
  Months: number;
  Years: number;
  Decades: number;
  Centuries: number;
  Millenniums: number;
}

/**
 * Duration can easily convert between units. E.g '7 Weeks' to Micro Seconds.
 * Usage:
 * const sevenWeeks = new Duration('7 Weeks');
 * const milliseconds = sevenWeeks.MilliSeconds;
 *
 * @class Duration
 */
export class Duration implements IDuration {
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
  get Months() {
    return this.Years * 12;
  }
  set Months(months) {
    this.Years = months / 12;
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
  public static fromNanoseconds(nanoseconds: number) {
    const duration = new Duration();
    duration.NanoSeconds = nanoseconds;
    return duration;
  }
  public static fromMicroSeconds(microseconds: number) {
    const duration = new Duration();
    duration.MicroSeconds = microseconds;
    return duration;
  }
  public static fromMilliseconds(milliSeconds: number) {
    const duration = new Duration();
    duration.MilliSeconds = milliSeconds;
    return duration;
  }
  public static fromSeconds(seconds: number) {
    const duration = new Duration();
    duration.Seconds = seconds;
    return duration;
  }
  public static fromMinutes(minutes: number) {
    const duration = new Duration();
    duration.Minutes = minutes;
    return duration;
  }
  public static fromHours(hours: number) {
    const duration = new Duration();
    duration.Hours = hours;
    return duration;
  }
  public static fromDays(days: number) {
    const duration = new Duration();
    duration.Days = days;
    return duration;
  }
  public static fromWeeks(weeks: number) {
    const duration = new Duration();
    duration.Weeks = weeks;
    return duration;
  }
  public static fromMonths(months: number) {
    const duration = new Duration();
    duration.Months = months;
    return duration;
  }
  public static fromYears(years: number) {
    const duration = new Duration();
    duration.Years = years;
    return duration;
  }
  public static fromDecades(decades: number) {
    const duration = new Duration();
    duration.Decades = decades;
    return duration;
  }
  public static fromCenturies(centuries: number) {
    const duration = new Duration();
    duration.Centuries = centuries;
    return duration;
  }
  public static fromMillenniums(millenniums: number) {
    const duration = new Duration();
    duration.Millenniums = millenniums;
    return duration;
  }
  public static between(a: Date | number, b: Date | number) {
    const duration = new Duration();
    const aMilliseconds = a instanceof Date ? a.getTime() : a;
    const bMilliseconds = b instanceof Date ? b.getTime() : b;
    duration.MilliSeconds = Math.abs(aMilliseconds - bMilliseconds);
    return duration;
  }
  public static getters() {
    return [
      "NanoSeconds",
      "MicroSeconds",
      "MilliSeconds",
      "Seconds",
      "Minutes",
      "Hours",
      "Days",
      "Weeks",
      "Months",
      "Years",
      "Decades",
      "Centuries",
      "Millenniums",
    ];
  }

  private static isSingular(value: number) {
    return value % 100 !== 11 && value % 10 === 1;
  }
  private static toSingular(value: string) {
    return value.replace(/ies$/, "y").replace(/s$/, "");
  }
  private milliSeconds: number;
  public constructor(input?: string) {
    this.milliSeconds = 0;
    if (!input) {
      return;
    }
    const parts = input.split(/([0-9]+\.?[0-9]*)/);
    const n = Number(parts[1]);
    if (isNaN(n) || parts[2].length === 0) {
      throw new Error(`Error in input: '${input}'`);
    }
    const unit = parts[2].trim().toLowerCase();
    switch (unit) {
      case "nanosecond":
      case "nanoseconds":
        this.NanoSeconds = n;
        return;
      case "microsecond":
      case "microseconds":
        this.MicroSeconds = n;
        return;
      case "millisecond":
      case "milliseconds":
        this.MilliSeconds = n;
        return;
      case "second":
      case "seconds":
        this.Seconds = n;
        return;
      case "minute":
      case "minutes":
        this.Minutes = n;
        return;
      case "hour":
      case "hours":
        this.Hours = n;
        return;
      case "day":
      case "days":
        this.Days = n;
        return;
      case "week":
      case "weeks":
        this.Weeks = n;
        return;
      case "month":
      case "months":
        this.Months = n;
        return;
      case "year":
      case "years":
        this.Years = n;
        return;
      case "decade":
      case "decades":
        this.Decades = n;
        return;
      case "century":
      case "centuries":
        this.Centuries = n;
        return;
      case "millennium":
      case "millenniums":
      case "millennia":
        this.Millenniums = n;
        return;
      default:
        throw new Error(`Error in input: '${input}'`);
    }
  }

  public toString() {
    for (const getter of Duration.getters().reverse()) {
      const test = this[getter as (keyof IDuration)];
      if (test >= 1) {
        const unit = Duration.isSingular(test)
          ? Duration.toSingular(getter)
          : getter;
        const formatted = test.toLocaleString(undefined, {
          maximumFractionDigits: 2,
        });
        return `${formatted} ${unit.toLowerCase()}`;
      }
    }
    return `${this.MicroSeconds} microseconds`;
  }
}
