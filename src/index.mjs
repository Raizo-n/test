import "./styles.css";

const onClickAdd = () => {
    // get the value from the input and clear the input box after adding a task
    const inputText = document.getElementById('input-task').value;
    document.getElementById('input-task').value = '';

    // Add div tag
    const div = document.createElement('div');
    div.className = 'flex'

    // Add li tag
    const li = document.createElement('li');
    li.innerText = inputText;

    div.appendChild(li);
    document.getElementById('incomplete-list').appendChild(div);
}

document
    .getElementById('add-button')
    .addEventListener('click', () => onClickAdd())