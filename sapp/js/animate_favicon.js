var favicon_images = [
    "images/favicon/S.png",
    "images/favicon/BLANK.png",
    "images/favicon/A.png",
    "images/favicon/BLANK.png",
    "images/favicon/P.png",
    "images/favicon/BLANK.png",
    "images/favicon/P.png",
    "images/favicon/BLANK.png",
    "images/favicon/DOT.png",
    "images/favicon/BLANK.png",
    "images/favicon/R.png",
    "images/favicon/BLANK.png",
    "images/favicon/O.png",
    "images/favicon/BLANK.png",
    "images/favicon/C.png",
    "images/favicon/BLANK.png",
    "images/favicon/K.png",
    "images/favicon/BLANK.png",
    "images/favicon/S.png",
    "images/favicon/BLANK.png",
  ],
  image_counter = 0; // To keep track of the current image

setInterval(function () {
  // remove current favicon
  if (document.querySelector("link[rel='icon']") !== null)
    document.querySelector("link[rel='icon']").remove();
  if (document.querySelector("link[rel='shortcut icon']") !== null)
    document.querySelector("link[rel='shortcut icon']").remove();

  // add new favicon image
  document
    .querySelector("head")
    .insertAdjacentHTML(
      "beforeend",
      '<link rel="icon" href="' +
        favicon_images[image_counter] +
        '" type="image/gif">'
    );

  // If last image then goto first image
  // Else go to next image
  if (image_counter == favicon_images.length - 1) image_counter = 0;
  else image_counter++;
}, 1200);
