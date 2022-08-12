//
// myDateObject - date object to provide quick access to formatted date and times
// v1.0 2022-08-08
//

const myDateObject = {
  //dateObject: new Date(),
  
  // return "right now" if nothing supplied, otherwise return object of supplied date info
  dateObject(aDate) {
    if (!aDate) {
      return new Date();
    } else {
      return new Date(aDate);
    }
  },

  // padding of single digits to double digits
  datePad(i) {
    return (`0${i}`).slice(-2);
  },

  // date functions
  date(aDate) { return (this.datePad(this.dateObject(aDate).getDate())); },
  month(aDate) { return (this.datePad(this.dateObject(aDate).getMonth() + 1)); },
  year(aDate) { return (this.dateObject(aDate).getFullYear()); },
  weekday(aDate) { return (this.dateObject(aDate).toLocaleString("en-US", {weekday: "long"})); },
  monthEnglish(aDate) { return (this.dateObject(aDate).toLocaleString("en-US", {month: "long"})); },

  // time functions
  hours(aDate) { return (this.datePad(this.dateObject(aDate).getHours())); },
  minutes(aDate) { return (this.datePad(this.dateObject(aDate).getMinutes())); },
  seconds(aDate) { return (this.datePad(this.dateObject(aDate).getSeconds())); },
  milliseconds(aDate) { return (this.dateObject(aDate).getTime());},

  // combinations
  dateFull(divider,aDate) { if (!divider) { divider = ':'; } return (this.justDate(divider,aDate) + ' ' +this.justHHMM(divider,aDate)); },
  justAMPM(divider,aDate) { if (!divider) { divider = ':'; } let h='',s='';
    this.hours(aDate) > 13 ? (h = this.hours(aDate) - 12, s = 'pm' )  : (h = this.hours(aDate), s = 'am');  return (`${h}${divider}${this.minutes(aDate)}${s}`); },
  justHHMM(divider,aDate) { if (!divider) { divider = ':'; } return (`${this.hours(aDate)}${divider}${this.minutes(aDate)}`); },
  justDate(divider,aDate) { if (!divider) { divider = '-'; } return (`${this.year(aDate)}${divider}${this.month(aDate)}${divider}${this.date(aDate)}`); },
  justTime(divider,aDate) { if (!divider) { divider = ':'; } return (`${this.hours(aDate)}${divider}${this.minutes(aDate)}${divider}${this.seconds(aDate)}`); },
  fullEnglishDate(aDate) { return (`${this.weekday(aDate)}, ${this.monthEnglish(aDate)} ${this.date(aDate)}, ${this.year(aDate)}`) },
};


// EXAMPLES:

console.log("\nDATES:");
console.log(myDateObject.dateObject()); // shows ZULU time "right now"
console.log(myDateObject.dateFull()); // shows ZULU time "right now"
console.log(myDateObject.month('2012-05-04T16:25:51.999Z')); // show just the month
console.log(myDateObject.month()); // show just the month of NOW (today)
console.log(myDateObject.date()); // show just the day
console.log(myDateObject.month()); // show just the month
console.log(myDateObject.year()); // show current year

console.log(myDateObject.justDate()); // shows just the date with '-' divider (DEFAULT) between YYYY-MM-DD
console.log(myDateObject.justDate('/')); // shows just the date with '/' divider between YYYY-MM-DD
console.log(myDateObject.justDate('/','2012-05-04T16:25:51.999Z')); // shows just the date with '/' divider between YYYY-MM-DD

console.log("\nTIME:");
console.log(myDateObject.justAMPM('|','2012-05-04T16:25:51.999Z')); // shows readable 'weekday' (ie monday, tuesday etc)
console.log(myDateObject.justHHMM()); // shows readable 'weekday' (ie monday, tuesday etc)
console.log(myDateObject.justTime()); // shows just the time with ':' (DEFAULT) dividier between HH:MM:SS
console.log(myDateObject.justTime('-')); // shows just the time with '-' dividier between HH:MM:SS
console.log(myDateObject.milliseconds()); // shows milliseconds since jan 1 1970 at 00:00:00Z

console.log("\nENGLISH:");
console.log(myDateObject.weekday()); // shows readable 'weekday' (ie monday, tuesday etc)
console.log(myDateObject.monthEnglish()); // show just the month in Enlish
console.log(myDateObject.monthEnglish('2012-05-04T16:25:51.999Z')); // show just the month in English
console.log(myDateObject.fullEnglishDate('2012-05-04T16:25:51.999Z'));  // show passed in date in english
console.log(myDateObject.fullEnglishDate()); // show full date today in english

