const taskManager = document.getElementById('tasks');
const header = document.getElementById('header');
const ul = document.getElementsByTagName('ul')[0];

let AddBtn = function () {
    this.addBtn = document.createElement('img');
    this.addBtn.src = 'assets/add.png';
    this.addBtn.setAttribute('id', 'add');

    header.appendChild(this.addBtn);
};

AddBtn.prototype.newTask = function () {
    this.addBtn.addEventListener('click', AddTask);

    this.addBtn.onmouseover = () => {
        this.addBtn.style.cursor = 'pointer';
        this.addBtn.classList.add('img-over');
    }
    this.addBtn.onmouseout = () => {
        this.addBtn.classList.remove('img-over');
    }
}

let Task = function () {
    this.li = document.createElement('li');
    this.li.innerHTML = input.value;

    this.deleteBtn = this.deleteBtn = document.createElement('img');
    this.deleteBtn.src = 'assets/delete.png'

    this.li.insertAdjacentElement('afterbegin', this.deleteBtn)
    taskManager.appendChild(this.li)
};

Task.prototype.remove = function () {
    this.deleteBtn.addEventListener('click', () => {
        this.li.parentNode.removeChild(this.li);
    });
}

Task.prototype.buttonChange = function () {
    this.deleteBtn.onmouseover, () => {
        this.deleteBtn.style.cursor = 'pointer';
    };

    this.deleteBtn.onmouseover = () => {
        this.deleteBtn.classList.add('deleteBtn');
    };
    this.deleteBtn.onmouseout = () => this.deleteBtn.classList.remove('deleteBtn');
}

Task.prototype.taskComplete = function () {
    this.li.addEventListener('click', () => {
        this.li.classList.toggle('taskComplete');
    })
}

// let newTask = function (event) {
//     if (event.keyCode === 13) {
//         AddTask();
//     }
// }

let AddTask = function () {
    if (input.value === '') {
        return;
    }
    let task = new Task();

    task.taskComplete();

    task.remove();

    task.buttonChange();

    input.value = '';
};

const addBtn = new AddBtn();

const input = document.querySelector('input');
input.addEventListener('click', addBtn.newTask());

//тут я пытаюсь с помощью кнопки clear удалить все выполненные(зачеркнутые) элементы. спойлер! не работает
const clear = document.getElementById('clear-button');
clear.addEventListener('click', () => {
    let deleteList = document.querySelectorAll('taskComplete');
    
    deleteList.forEach((elem) => {
        elem.parentNode.removeChild(elem);
    })
})

//тут я нашел, как можно сохранять все в localstorage, но пока еще не совсем понял, как это работает.
const save = document.getElementById('save-button');
save.addEventListener('click', ()=>{
    localStorage.setItem('todo-list', ul.innerHTML);
})

// function loadTodos() {
//     const data = localStorage.getItem("todo-list");
//     if (data) {
//         ul.innerHTML = data;
//     }
// }

//     loadTodos();