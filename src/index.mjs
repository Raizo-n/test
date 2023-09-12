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

    // Add done and delete button to each created task
    const doneBtn = document.createElement('button');
    doneBtn.innerText = 'Done'
    doneBtn.addEventListener('click', () => {
        alert('yoo')
    })

    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.addEventListener('click', () => {
        const deleteTarget = deleteBtn.parentNode;
        document.getElementById('incomplete-list').removeChild(deleteTarget);
    })
    
    div.appendChild(li);
    div.appendChild(doneBtn);
    div.appendChild(deleteBtn);
    document.getElementById('incomplete-list').appendChild(div);
}

document
    .getElementById('add-button')
    .addEventListener('click', () => onClickAdd())