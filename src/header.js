function createHeader() {
    const header = document.createElement('header');
    header.classList.add('header');
    const h1 = document.createElement('h1');
    h1.classList.add('title');
    h1.textContent = '📝 Todo List';
    header.appendChild(h1);

    return header;
}

export default createHeader;
