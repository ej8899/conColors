//
// myDateObject - date object to provide quick access to formatted date and times
// v1.0 2022-08-11
// grab the latest version of myDateObject here: https://github.com/ej8899/conColors
//
const myDateObject = {
  // return "right now" if nothing supplied, otherwise return object of supplied date info
  dateObject(aDate) { return (aDate ? new Date(aDate) : new Date()); },

  // padding of single digits to double digits
  datePad(i) { return (`0${i}`).slice(-2); },
  // check & set date & tim dividers: (not used as of yet)
  checkDateDiv(div) { if (!div) { return '-'; } else { return div; }},
  checkTimeDiv(div) { if (!div) { return ':'; } else { return div; }},

  // date functions
  date(aDate) { return (this.datePad(this.dateObject(aDate).getDate())); },
  month(aDate) { return (this.datePad(this.dateObject(aDate).getMonth() + 1)); },
  year(aDate) { return (this.dateObject(aDate).getFullYear()); },
  weekday(aDate) { return (this.dateObject(aDate).toLocaleString("en-US", { weekday: "long" })); },
  monthEnglish(aDate) { return (this.dateObject(aDate).toLocaleString("en-US", { month: "long" })); },

  // time functions
  hours(aDate) { return (this.datePad(this.dateObject(aDate).getHours())); },
  minutes(aDate) { return (this.datePad(this.dateObject(aDate).getMinutes())); },
  seconds(aDate) { return (this.datePad(this.dateObject(aDate).getSeconds())); },
  milliseconds(aDate) { return (this.dateObject(aDate).getTime()); },

  // combinations
  dateFull(d, aDate) { return (this.justDate(aDate) + ' ' + this.justHHMM(aDate)); },
  justAMPM(d, aDate) {
    if (!d) { d = ':'}
    let h = '', s = '';
    this.hours(aDate) > 13 ? (h = this.hours(aDate) - 12, s = 'pm') : (h = this.hours(aDate), s = 'am');
    return (`${h}${d}${this.minutes(aDate)}${s}`);
  },
  justHHMM(d, aDate) { if (!d) { d = ':'; } return (`${this.hours(aDate)}${d}${this.minutes(aDate)}`); },
  justDate(d, aDate) { if (!d) { d = '-'; } return (`${this.year(aDate)}${d}${this.month(aDate)}${d}${this.date(aDate)}`); },
  justTime(d, aDate) { if (!d) { d = ':'; } return (`${this.hours(aDate)}${d}${this.minutes(aDate)}${d}${this.seconds(aDate)}`); },
  fullEnglishDate(aDate) { return (`${this.weekday(aDate)}, ${this.monthEnglish(aDate)} ${this.date(aDate)}, ${this.year(aDate)}`) },
};

module.exports = { myDateObject, };

// EXAMPLES:
// any of the functions - can be passed in a properly formatted date, or even a losely formatted
// date string and have a proper date and time formatted and returned.

console.log("\nDATES:");
console.log(myDateObject.dateObject()); // shows ZULU time "right now" - good for creating a log file w date/time stamp as this can go directly back into javascript Date() or this object
console.log(myDateObject.dateObject('dec 12 2024 5:45 pm')); // convert this date and time string into zulu formatted
console.log(myDateObject.dateFull()); // shows local time "right now"
console.log(myDateObject.month('2012-05-04T16:25:51.999Z')); // show just the month from the passed date string
console.log(myDateObject.month()); // show just the month of NOW (today)
console.log(myDateObject.date()); // show just the day
console.log(myDateObject.month()); // show just the month
console.log(myDateObject.year()); // show current year

console.log(myDateObject.justDate()); // shows just the date with '-' divider (DEFAULT) between YYYY-MM-DD
console.log(myDateObject.justDate('/')); // shows just the date with '/' divider between YYYY-MM-DD
console.log(myDateObject.justDate('/', '2012-05-04T16:25:51.999Z')); // shows just the date with '/' divider between YYYY-MM-DD
console.log(myDateObject.justDate('/', '2012 12 24')); // shows just the date with '/' divider between YYYY-MM-DD

console.log("\nTIME:");
console.log(myDateObject.justAMPM('|', '2012-05-04T16:25:51.999Z')); // shows hh:mm AM or PM
console.log(myDateObject.justHHMM()); // shows 24h clock as HH:MM (no seconds)
console.log(myDateObject.justTime()); // shows just the time with ':' (DEFAULT) dividier between HH:MM:SS
console.log(myDateObject.justTime('-')); // shows just the time with '-' divider between HH:MM:SS
console.log(myDateObject.milliseconds()); // shows milliseconds since jan 1 1970 at 00:00:00Z

console.log("\nENGLISH:");
console.log(myDateObject.weekday()); // shows readable 'weekday' (ie monday, tuesday etc)
console.log(myDateObject.monthEnglish()); // show just the month in Enlish
console.log(myDateObject.monthEnglish('2012-05-04T16:25:51.999Z')); // show just the month in English
console.log(myDateObject.fullEnglishDate('2012-05-04T16:25:51.999Z'));  // show passed in date in english
console.log(myDateObject.fullEnglishDate()); // show full date today in english
console.log(myDateObject.fullEnglishDate('dec 12 24')); // show full date today in english

