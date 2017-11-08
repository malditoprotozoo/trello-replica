// Estableciendo variables

var boards = document.getElementById("boards");
var addList = document.getElementById("add-list");
var mainBoard = document.getElementById("main-board");
var buttonSave = document.getElementById("save");
var buttonClose = document.getElementById("close");
var toDoList = document.getElementById("todo-list");
var buttonAdd = document.getElementById("add");
var cards = [];

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

// Uso la variable this, para que lo indicado a continuación se limite a un elemento

function card(title) {

    let parent = this;

    this.aNewBoard = document.createElement("form");
    this.containerTitle = document.createElement("h2");
    this.textTitle = document.createTextNode(title);

    this.containerTitle.appendChild(this.textTitle);
    this.aNewBoard.appendChild(this.containerTitle);

    boards.insertBefore(this.aNewBoard, mainBoard);

    this.aNewBoard.classList.add("new-board");

    // Determinar una ID que corresponda a la ubicación del elemento padre
    this.myID = document.getElementsByTagName("form").length - 1;
    this.aNewBoard.setAttribute("id", this.myID);

    // Aquí se creará el input 
    this.newInput = document.createElement("input");

    this.newInput.setAttribute("placeholder", "Añadir una tarjeta...");
    this.newInput.setAttribute("id", "input_" + this.myID);
    this.aNewBoard.appendChild(this.newInput);

    this.newInput.addEventListener("click", function(event) {
        event.preventDefault();
        document.getElementById("input_" + parent.myID).style.display = "none";

        var textArea = document.createElement("textarea");
        parent.aNewBoard.appendChild(textArea);
        textArea.focus();

        // Aquí se creará el botón de añadir
        var textAddButton = document.createTextNode("Añadir");
        var newButton = document.createElement("button");
        newButton.appendChild(textAddButton);
        parent.aNewBoard.appendChild(newButton);
        newButton.classList.add("button");
        // this.newButton.setAttribute("id", "newButton" + this.myID);

        // Aquí se creará el botón de cerrar
        var newCloseButton = document.createElement("button");
        var spanClose = document.createElement("span");
        newCloseButton.appendChild(spanClose);
        spanClose.classList.add("icon-close");
        newCloseButton.classList.add("closing-button");
        parent.aNewBoard.appendChild(newCloseButton);

        newCloseButton.addEventListener("click", function(event) {
            event.preventDefault();

            this.parentElement.removeChild(textArea);
            this.parentElement.removeChild(newButton);
            this.parentElement.removeChild(newCloseButton);
            document.getElementById("input_" + parent.myID).style.display = "inline-block";
            // document.getElementById("input_" + parent.myID).classList.add("visible");

        })

        newButton.addEventListener("click", function(event) {
            event.preventDefault();

            // Si el contenido de el área de texto está vacío
            // no se creará un nuevo item
            
            if (textArea.value !== "") {
            var containerItem = document.createElement("p");
            var contentItem = document.createTextNode(textArea.value);

            containerItem.appendChild(contentItem);
            containerItem.classList.add("item");
            this.parentElement.insertBefore(containerItem, document.getElementById("input_" + parent.myID));

            textArea.value = "";
            textArea.focus();
        	}
        })

    })

};

// event.preventDefault() evita que el botón realice alguna acción pretederminada.
function saveNewList(event) {
    event.preventDefault();
    var titleBoard = document.getElementById("title-list").value;
    document.getElementById("title-list").value = "";

    // Si no se inserta un texto, no pasaremos a la función y por ende
    // El botón "guardar" estará desabilitado

    if (titleBoard !== "") {
		cards.push(new card(titleBoard));
	}
};

function cancelNewList() {
    event.preventDefault();

    this.parentElement.remove();
};

function addItem() {
    event.preventDefault();
    var textItem = document.getElementsByTagName("textarea")[0].value;
    document.getElementsByTagName("textarea").value = "";
    if (textItem !== "") {
        var board = document.getElementsByClassName("new-board")[0];
        var contentItem = document.createElement("span");
        var textInsideItem = document.createTextNode(textItem);
        contentItem.appendChild(textInsideItem);
        board.appendChild(contentItem);
    }
};