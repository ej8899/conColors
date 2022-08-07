//
// consoleLog() replacement handler for quiet mode
// USAGE: consolelog(input text string, override)
// where if override is TRUE then disregard quiet mode
// returns nothing when done
//

// !TODO - change argv[2] to just loop thru ALL argv inputs for -quiet mode

const consolelog = function(inputText,override) {
  if (process.argv[2] === '-quiet' && override !== true) {
    return;
  }
  if (!inputText) { // no input text is to generate a blank line
    console.log(' ');
    return;
  }
  console.log(inputText);
};