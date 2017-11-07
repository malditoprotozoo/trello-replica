// Estableciendo variables

var boards = document.getElementById("boards");
var addList = document.getElementById("add-list");
var mainBoard = document.getElementById("main-board");
// var items = document.getElementById("items");
var buttonSave = document.getElementById("save");
var buttonClose = document.getElementById("close");
var toDoList = document.getElementById("todo-list");
var buttonAdd = document.getElementById("add");

// Función que remplazará #add-list por #main-board
function transforms() {
	addList.addEventListener("click", formAppears);
};

function formAppears() {
	addList.classList.add("invisible");
	mainBoard.classList.remove("invisible");
	mainBoard.classList.add("visible");
	addList.classList.remove("visible");
	buttonSave.addEventListener("click", saveNewList);
	buttonClose.addEventListener("click", close);
};

function close() {
	mainBoard.classList.remove("visible");
	mainBoard.classList.add("invisible");
	addList.classList.remove("invisible");
	addList.classList.add("visible");
};

// event.preventDefault() evita que el botón realice alguna acción pretederminada.
function saveNewList() {
	event.preventDefault();
	var titleBoard = document.getElementById("title-list").value;
	document.getElementById("title-list").value = "";
	if (titleBoard !== "") {
		// A continuación se crea el nuevo elemento y su título.
		var aNewBoard = document.createElement("form");
		var containerTitle = document.createElement("h2");
		var textTitle = document.createTextNode(titleBoard);
		containerTitle.appendChild(textTitle);
		aNewBoard.appendChild(containerTitle);
		boards.insertBefore(aNewBoard, boards.childNodes[0]);
		aNewBoard.classList.add("new-board");

		// Aquí se creará el input
		var newInput = document.createElement("input");
		aNewBoard.appendChild(newInput);
		newInput.setAttribute("placeholder", "Añadir una tarjeta...");

		// Aquí se crearán el botón de añadir
		var textAddButton = document.createTextNode("Añadir");
		var newButton = document.createElement("button");
		newButton.appendChild(textAddButton);
		aNewBoard.appendChild(newButton);
		newButton.classList.add("button");
	}
}

// Luego de añadir esa función, podemos iniciar la nueva función que queremos establecer.

// function addItem() {
// 	event.preventDefault();
// 	var textItem = document.getElementById("items").value;
// 	document.getElementById("items").value = "";
// 	if (textItem !== "") {
// 		var contentItem = document.createElement("li");
// 		var textInsideItem = document.createTextNode(textItem);
// 		contentItem.appendChild(textInsideItem);
// 		toDoList.appendChild(contentItem);
// 	}
// };





// var containerItem = document.createElement("div");
		// var contentItem = document.createElement("p");
		// textItem = document.createTextNode(textItem);
		// containerItem.appendChild(textItem);
		// containerItem.appendChild(contentItem);

// function addNewList(content, buttonAdd) {
// 	var where = buttonAdd.parentElement.parentElement;
// 	var item = document.createElement("div");
// 	var newList = document.createElement("div");

// 	newList.innerText = content.value;
// 	newList.classList.add("insert-name-here");
// 	where.insertBefore(newList, where.childNodes[0]);

// 	item.innerText = "Añadir una tarjeta...";
// 	item.classList.add("item");
// 	where.appendChild(item);

// 	item.addEventListener("click", boardAppears);
// 	where.addEventListener("dragover", drag);
// 	where.addEventListener("drop", drop);
// }

