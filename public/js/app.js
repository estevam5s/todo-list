document.addEventListener('DOMContentLoaded', () => {
  const taskList = document.getElementById('task-list');
  const taskNameInput = document.getElementById('task-name');
  const addTaskButton = document.getElementById('add-task');

  const updateTaskStatus = async (taskId, isCompleted) => {
    const response = await fetch(`/tasks/${taskId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ isCompleted }),
    });

    if (response.status === 200) {
      const listItem = document.querySelector(`[data-task-id="${taskId}"]`);
      if (isCompleted) {
        listItem.classList.add('completed');
      } else {
        listItem.classList.remove('completed');
      }
    }
  };

  const createTaskElement = (task) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
            <span>${task.name}</span>
            <button class="delete-task" data-task-id="${task.id}">Excluir</button>
        `;
    taskList.appendChild(listItem);

    listItem.addEventListener('click', () => {
      updateTaskStatus(task.id, true);
    });
  };

  const addTask = async (taskName) => {
    const response = await fetch('/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: taskName }),
    });

    if (response.status === 200) {
      const newTask = await response.json();
      createTaskElement(newTask);
    }
  };

  const deleteTask = async (taskId) => {
    const response = await fetch(`/tasks/${taskId}`, {
      method: 'DELETE',
    });

    if (response.status === 200) {
      const listItem = document.querySelector(`[data-task-id="${taskId}"]`);
      listItem.remove();
    }
  };

  addTaskButton.addEventListener('click', () => {
    const taskName = taskNameInput.value.trim();
    if (taskName) {
      addTask(taskName);
      taskNameInput.value = '';
    }
  });

  taskNameInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
      addTaskButton.click();
    }
  });

  taskList.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-task')) {
      const taskId = event.target.getAttribute('data-task-id');
      deleteTask(taskId);
    }
  });

  const listTasks = async () => {
    const response = await fetch('/tasks');
    const tasks = await response.json();

    tasks.forEach((task) => {
      createTaskElement(task);
    });
  };

  listTasks();
});
