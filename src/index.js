import './styles.css';
import 'boxicons/css/boxicons.min.css';
import createHeader from './header.js';
import createLeftSide from './leftSide.js';
import createRightSide from './rightSide.js';
import Task from './Task.js';
import Project from './Project.js';
import { format } from 'date-fns';
import { 
    storageAvailable, 
    persistProject, 
    deserializeProject 
} from './localStorage.js';

// Header, Left Side, Right Side
const content = document.createElement('div');
content.classList.add('content');
const header = createHeader();
content.appendChild(header);
document.body.appendChild(content);
const container = document.createElement('div');
container.classList.add('container');
const leftSide = createLeftSide();
const rightSide = createRightSide();
container.appendChild(leftSide);
container.appendChild(rightSide);
document.body.appendChild(container);


// Add New Project / NP
const projectsContainer = document.querySelector('.projects-body');
const addProjectBtn = document.querySelector('.add-project-btn');
const addProjectModal = document.querySelector('.add-project-modal');
const addNewProjectButton = document.querySelector('.add-np-btn');
const cancelNewProjectButton = document.querySelector('.cancel-np-btn');
const newProject = document.querySelector('.new-project');

const projectsMap = new Map();
const todayDate = format(new Date(), 'EEEE, dd MMM yyyy');
const inbox = new Project('Inbox');
const today = new Project('Today');
const upcoming = new Project('Upcoming');

// Local Storage
let isStorageSupported = false;
window.addEventListener("load", () => {
    isStorageSupported = storageAvailable("localStorage");

    if (!isStorageSupported) {
        return;
    }

    // ambil semua data dari localStorage
    const storageData = Object.entries(window.localStorage);
    if (storageData.length === 0){
        return;
    }
    storageData.forEach(([key,val]) => projectsMap.set(key, deserializeProject(val)));
    renderAllProjects();
});

// Display the Add Project Modal
addProjectBtn.addEventListener('click', () => {
    addProjectModal.style.display = 'block';
});
addNewProjectButton.addEventListener('click', function() {
    addNewProject();
});
cancelNewProjectButton.addEventListener('click', resetAddProjectModal);

function addNewProject() {
    const projectName = newProject.value;
    const project = new Project(projectName);
    projectsMap.set(projectName, project);

    persistProject(project);
    resetAddProjectModal();
    renderAllProjects();
}

function resetAddProjectModal() {
    addProjectModal.style.display = 'none';
    newProject.value = '';
}

function renderAllProjects() {
    resetProjects();
    projectsMap.forEach(project => {
        const name = project.getName();
        const projectBtn = document.createElement('button');
        projectBtn.classList.add('project-btn');
        projectBtn.textContent = name;
        const delProjectBtn = document.createElement('button');
        delProjectBtn.classList.add('del-project-btn');
        delProjectBtn.textContent = 'x';
        projectsContainer.appendChild(projectBtn);
        projectsContainer.appendChild(delProjectBtn);

        // Display Tasks in a Project
        projectBtn.addEventListener('click', function () {
            renderAllTasks(project);
        });
        // Delete a Project
        delProjectBtn.addEventListener('click', function () {
            deleteProject(name);
        });
    });
}

function deleteProject(projectName) {
    projectsMap.delete(projectName);
    renderAllProjects();
}

function resetProjects() {
    projectsContainer.textContent = '';
}

// Add New Task / NT
const tasksContainer = document.querySelector('.container-tdl');
const addTaskBtn = document.querySelector('.add-task-btn');
const addNewTaskButton = document.querySelector('.add-nt-btn');
const cancelNewTaskButton = document.querySelector('.cancel-nt-btn');
const addTaskModal = document.querySelector('.add-task-modal');
const inboxBtn = document.querySelector('.inbox-btn');
const todayBtn = document.querySelector('.today-btn');
const upcBtn = document.querySelector('.upc-btn');
const projectTitle = document.querySelector('.right-title');

addTaskBtn.addEventListener('click', () => {
    addTaskModal.style.display = 'block';
    tasksContainer.style.display = 'none';
});
addNewTaskButton.addEventListener('click', addNewTask);
cancelNewTaskButton.addEventListener('click', resetAddTaskModal);
// Inbox
inboxBtn.addEventListener('click', function () {
    renderAllTasks(inbox);
});
// Today, render tasks with due date = today
todayBtn.addEventListener('click', function () {
    hideAddTask();
    renderAllTasks(today);
});
// Upcoming, render tasks with due date > today
upcBtn.addEventListener('click', function () {
    hideAddTask();
    renderAllTasks(upcoming);
});

function hideAddTask() {
    addTaskBtn.style.display = 'none';
}

