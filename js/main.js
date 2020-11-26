const newItemForm = document.querySelector(".new-item-form");
const newItemButton = document.querySelector(".new-item-form button");

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

    const input = this.name;
    const inputVal = input.value;

    if (inputVal != "") {
        const item = {
            id: Date().getTime(),
            name: inputVal,
            complete: false
        };

        items.push(item);

        localStorage.setItem("items", JSON.stringify(tasks));

        drawItem(item);

        newItemForm.reset();
    }

    input.focus();
});