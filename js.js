const taskManager = document.getElementById('tasks');
const header = document.getElementById('header');
const ul = document.getElementById('tasks');
addBtn = document.getElementById('add');

const input = document.querySelector('input');

function createTask(text) {
    let li = document.createElement('li');
    li.classList.add('task');
    li.innerHTML = text;
    return li;
}

function renderTask(text) {
    let li = createTask(text);
    taskManager.appendChild(li);
}

let AddTask = function () {
    if (input.value === '') {
        return;
    }
    renderTask(input.value);
    input.value = '';
};

taskManager.onclick = (event) => {
    if (event.target.tagName == 'UL') {
        return;
    }
    event.target.classList.toggle('taskComplete');
}

addBtn.addEventListener('click', AddTask);

const clear = document.getElementById('clear-button');
clear.addEventListener('click', () => {
    let deleteList = document.querySelectorAll('.taskComplete');

    deleteList.forEach((element) => {
        element.parentNode.removeChild(element);
    })
})

const save = document.getElementById('save-button');

save.addEventListener('click', () => {
    const data = Array.from(document.getElementById('tasks').children).map(element => element.innerHTML);
    console.log(data);

    localStorage.setItem('todo-list', data);
})

function loadTodos() {
   const data = localStorage.getItem('todo-list').split(',');

   data.forEach(text => renderTask(text));
}

    loadTodos();
