//
// myDateObject - date object to provide quick access to formatted date and times
// v1.0 2022-08-08

const myDateObject = {
  dateObject: new Date(),
  datePad(i) {
    return (`0${i}`).slice(-2);
  },
  
  date() { return (this.datePad(this.dateObject.getDate())); },
  month() { return (this.datePad(this.dateObject.getMonth() + 1)); },
  year() { return (this.dateObject.getFullYear()); },
  hours() { return (this.datePad(this.dateObject.getHours())); },
  minutes() { return (this.datePad(this.dateObject.getMinutes())); },
  seconds() { return (this.datePad(this.dateObject.getSeconds())); },
  justDate() { return (`${this.year()}/${this.month()}/${this.date()}`); },
  justTime() { return (`${this.hours()}:${this.minutes()}:${this.seconds()}`); },
};

// EXAMPLES:
console.log(myDateObject.dateObject); // shows ZULU time
console.log(myDateObject.date()); // show just the day
console.log(myDateObject.month()); // show just the month
console.log(myDateObject.year()); // show current year
console.log(myDateObject.justDate()); // shows just the date with '-' divider between YYYY-MM-DD
console.log(myDateObject.justTime()); // shows just the time with ':' dividier between HH:MM:SS
