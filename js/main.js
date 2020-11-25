const newItemInput = document.getElementById('new-item-text-input');
const newItemButton = document.getElementById('new-item-submit-button');

newItemInput.addEventListener('input', updateValue);

function updateValue(e){

    if (e.target.value.length > 0) {
        newItemButton.disabled = false;
    } else {
        newItemButton.disabled = true;
    }

}