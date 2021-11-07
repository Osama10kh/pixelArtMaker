// Select color input
const colorPicker = document.getElementById("colorPicker");
// Select size input
const rowsNumber = document.getElementById("inputHeight");
const width = document.getElementById("inputWidth");
const canvas = document.getElementById("pixelCanvas");
const sizeForm = document.getElementById("sizePicker");
// When size is submitted by the user, call makeGrid()

sizeForm.addEventListener('submit', function (ev) {
    canvas.innerHTML = "";
    ev.preventDefault();
    makeGrid();

});

canvas.addEventListener('click', function (ev) {
    if (ev.target.nodeName === 'TD') {
        ev.target.style.backgroundColor = colorPicker.value;
    }
});

function makeGrid() {
    // Your code goes here!
    for (let i = 0; i < rowsNumber.value; i++) {
        const row = canvas.insertRow(0);
        for (let x = 0; x < width.value; x++) {
            row.insertCell(0);
        };
    };
}

//convert table to image            
function convertToImage() {
    var resultDiv = document.getElementById("result");
    html2canvas(document.getElementById("pixelCanvas"), {
        onrendered: function (canvas) {
            var img = canvas.toDataURL("image/png");
            result.innerHTML = '<a id="downloadExtesion" download="pixelArt.jpeg" href="' + img + '">pixelArt.jpeg</a>';
            const downloadExtesion = document.querySelector("#downloadExtesion");
            downloadExtesion.style.cssText = "color:black ; text-decoration:none; position:relative; top:110px";
        }
    });
}



//click event
var convertBtn = document.getElementById("dowloadButton");
convertBtn.addEventListener('click', convertToImage);


