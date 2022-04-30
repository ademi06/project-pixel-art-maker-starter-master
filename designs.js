let sizePicker = document.getElementById("sizePicker");
const pixelCanvas = document.getElementById('pixelArtMakerCanvas');
// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
    let enterHeight = document.getElementById("input-height").value;
    let enterWidth = document.getElementById("input-width").value;
    pixelCanvas.innerHTML = " "

    //a while loop to create/clear existing cells
    while (pixelCanvas.firstChild){
        pixelCanvas.removeChild(pixelCanvas.firstChild);
    }
    //a for loop to make pixels rows and columns
    for (let row = 1; row <=  enterHeight; row++)
    {
        let pixelRow = document.createElement('tr');
        pixelCanvas.appendChild(pixelRow);
        for (let column = 1; column <= enterWidth; column++){
            let pixelColumn = document.createElement('td'); 
            pixelRow.appendChild(pixelColumn);

            //using an eventlistener to pick different shades of color when clicked
            pixelColumn.addEventListener('click', function(){
            const color = document.getElementById('colorPicker').value;
            this.style.background = color;
           })
          
        }
        
    }
}
makeGrid()

//an event listener to create grids when submitted using submit button
sizePicker.addEventListener('submit', function(event){
    event.preventDefault();
    makeGrid()
});