function showAddTask() {
    addTaskBtn.style.display = 'block';
}

// Get user input & change it to Task Object
function getTaskFromUser() {
    const titleInput = document.querySelector('.tm-title').value;
    const descInput = document.querySelector('.tm-desc').value;
    const ddInput = document.querySelector('.tm-dd').value;
    const priorityInput = document.querySelector('.tm-priority').value;
    const task = new Task(titleInput, descInput, ddInput, priorityInput);
    return task;
}

function addNewTaskInbox() {
    const task = getTaskFromUser();
    if (!(inbox.checkTask(task.getTitle()))) {
        inbox.addTask(task);
    }
    resetAddTaskModal();
    renderAllTasks(inbox);
}

function addNewTask(event) {
    event.preventDefault();
    tasksContainer.style.display = 'block';
    const currentProjectName = projectTitle.textContent;
    if (currentProjectName === 'Inbox') {
        addNewTaskInbox();
        persistProject(inbox);
        return;
    }
    const currentProject = projectsMap.get(currentProjectName);
    const task = getTaskFromUser();
    if (!(currentProject.checkTask(task.getTitle()))) {
        currentProject.addTask(task);
    }
    persistProject(currentProject);

    resetAddTaskModal();
    renderAllTasks(currentProject);
}

function renderAllTasks(project) {
    resetTasksRender();
    if (project !== today && project !== upcoming) {
        showAddTask();
    }
    projectTitle.textContent = project.getName();
    tasksContainer.style.display = 'block';
    const tasks = project.getAllTasks();

    tasks.forEach((task, index) => {
        let openDetail = false;
        // Today
        if (task.getDueDate() === todayDate && !(today.checkTask(task.getTitle()))) {
            today.addTask(task);
        }
        // Upcoming
        else if (task.getDueDate() > todayDate && !(upcoming.checkTask(task.getTitle()))) {
            upcoming.addTask(task);
        }

        const tdlItem = document.createElement('div');
        tdlItem.classList.add('tdl-item');
        const tdl = document.createElement('div');
        tdl.classList.add('to-do-list');
        const tdlLeft = document.createElement('div');
        tdlLeft.classList.add('tdl-left');
        const checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        const span = document.createElement('span');
        span.textContent = task.getTitle();
        tdlLeft.appendChild(checkbox);
        tdlLeft.appendChild(span);
        const tdlRight = document.createElement('div');
        tdlRight.classList.add('tdl-right');
        const infoBtn = document.createElement('button');
        const editBtn = document.createElement('button');
        const delBtn = document.createElement('button');
        const buttons = [infoBtn, editBtn, delBtn];
        buttons.forEach(button => {
            button.classList.add('bx');
        });
        infoBtn.classList.add('bx-info-circle');
        editBtn.classList.add('bx-edit-alt');
        delBtn.classList.add('bx-trash-alt');
        buttons.forEach(button => {
            tdlRight.appendChild(button);
        });
        tdl.appendChild(tdlLeft);
        tdl.appendChild(tdlRight);

        infoBtn.addEventListener('click', () => {
            if (openDetail) {
                openDetail = false;
                tdlBody.style.display = 'none';
                return;
            }
            tdlBody.style.display = 'block';
            openDetail = true;
        });

        delBtn.addEventListener('click', () => {
            project.deleteTask(index);
            renderAllTasks(project);
        });

        checkbox.addEventListener('click', () => {
            project.deleteTask(index);
            renderAllTasks(project);
        });

        const tdlBody = document.createElement('div');
        tdlBody.classList.add('tdl-body');
        const date = document.createElement('h5');
        date.textContent = `Date: ${task.getDueDate()}`;
        const description = document.createElement('h5');
        description.textContent = `Description: ${task.getDescription()}`;
        const priority = document.createElement('h5');
        priority.textContent = `Priority: ${task.getPriority()}`;

        tdlBody.appendChild(date);
        tdlBody.appendChild(description);
        tdlBody.appendChild(priority);

        tdlItem.appendChild(tdl);
        tdlItem.appendChild(tdlBody);
        tasksContainer.appendChild(tdlItem);
    });

}

function resetTasksRender() {
    tasksContainer.textContent = '';
}

function resetAddTaskModal() {
    addTaskModal.style.display = 'none';
    const titleInput = document.querySelector('.tm-title');
    const descInput = document.querySelector('.tm-desc');
    const ddInput = document.querySelector('.tm-dd');
    const priorityInput = document.querySelector('.tm-priority');
    titleInput.value = '';
    descInput.value = '';
    ddInput.value = '';
    priorityInput.value = 'Low';
}