const taskInput = document.getElementById('task__input');
const taskAddBtn = document.getElementById('tasks__add');
const taskList = document.getElementById('tasks__list');

function addTask(event) {
  if ((event.type == 'click' || (event.type == 'keydown' && event.key == 'Enter')) && taskInput.value.length != 0) {
    taskList.innerHTML += 
      `<div class="task">
         <div class="task__title">
           ${taskInput.value}
         </div>
         <a href="#" class="task__remove">&times;</a>
       </div>`;
    taskInput.value = null;
    event.preventDefault();
  } else if (event.type == 'click') {
    event.preventDefault();
  }
}

function delTask(event) {
  if (Array.from(event.target.classList).includes('task__remove')) {
    event.target.parentElement.remove();
  }
}

taskInput.addEventListener('keydown', addTask);

taskAddBtn.addEventListener('click', addTask);

document.addEventListener('click', delTask);