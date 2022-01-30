const container = document.querySelector('.container');
let inputValue = document.querySelector('.input');
const add = document.querySelector('.add');





class item {
    constructor(name) {
        this.createItem(name);
    }
    createItem(name) {
        let itemBox = document.createElement('div');
        itemBox.classList.add('item');

        let input = document.createElement('input');
        input.type = "text";
        input.disabled = true;
        input.value = name;
        input.classList.add('item_input');

        let edit = document.createElement('button');
        edit.classList.add('edit');
        edit.innerHTML = "EDIT";
        edit.addEventListener('click', () => this.edit(input, name));

        let remove = document.createElement('button');
        remove.classList.add('remove');
        remove.innerHTML = "REMOVE";
        remove.addEventListener('click', () => this.remove(itemBox, name));

        container.appendChild(itemBox);
        itemBox.appendChild(input);
        itemBox.appendChild(edit);
        itemBox.appendChild(remove);

    }

    edit(input, name) {
        if (input.disabled == true) {
            input.disabled = !input.disabled;
        }
        else {
            input.disabled = !input.disabled;
            let indexof = todos.indexOf(name);
            todos[indexof] = input.value;

        }
    }

    remove(itemBox, name) {
        itemBox.parentNode.removeChild(itemBox);
        let index = todos.indexOf(name);
        todos.splice(index, 1);

    }


}

add.addEventListener('click', check);
window.addEventListener('keydown', (e) => {
    if (e.which == 13) {
        check();
    }
})

function check() {
    if (inputValue.value != "") {
        new item(inputValue.value);

    }
}





new item("sport");