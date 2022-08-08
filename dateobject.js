//
// myDateObject - date object to provide quick access to formatted date and times
// v1.0 2022-08-08
//

const myDateObject = {
  dateObject: new Date(),
  datePad(i) {
    return (`0${i}`).slice(-2);
  },
  
  // date functions
  date() { return (this.datePad(this.dateObject.getDate())); },
  month() { return (this.datePad(this.dateObject.getMonth() + 1)); },
  year() { return (this.dateObject.getFullYear()); },
  weekday() { return (this.dateObject.toLocaleString("en-US", {weekday: "long"})); },
  month() { return (this.dateObject.toLocaleString("en-US", {month: "long"})); },

  // time functions
  hours() { return (this.datePad(this.dateObject.getHours())); },
  minutes() { return (this.datePad(this.dateObject.getMinutes())); },
  seconds() { return (this.datePad(this.dateObject.getSeconds())); },
  milliseconds() { return(this.dateObject.getTime());},

  // combinations
  justDate(divider) { if(!divider) { divider = '-'; } return (`${this.year()}${divider}${this.month()}${divider}${this.date()}`); },
  justTime(divider) { if(!divider) { divider = ':'; } return (`${this.hours()}${divider}${this.minutes()}${divider}${this.seconds()}`); },
};

// EXAMPLES:
console.log(myDateObject.dateObject); // shows ZULU time
console.log(myDateObject.date()); // show just the day
console.log(myDateObject.month()); // show just the month
console.log(myDateObject.year()); // show current year
console.log(myDateObject.justDate()); // shows just the date with '-' divider (DEFAULT) between YYYY-MM-DD
console.log(myDateObject.justDate('/')); // shows just the date with '/' divider between YYYY-MM-DD
console.log(myDateObject.justTime()); // shows just the time with ':' (DEFAULT) dividier between HH:MM:SS
console.log(myDateObject.justTime('-')); // shows just the time with '-' dividier between HH:MM:SS
console.log(myDateObject.milliseconds()); // shows milliseconds since jan 1 1970 at 00:00:00Z
console.log(myDateObject.weekday()); // shows readable 'weekday' (ie monday, tuesday etc)
console.log(myDateObject.month()); // shows readable 'weekday' (ie monday, tuesday etc)