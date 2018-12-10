# duration
A small utility for converting between duration units. E.g '7 Weeks' to Micro Seconds.

## Installation

### Node.js

    $ npm install duration-converter

## Example usage:
```javascript
const Duration = require('duration-converter');

const sevenWeeks = new Duration('7 Weeks');
const milliseconds = sevenWeeks.MilliSeconds;
```
