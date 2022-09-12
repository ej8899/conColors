//
// checkImage(url)
// DOES NOT return a value - use the success and fail functions!
// this is an ASYNC process
//
const checkImage = (url,id) => {
  let image = new Image();
  
  image.onload = () => { // SUCCESS: image DOES exist
    if (this.width > 0) {
      // unhide each id if we setup for lazy load of images
    }
  };
  image.onerror = () => { // FAIL: image does NOT exist
    let listid = "#listingid" + id;
    $(listid).attr("src","./images/missingimage.png");
  };
  image.src = url; // NOTE: set SRC after the onload event: https://stackoverflow.com/questions/7434371/image-onload-function-with-return
};
