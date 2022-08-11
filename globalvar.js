//----------------------------------------------------------
// ASCII art
// https://patorjk.com/software/taag/#p=display&f=Graffiti&t=Type%20Something%20
//----------------------------------------------------------

//----------------------------------------------------------
// Global Variable Color List
const conColor = {
  cyan : "\x1b[36m",
  red : '\x1b[31m',
  green : '\x1b[92m',
  green1 : '\x1b[32m',
  grey : '\x1b[90m',
  reset : "\x1b[0m",
  magenta : `\x1b[95m`,
  orange : "\u001b[38;5;208m",
  yellow : '\x1b[93m',
  blue : '\x1b[34m',
  black : '\x1b[30m',
  purple : '\x1b[35m',
  brown : '\x1b[33m',
  bright : "\x1b[1m",
  dim : "\x1b[2m",
  italics : "\x1b[3m",
  reverse : "\x1b[7m",
};
//----------------------------------------------------------


//----------------------------------------------------------
// Global Variable Console line
const conLine = {
  fullLine : ' '.repeat(process.stdout.columns),
  threeQuartLine : ' '.repeat((process.stdout.columns) * 3 / 4),
  halfLine : ' '.repeat((process.stdout.columns) / 2),
  fullLineDash : (linecolor) => {
    linecolor = !linecolor ? conColor.reset : linecolor;
    return `${linecolor}${'-'.repeat(process.stdout.columns)}${conColor.reset}`;
  },
  halfLineDash : (linecolor) => {
    linecolor = !linecolor ? conColor.reset : linecolor;
    return `${linecolor}${'-'.repeat(process.stdout.columns / 2)}${conColor.reset}`;
  },
  threeQuartLineDash : (linecolor) => {
    linecolor = !linecolor ? conColor.reset : linecolor;
    return `${linecolor}${'-'.repeat(process.stdout.columns * 3 / 4)}${conColor.reset}`;
  },
  centeredHalfLine : (message, textcolor) => {
    textcolor = !textcolor ? conColor.reset : textcolor;
    return `${textcolor}${' '.repeat((process.stdout.columns / 2 - message.length) / 2)}${message}${conColor.reset}`;
  },
  centeredThreeQuartLine : (message, textcolor) => {
    textcolor = !textcolor ? conColor.reset : textcolor;
    return `${textcolor}${' '.repeat((process.stdout.columns * 3 / 4 - message.length) / 2)}${message}${conColor.reset}`;
  },
  centeredFullLine : (message, textcolor) => {
    textcolor = !textcolor ? conColor.reset : textcolor;
    return `${textcolor}${' '.repeat((process.stdout.columns - message.length) / 2)}${message}${conColor.reset}`;
  },
  centeredHalfLineDash : (message, linecolor, textcolor) => {
    linecolor = !linecolor ? conColor.reset : linecolor;
    textcolor = !textcolor ? linecolor : textcolor;
    return `${linecolor}${'-'.repeat((process.stdout.columns / 2 - message.length) / 2)}${textcolor}${message}${conColor.reset}${linecolor}${'-'.repeat((process.stdout.columns / 2 - message.length) / 2)}${conColor.reset}`;
  },
  centeredThreeQuartLineDash : (message, linecolor, textcolor) => {
    linecolor = !linecolor ? conColor.reset : linecolor;
    textcolor = !textcolor ? linecolor : textcolor;
    return `${linecolor}${'-'.repeat((process.stdout.columns * 3 / 4 - message.length) / 2)}${textcolor}${message}${conColor.reset}${linecolor}${'-'.repeat((process.stdout.columns * 3 / 4 - message.length) / 2)}${conColor.reset}`;
  },
  centeredFullLineDash : (message, linecolor, textcolor) => {
    linecolor = !linecolor ? conColor.reset : linecolor;
    textcolor = !textcolor ? linecolor : textcolor;
    return `${linecolor}${'-'.repeat((process.stdout.columns - message.length) / 2)}${textcolor}${message}${conColor.reset}${linecolor}${'-'.repeat((process.stdout.columns - message.length) / 2)}${conColor.reset}`;
  },
};
// -------------------------------------------

//----------------------------------------------------------
// Example Test Case
// console.log(conLine.centeredFullLine("Hello How Are You Today"));
// console.log(conLine.centeredHalfLine("Hello How Are You Today", conColor.red));
// console.log(conLine.centeredFullLineDash("Hello How Are You Today", conColor.green, conColor.cyan));
// console.log(conLine.centeredHalfLineDash("Hello How Are You Today", conColor.red, conColor.cyan));
// console.log(conLine.halfLine);
// console.log(conLine.fullLine);
// console.log(conLine.halfLineDash(conColor.orange));
// console.log(conLine.fullLineDash(conColor.yellow));
//----------------------------------------------------------


module.exports = {conColor, conLine};
