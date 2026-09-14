const taskInput = document.getElementById('taskInput');
const btn = document.getElementById('addButton');
const list = document.getElementById('taskList');

const totalTasksDisplay = document.getElementById('totalTasks');
const completedTasksDisplay = document.getElementById('completedTasks');
const emptyMessage = document.querySelector('.empty-list');

btn.addEventListener('click', function() {
  const taskName = taskInput.value.trim(); 
  if (!taskName) return; 

  const newItem = document.createElement('li');
  newItem.classList.add('task-item'); 

  newItem.innerHTML = `
    <input type="checkbox" class="complete-checkbox">
    <span class="task-text">${taskName}</span>
    <button class="delete-button">Delete</button>
  `;

  list.appendChild(newItem);
  taskInput.value = ''; 
  
  updateUI();
});

// --- Delete and Complete (Event Delegation) ---
list.addEventListener('click', function(e) {
  
  // Delete Button
  if (e.target.matches('.delete-button')) {
    e.target.parentElement.remove(); 
    updateUI(); // Sync the UI
  }

  // Checkbox
  if (e.target.matches('.complete-checkbox')) {
    e.target.parentElement.classList.toggle('completed');
    updateUI(); 
  }
});

// --- Derived State  ---
function updateUI() {
  const totalTasks = document.querySelectorAll('.task-item').length;
  const completedTasks = document.querySelectorAll('.task-item.completed').length;
  
  totalTasksDisplay.textContent = `Total tasks: ${totalTasks}`;
  completedTasksDisplay.textContent = `Completed: ${completedTasks}`;
  
  if (totalTasks === 0) {
    emptyMessage.style.display = 'block'; 
  } else {
    emptyMessage.style.display = 'none';
  }
}