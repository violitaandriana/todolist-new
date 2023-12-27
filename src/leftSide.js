// Side Nav with active Inbox 
function createLeftSide() {
    const leftSide = document.createElement('div');
    leftSide.classList.add('left-side');

    const topNav = document.createElement('div');
    topNav.classList.add('top-nav');
    const inboxButton = document.createElement('button');
    const todayButton = document.createElement('button');
    const upcButton = document.createElement('button');

    const buttons = [inboxButton, todayButton, upcButton];
    buttons.forEach(button => {
        button.classList.add('item');
    });

    inboxButton.classList.add('inbox-btn');
    inboxButton.textContent = '📩 Inbox';
    todayButton.classList.add('today-btn');
    todayButton.textContent = '📌 Today';
    upcButton.classList.add('upc-btn');
    upcButton.textContent = '🗓️ Upcoming';
    buttons.forEach(button => {
        topNav.appendChild(button);
    });

    const bottomNav = document.createElement('div');
    bottomNav.classList.add('bottom-nav');
    const projectsHeader = document.createElement('div');
    projectsHeader.classList.add('projects-header');
    const projectsTitle = document.createElement('div');
    projectsTitle.textContent = 'Projects';
    projectsTitle.classList.add('projects-title');
    const addProjectButton = document.createElement('button');
    addProjectButton.classList.add('add-project-btn');
    addProjectButton.textContent = '+ Add Project';
    projectsHeader.appendChild(projectsTitle);
    projectsHeader.appendChild(addProjectButton);
    bottomNav.appendChild(projectsHeader);
    // Add Project Modal
    const addProjectModal = document.createElement('div');
    addProjectModal.classList.add('add-project-modal');
    
    const modalHeader = document.createElement('div');
    modalHeader.classList.add('modal-header');
    const modalTitle = document.createElement('h5');
    modalTitle.classList.add('modal-title');
    modalTitle.textContent = 'New Project';
    modalHeader.appendChild(modalTitle);

    const modalBody = document.createElement('div');
    modalBody.classList.add('modal-body');
    const newProject = document.createElement('input');
    newProject.setAttribute('type', 'text');
    newProject.classList.add('new-project');
    modalBody.appendChild(newProject);

    const modalFooter = document.createElement('div');
    modalFooter.classList.add('modal-footer');
    const cancelNpButton = document.createElement('button');
    cancelNpButton.classList.add('cancel-np-btn');
    cancelNpButton.textContent = 'Cancel';
    const addNpButton = document.createElement('button');
    addNpButton.classList.add('add-np-btn');
    addNpButton.setAttribute('type', 'submit');
    addNpButton.textContent = 'Add Project';
    modalFooter.appendChild(cancelNpButton);
    modalFooter.appendChild(addNpButton);

    addProjectModal.appendChild(modalHeader);
    addProjectModal.appendChild(modalBody);
    addProjectModal.appendChild(modalFooter);
    bottomNav.appendChild(addProjectModal);

    // Container for all projects
    const projectsBody = document.createElement('div');
    projectsBody.classList.add('projects-body');
    bottomNav.appendChild(projectsBody);

    leftSide.appendChild(topNav);
    leftSide.appendChild(bottomNav);
    return leftSide;
}

export default createLeftSide;