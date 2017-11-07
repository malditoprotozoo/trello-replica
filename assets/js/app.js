// Estableciendo variables

var boards = document.getElementById("boards");
var addList = document.getElementById("add-list");
var mainBoard = document.getElementById("main-board");
var items = document.getElementById("items");
var buttonAdd = document.getElementById("add");
var buttonClose = document.getElementById("close");

// Función que remplazará #add-list por #main-board
function transforms() {
	addList.addEventListener("click", formAppears);
}

function formAppears() {
	addList.classList.add("invisible");
	mainBoard.classList.remove("invisible");
	buttonAdd.addEventListener("click", add);
	buttonClose.addEventListener("click", close);
}

// event.preventDefault() evita que el botón realice alguna acción pretederminada.
// Luego de añadir esa función, podemos iniciar la nueva función que queremos establecer.


function add() {
	event.preventDefault();
}

function close() {
	mainBoard.classList.add("invisible");
	addList.classList.remove("invisible");
}

