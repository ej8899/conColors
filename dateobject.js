const IntTwoChars = (i) => { // helper for dateObject
    return (`0${i}`).slice(-2);
  };
const dateObject = new Date();
    let date = IntTwoChars(dateObject.getDate());
    let month = IntTwoChars(dateObject.getMonth() + 1);
    let year = dateObject.getFullYear();
    let hours = IntTwoChars(dateObject.getHours());
    let minutes = IntTwoChars(dateObject.getMinutes());
    let seconds = IntTwoChars(dateObject.getSeconds());

    // TODO - convert into a full object/class to use .this and embed the IntTwoChars()