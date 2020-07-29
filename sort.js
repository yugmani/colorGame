var colors = [
    "brown",
    "blue",
    "magenta",
    "teal",
    "coral",
    "black"
  ];

function createColorPicker() {
    colors.sort(function() {
        console.log(0.5-Math.random());
        return 0.5-Math.random();
    });

    console.log(colors);
    /*
    // Push to text color array
    for (var i = 0; i < colors.length; i++) {
        colorsOfText.push(colors[i]);
    }

    // Shuffle text color array
    colorsOfText.sort(function() {
        return 0.5 - Math.random();
    });

    // Loop through all colors in the array
    for (var i = 0; i < colors.length; i++) {

    // Create element to hold word
    var holder = document.createElement("li");
    $("#color-picker").append(holder);

    // Output a word
    $(holder).attr("id", colors[i]).text(colors[i]);

    // Make word a random color
    $(holder).css("color", colorsOfText[i]);
  }
  */
}

createColorPicker();