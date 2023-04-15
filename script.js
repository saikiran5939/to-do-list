const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');
addTaskButton.addEventListener('click', () => {
  const task = taskInput.value.trim();
  if (task) {
    const li = document.createElement('li');
    li.textContent = task;
    taskList.appendChild(li);
    taskInput.value = '';
  }
});
taskList.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('completed');
  }
});
