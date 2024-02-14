/* Declare and initialize global variables */
var pageBg = document.querySelector("html");
var sliders = document.getElementsByTagName("input");
var rgb = [0, 0, 0];

/* Event handlers for range sliders */
for (var i = 0; i < sliders.length; i++) {
    sliders[i].onchange = function () {
        var whichSlider = this.getAttribute("id");
        var sliderValue = this.value;
        var newRgb = changeRgb(whichSlider, sliderValue);
        var newCSS = writeCSS(newRgb);
        pageBg.style.backgroundColor = newCSS;
    };
}

/* Functions */
function changeRgb(channel, value) {
    switch (channel) {
        case "red":
            rgb[0] = parseInt(value);
            break;
        case "green":
            rgb[1] = parseInt(value);
            break;
        case "blue":
            rgb[2] = parseInt(value);
            break;
    }
    return rgb;
}

function writeCSS(updatedRgb) {
    var newColor = 'rgb(' + updatedRgb.join(',') + ')';
    return newColor;
}
