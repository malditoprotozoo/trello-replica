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
        boards.insertBefore(aNewBoard, mainBoard);
        aNewBoard.classList.add("new-board");

        // Determinar una ID que corresponda a la ubicación del elemento padre
    	var location = document.getElementsByTagName("form").length - 1;
    	aNewBoard.setAttribute("id", location);

        // Aquí se creará el input
        var newInput = document.createElement("input");
        aNewBoard.appendChild(newInput);
        newInput.setAttribute("placeholder", "Añadir una tarjeta...");
        newInput.setAttribute("id", "new-input");

        newInput.addEventListener("click", createItem);

    }
};

function createItem() {
    event.preventDefault();
    document.getElementById("new-input").classList.add("invisible");
    
    var board = document.getElementsByClassName("new-board")[0];
    var textArea = document.createElement("textarea");
    board.appendChild(textArea);

    // Aquí se creará el botón de añadir
    var textAddButton = document.createTextNode("Añadir");
    var newButton = document.createElement("button");
    newButton.appendChild(textAddButton);
    board.appendChild(newButton);
    newButton.classList.add("button");

    // Aquí se creará el botón de cerrar
    var newCloseButton = document.createElement("button");
    var spanClose = document.createElement("span");
    newCloseButton.appendChild(spanClose);
    spanClose.classList.add("icon-close");
    newCloseButton.classList.add("closing-button");
    board.appendChild(newCloseButton);

    newCloseButton.addEventListener("click", cancelNewList);
};

function cancelNewList() {
    event.preventDefault();

    this.parentElement.remove();
};

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


// var findId = 1;
//     var idString = findId.toString();
//     var board = document.getElementById(idString);

//     // Aquí se creará el área de texto
//     var board = document.getElementById(idString);