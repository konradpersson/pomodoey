const newItemForm = document.querySelector('.new-item-form');
const newItemButton = document.querySelector('.new-item-form button');

let items = [];

newItemForm.addEventListener('input', function(e) {
    
    if (e.target.value.length > 0) {
        newItemButton.disabled = false;
    } else {
        newItemButton.disabled = true;
    }

});