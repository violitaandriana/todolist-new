import createModal from "./addTaskModal.js";

function createRightSide() {
    const rightSide = document.createElement('div');
    rightSide.classList.add('right-side');

    const rightTitle = document.createElement('h2');
    rightTitle.classList.add('right-title');
    // Inbox / Today / Upcoming / Project
    rightTitle.textContent = 'Inbox';
    const addTaskButton = document.createElement('div');
    addTaskButton.classList.add('add-task-btn');
    addTaskButton.textContent = '+ Add Task';
    rightSide.appendChild(rightTitle);
    rightSide.appendChild(addTaskButton);

    const addTaskModal = createModal();
    rightSide.appendChild(addTaskModal);

    const containerTdl = document.createElement('div');
    containerTdl.classList.add('container-tdl');
    rightSide.appendChild(containerTdl);
    
    return rightSide;
}

export default createRightSide;