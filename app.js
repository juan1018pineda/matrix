let columns = parseFloat(prompt('Digita el número de columnas'));
let rows = parseFloat(prompt('Digita el número de filas'));
let finalHtml = '';
let container = document.getElementById('container');

function changeColor(e){
    let color = document.getElementById('color').value;
    e.target.style.background = color;
}

function createMatrix(changeColor){

    for(let i = 0; i < columns*rows; i++){
        finalHtml += `<div>${i+1}</div>`;
    }
    
    container.innerHTML = finalHtml;
    container.style.width = `${columns*52}px`;
    container.style.height = `${rows*52}px`;

    let boxes = document.querySelectorAll('#container > div');

    for(let i = 0; i < boxes.length; i++){
        boxes[i].addEventListener('click', changeColor);
    }

}

createMatrix(changeColor);