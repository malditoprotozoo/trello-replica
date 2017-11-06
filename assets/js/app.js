// Estableciendo variables

var boards = document.getElementById("boards");
var addList = document.getElementById("add-list");
var mainBoard = document.getElementById("main-board");
var items = document.getElementById("items");
var buttonAdd = document.getElementById("add");
var buttonClose = document.getElementById("close");

// Función que transformará #add-list en #main-board
function transforms() {
	addList.addEventListener("click", formAppears);
}

function formAppears() {
	addList.classList.add("invisible");
	mainBoard.classList.remove("invisible");
}




/*function testing() {
	var text = document.getElementsByTagName("input")[0].value;
	console.log(text);
}*/