
function createModal() {
    const modal = document.createElement('div');
    modal.classList.add('add-task-modal');
    const form = document.createElement('form');
    form.setAttribute('method', '#');
    const header = document.createElement('div');
    header.classList.add('task-modal-header');
    const h3 = document.createElement('h3');
    h3.textContent = 'New Task';
    header.appendChild(h3);

    const body = document.createElement('div');
    body.classList.add('task-modal-body');
    const title = document.createElement('label');
    title.textContent = 'Title';
    const inputTitle = document.createElement('input');
    inputTitle.setAttribute('type', 'text');
    inputTitle.classList.add('tm-title');

    const description = document.createElement('label');
    description.textContent = 'Description';
    const textareaDescription = document.createElement('textarea');
    textareaDescription.setAttribute('cols', '20');
    textareaDescription.setAttribute('rows', '3');
    textareaDescription.classList.add('tm-desc');

    const dueDate = document.createElement('label');
    dueDate.textContent = 'Due Date';
    const inputDD = document.createElement('input');
    inputDD.setAttribute('type', 'date');
    inputDD.classList.add('tm-dd');

    const priority = document.createElement('label');
    priority.textContent = 'Priority';
    const selectPriority = document.createElement('select');
    selectPriority.classList.add('tm-priority');

    const low = document.createElement("option");
    low.setAttribute('value', 'Low');
    low.textContent = 'Low';

    const medium = document.createElement("option");
    medium.setAttribute('value', 'Medium');
    medium.textContent = 'Medium';

    const high = document.createElement("option");
    high.setAttribute('value', 'High');
    high.textContent = 'High';

    // Set the default selected value (low)
    low.selected = true;

    selectPriority.appendChild(low);
    selectPriority.appendChild(medium);
    selectPriority.appendChild(high);

    priority.appendChild(selectPriority);

    body.appendChild(title);
    body.appendChild(inputTitle);
    body.appendChild(description);
    body.appendChild(textareaDescription);
    body.appendChild(dueDate);
    body.appendChild(inputDD);
    body.appendChild(priority);

    const footer = document.createElement('div');
    footer.classList.add('task-modal-footer');
    const cancelButton = document.createElement('button');
    cancelButton.classList.add('cancel-nt-btn');
    cancelButton.textContent = 'Cancel';
    const addButton = document.createElement('button');
    addButton.classList.add('add-nt-btn');
    addButton.setAttribute('type', 'submit');
    addButton.textContent = 'Add Task';
    footer.appendChild(cancelButton);
    footer.appendChild(addButton);

    form.appendChild(header);
    form.appendChild(body);
    form.appendChild(footer);
    modal.appendChild(form);

    return modal;
}

export default createModal;