//
//  newString = constrainText(inputText,textLength)
//  inputText is a string of text, 
//  textLength is an integer indicating maximum length (in characters)
//  a row can be
//  return is your new formatted string using \n as line break.
//
const constrainText = function(inputText,textLength) {
  let outputString = '';
  for (let x = 0; x <= inputText.length; x ++) {
    // if x is a multiple of textLength add \n.
    if ((x % textLength) === 0) {
      outputString += '\n';
    }
    outputString += inputText.charAt(x);
  }
  return outputString;
};