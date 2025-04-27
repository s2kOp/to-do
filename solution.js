function taskAdd() {
    const taskInput = document.querySelector('.taskEdit');
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskList = document.querySelector('.taskList');

        const taskCard = document.createElement('div');
        taskCard.className = 'taskCard';

        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = "🔴"; 
        deleteBtn.className = 'deleteBtn';

        deleteBtn.onclick = function() {
            taskList.removeChild(taskCard);
        };

        taskCard.appendChild(taskSpan);
        taskCard.appendChild(deleteBtn);
        taskList.appendChild(taskCard);

        taskInput.value = "";
    }
}
