const newItemForm = document.querySelector(".new-item-form");
const newItemButton = document.querySelector(".new-item-form button");
const todoList = document.querySelector(".todo-list");

let items = [];

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

    // I dont get this - How do I select a specific name which is not name
    const input = this.name;
    const inputVal = input.value;

    if (inputVal != "") {
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
    // TODO id format should be todo-id-xxx where xxx is a constantly increasing number read from local storage starting at 1
    itemWrapper.setAttribute("id", itemWrapper.id);

    const itemContent = `
        <input type="checkbox" id="todo-${item.id}">
        <label for="todo-${item.id}">${item.name}</label>
        <button aria-label="delete todo-${item.id}">&times;</button>
    `;

    itemWrapper.innerHTML = itemContent;
    todoList.appendChild(itemWrapper);

};