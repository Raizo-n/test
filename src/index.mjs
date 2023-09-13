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
    doneBtn.innerText = 'Done';

    doneBtn.addEventListener('click', () => {
        const doneTarget = doneBtn.parentNode;
        deleteFromIncompleteList(doneTarget);

        // get the todo you wanna add to incomplete list
        const text = doneTarget.firstElementChild.innerText;

        // initialize above div
        doneTarget.textContent = null

        // add li tag
        const li = document.createElement('li')
        li.innerText = text
        
        // add cancel button
        const cancel = document.createElement('button')
        cancel.innerText = 'Cancel';

        // set each child to the div of doneTarget
        doneTarget.appendChild(li)
        doneTarget.appendChild(cancel)

        // add doneTarget to the complete list
        document.getElementById('complete-list').appendChild(doneTarget)
    })

    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';

    // delete the selected todo from incomplete list
    deleteBtn.addEventListener('click', () => {
        deleteFromIncompleteList(deleteBtn.parentNode)
    })
    
    div.appendChild(li);
    div.appendChild(doneBtn);
    div.appendChild(deleteBtn);
    document.getElementById('incomplete-list').appendChild(div);
}

// Function of deleting the selected todo from incomplete list
const deleteFromIncompleteList = (target) => {
    document.getElementById('incomplete-list').removeChild(target);
}

document
    .getElementById('add-button')
    .addEventListener('click', () => onClickAdd())