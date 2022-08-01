//
// GLOBAL console.log color and style variables
//

console.clear(); // used to clear the terminal window from within node JS.

//
//  USAGE: Just "copy & paste" any required function or colors into your own code.
//  Leave them as const, or turn them into objects, whatever you need!
//
// https://en.wikipedia.org/wiki/ANSI_escape_code#Colors
const conColorCyan = "\x1b[36m", conColorRed = '\x1b[91m', conColorGreen = '\x1b[92m', 
      conColorGrey = '\x1b[90m', conColorReset = "\x1b[0m", conColorMagenta = `\x1b[95m`,
      conColorOrange = "\u001b[38;5;208m", conColorYellow = '\x1b[93m';
const conColorBright = "\x1b[1m", conColorDim = "\x1b[2m", conColorItalics = "\x1b[3m", conColorReverse = "\x1b[7m";
const consoleLine = '-'.repeat(process.stdout.columns);
const consoleHalfLine = '-'.repeat((process.stdout.columns)/2);

//
// Make some NOISE:
//
const consoleBeep = '\u0007';
console.log(consoleBeep);

// This method for BEEP may be required on some systems:
process.stdout.write("\u0007");


//
// OTHER FUNCTIONS:
//


/*
  TITLE:  drawHeaderBox

  PURPOSE:
  Return a string with an ASCII box and text, with optional custom colors and corners.

  USAGE:
  headerBox = drawHeaderBox(headerText, headerColor, borderColor, cornerCharacter);

  EXAMPLES:
  titleBox = drawHeaderBox("my header text with custom box corners",conColorGreen,conColorGrey,"+");
  titleBox = drawHeaderBox("Simple Box",conColorGreen,conColorYellow);
*/
const drawHeaderBox = function(headerText,headerColor,borderColor,cornerChar) {
  if (!cornerChar) {
    cornerChar = '*';
  }
  return (`${borderColor}${cornerChar}${'-'.repeat(headerText.length + 2)}${conColorReset}${borderColor}${cornerChar}\n| ${headerColor}${headerText} ${borderColor}|${conColorReset}\n${borderColor}${cornerChar}${'-'.repeat(headerText.length + 2)}${cornerChar}${conColorReset}`);
};


/*
  TITLE: drawDivideLine

  PURPOSE:
  Return a string with a divide line and optional text, line length and colors.

  USAGE:
  divideLineString = drawDivideLine(lineColor,lineLength,lineMessage);

  EXAMPLES:
  myLine = drawDivideLine(conColorRed,50,"v1.0");
  myLine = drawDivideLine();
*/
const drawDivideLine = function(lineColor,lineLength,lineMessage) {
  if(!lineLength) { lineLength = 50; }
  if(!lineColor) { lineColor = conColorDim};
  if (lineMessage) {
    lineMessage = '--[ ' + lineMessage + ' ]';
  } else { lineMessage = '';}
  const consoleLine = '-'.repeat((process.stdout.columns) * ((lineLength / 100)) - ((lineMessage.length)));
  return (`${lineColor}${lineMessage}${consoleLine}${conColorReset}`);
};



/*
  TITLE: padEndWithColor

  PURPOSE:
  pad the END of a string with spaces or other character to create 'formatting'

  USAGE:
  outputString = padEndWithColor(inputstring, numToPad, padColor, paddingCharacter);

  EXAMPLES:
  myString = padEndWithColor("hello there",25,conColorDim+conColorGreen,'*');
  myString = padEndWithColor("hello there",25,conColorGreen);
*/
const padEndWithColor = function (inputString,padNum,padColor,padChar) {
  let stringLength = inputString.length, padding = ' ', returnString = '';
  if (padChar) { padding = padChar; }
  if (!padColor) { padColor = ''; }
  returnString = inputString + padColor;
  
  for (let x = stringLength; x <= padNum; x++) {
    returnString += padding;
  }
  returnString += conColorReset;
  return returnString;
};




//
// usage examples:
//
// ALWAYS REMEMBER to RESET your colors and styles with conColorReset
// - reset after each line, or at the very least, the end of all your console.log outputs!
//


//
// padEndWithColor **LIVE** EXAMPLES:
//
console.log(conColorYellow + padEndWithColor("hello there",25,conColorDim + conColorGreen,'*') + '.' + conColorReset);
console.log(conColorYellow + padEndWithColor("hello there",25,conColorGreen) + '.' + conColorReset);
console.log();

//
// BOXES
//
console.log(drawHeaderBox("my header text",conColorOrange,conColorGrey));
console.log(drawHeaderBox("my header texdfdsfdfsdfsdt",conColorGreen,conColorYellow));
console.log(drawHeaderBox("my header text with custom box corners",conColorGreen,conColorGrey,"+")); // last input in the drawHeaderBox sets the corner characters
console.log();

//
// LINES
//
console.log(drawDivideLine(conColorRed,50));
console.log(drawDivideLine(conColorDim,75))
console.log(drawDivideLine(conColorDim+conColorRed,75)); // joined a DIM effect with a color
console.log();
//
// LINES with TEXT
//
console.log(drawDivideLine(conColorRed,50,"v1.0"));
console.log(drawDivideLine(conColorGreen,100,Date()));

console.log();

// "fixed" lines based on variable info (see our colors definitions for the line lengths)
console.log(consoleHalfLine);
console.log(consoleLine);
console.log(conColorDim + conColorRed + consoleHalfLine + conColorReset);
console.log(conColorMagenta + consoleLine + conColorReset);

console.log();

//
// COLORED TEXT
//
console.log(`\n${conColorCyan}This is in ${conColorRed}RED${conColorCyan} and ${conColorReverse}THIS${conColorReset} is reversed.${conColorReset}`);
console.log(`${conColorYellow}${conColorReverse}This is reversed YELLOW${conColorReset} and ${conColorOrange}${conColorReverse}THIS is reversed orange${conColorReset}.`);

// NOTICE the 'back tick' method above, you can also do: 
console.log(conColorCyan + "this is in " + conColorItalics + conColorBright + "cyan & italics & bright " + conColorReset + conColorGreen + conColorDim + "now in green (& dim)!" +conColorReset);

