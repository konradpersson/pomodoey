// Accesibility help from https://inclusive-components.design/a-todo-list/
// Vanilla JS help from https://webdesign.tutsplus.com/tutorials/to-do-app-with-vanilla-javascript--cms-35258
// With some help from https://codepen.io/ImagineProgramming/pen/ZYEZxJ
// More help from https://www.javascripttutorial.net/javascript-dom/javascript-checkbox/

const newItemForm = document.querySelector(".new-item-form");
const newItemButton = document.querySelector(".new-item-form button");
const todoList = document.querySelector(".todo-list");

let items = JSON.parse(localStorage.getItem("items")) || [];

// TODO function
if (localStorage.getItem("items")) {
    items.map((item) => {
        drawItem(item);
    });
}


/*
 * Listens for input on new item text field and enables the button if the text field has characters. 
 */
newItemForm.addEventListener("input", function(e) {
    
    if (e.target.value.length > 0) {
        newItemButton.disabled = false;
    } else {
        newItemButton.disabled = true;
    }

});


newItemForm.addEventListener("submit", function(e) {

    e.preventDefault();

    // HELP! I dont get this - How do I select a specific name which is not name
    const input = this.name;
    const inputVal = input.value;

    if (inputVal !== "") {
        const item = {
            id: new Date().getTime(),
            name: inputVal,
            complete: false
        };

        items.push(item);

        localStorage.setItem("items", JSON.stringify(items));

        drawItem(item);

        newItemForm.reset();
    }

    input.focus();
});

function drawItem(item) {
    
    const itemWrapper = document.createElement("li");

    itemWrapper.setAttribute("id", item.id);

    const itemContent = `
        <input type="checkbox" id="todo-${item.id}" class="toggle-complete-todo-item">
        <label for="todo-${item.id}">${item.name}</label>
        <button aria-label="delete todo-${item.id}" class="remove-todo-item">&times;</button>
    `;

    itemWrapper.innerHTML = itemContent;
    todoList.appendChild(itemWrapper);

    const itemCheckbox = document.getElementById("todo-" + item.id);

    if (item.complete == true) {
        itemCheckbox.checked = true;
    }

}

todoList.addEventListener("click", (e) => {
    if ( e.target.classList.contains("remove-todo-item")) {
        const itemWrapperId = e.target.closest("li").id;
        removeItem(itemWrapperId);

        // How do i target the input type checkbox?
    } else if ( e.target.classList.contains("toggle-complete-todo-item")) {
        const itemWrapperId = e.target.closest("li").id;
        updateItem(itemWrapperId);
    }
});

function updateItem (itemWrapperId) {
    const item = items.find((item) => item.id === parseInt(itemWrapperId));
    
    item.complete = !item.complete;

    localStorage.setItem("items", JSON.stringify(items));
}


function removeItem(itemWrapperId) {
    items = items.filter((item) => item.id !== parseInt(itemWrapperId));

    localStorage.setItem("items", JSON.stringify(items));

    document.getElementById(itemWrapperId).remove();
}