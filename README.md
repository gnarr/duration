# duration
[![Build Status][1]][2]
[![Coverage Status][3]][4]
[![npm][5]][6]
[![dependencies Status][7]][8]
[![devDependencies Status][9]][10]
[![Downloads/week][11]][12]

[1]: https://travis-ci.org/gnarr/duration.svg?branch=master
[2]: https://travis-ci.org/gnarr/duration
[3]: https://coveralls.io/repos/github/gnarr/duration/badge.svg?branch=master
[4]: https://coveralls.io/github/gnarr/duration?branch=master
[5]: https://img.shields.io/npm/v/duration-converter.svg?style=flat-square
[6]: https://www.npmjs.com/package/duration-converter
[7]: https://david-dm.org/gnarr/duration.svg
[8]: https://david-dm.org/gnarr/duration
[9]: https://david-dm.org/gnarr/duration/dev-status.svg
[10]: https://david-dm.org/gnarr/duration?type=dev
[11]: https://img.shields.io/npm/dw/duration-converter.svg
[12]: https://www.npmjs.com/package/duration-converter

A small utility for converting between duration units. E.g '7 Weeks' to Micro Seconds.

## Installation

### Node.js

    $ npm install duration-converter

## Example usage:
```javascript
const { Duration } = require('duration-converter');

const sevenWeeks = new Duration('7 Weeks');
const milliseconds = sevenWeeks.MilliSeconds;

const threeDays = Duration.fromDays(3);
const hours = threeDays.Hours;

// will print out "4 days"
console.log(Duration.fromSeconds(345600).toString());

const a = new Date(2019, 3, 14);
const b = new Date(2019, 3, 15);
const betweenDates = Duration.between(a, b);

// will print 86400000
console.log(betweenDates.MilliSeconds);

```

## Warning!

Note that a year is always interpreted as being 365 days. There are no leap year calculations so going between units that cross the year "boundaries" will result in a small rounding error.
