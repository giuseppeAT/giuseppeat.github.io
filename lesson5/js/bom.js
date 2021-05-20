const input = document.querySelector('#favchap')

const button = document.querySelector('button')

const output = document.querySelector('.list')

button.addEventListener('click', () => {
    let myItem = input.value;
    input.value = '';

    let li = document.createElement('li');
    let deleteButton = document.createElement('button');

    li.textContent = myItem;
    deleteButton.textContent = '❌';

    li.appendChild(deleteButton);
    output.appendChild(li);

    deleteButton.addEventListener('click', function() {
        output.removeChild(li);
        input.focus();
    })
})