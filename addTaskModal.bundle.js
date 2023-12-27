"use strict";
(self["webpackChunktodolist"] = self["webpackChunktodolist"] || []).push([["addTaskModal"],{

/***/ "./src/addTaskModal.js":
/*!*****************************!*\
  !*** ./src/addTaskModal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createModal);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/addTaskModal.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkVGFza01vZGFsLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvYWRkVGFza01vZGFsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuZnVuY3Rpb24gY3JlYXRlTW9kYWwoKSB7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdhZGQtdGFzay1tb2RhbCcpO1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ21ldGhvZCcsICcjJyk7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2stbW9kYWwtaGVhZGVyJyk7XG4gICAgY29uc3QgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGgzLnRleHRDb250ZW50ID0gJ05ldyBUYXNrJztcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaDMpO1xuXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJvZHkuY2xhc3NMaXN0LmFkZCgndGFzay1tb2RhbC1ib2R5Jyk7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ1RpdGxlJztcbiAgICBjb25zdCBpbnB1dFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dFRpdGxlLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgaW5wdXRUaXRsZS5jbGFzc0xpc3QuYWRkKCd0bS10aXRsZScpO1xuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gJ0Rlc2NyaXB0aW9uJztcbiAgICBjb25zdCB0ZXh0YXJlYURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICB0ZXh0YXJlYURlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnY29scycsICcyMCcpO1xuICAgIHRleHRhcmVhRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdyb3dzJywgJzMnKTtcbiAgICB0ZXh0YXJlYURlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3RtLWRlc2MnKTtcblxuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGR1ZURhdGUudGV4dENvbnRlbnQgPSAnRHVlIERhdGUnO1xuICAgIGNvbnN0IGlucHV0REQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0REQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcbiAgICBpbnB1dERELmNsYXNzTGlzdC5hZGQoJ3RtLWRkJyk7XG5cbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSAnUHJpb3JpdHknO1xuICAgIGNvbnN0IHNlbGVjdFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgc2VsZWN0UHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgndG0tcHJpb3JpdHknKTtcblxuICAgIGNvbnN0IGxvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgbG93LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnTG93Jyk7XG4gICAgbG93LnRleHRDb250ZW50ID0gJ0xvdyc7XG5cbiAgICBjb25zdCBtZWRpdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIG1lZGl1bS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ01lZGl1bScpO1xuICAgIG1lZGl1bS50ZXh0Q29udGVudCA9ICdNZWRpdW0nO1xuXG4gICAgY29uc3QgaGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgaGlnaC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ0hpZ2gnKTtcbiAgICBoaWdoLnRleHRDb250ZW50ID0gJ0hpZ2gnO1xuXG4gICAgLy8gU2V0IHRoZSBkZWZhdWx0IHNlbGVjdGVkIHZhbHVlIChsb3cpXG4gICAgbG93LnNlbGVjdGVkID0gdHJ1ZTtcblxuICAgIHNlbGVjdFByaW9yaXR5LmFwcGVuZENoaWxkKGxvdyk7XG4gICAgc2VsZWN0UHJpb3JpdHkuYXBwZW5kQ2hpbGQobWVkaXVtKTtcbiAgICBzZWxlY3RQcmlvcml0eS5hcHBlbmRDaGlsZChoaWdoKTtcblxuICAgIHByaW9yaXR5LmFwcGVuZENoaWxkKHNlbGVjdFByaW9yaXR5KTtcblxuICAgIGJvZHkuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoaW5wdXRUaXRsZSk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgYm9keS5hcHBlbmRDaGlsZCh0ZXh0YXJlYURlc2NyaXB0aW9uKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoaW5wdXRERCk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG5cbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb290ZXIuY2xhc3NMaXN0LmFkZCgndGFzay1tb2RhbC1mb290ZXInKTtcbiAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjYW5jZWxCdXR0b24uY2xhc3NMaXN0LmFkZCgnY2FuY2VsLW50LWJ0bicpO1xuICAgIGNhbmNlbEJ1dHRvbi50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuICAgIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFkZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhZGQtbnQtYnRuJyk7XG4gICAgYWRkQnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcbiAgICBhZGRCdXR0b24udGV4dENvbnRlbnQgPSAnQWRkIFRhc2snO1xuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pO1xuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChhZGRCdXR0b24pO1xuXG4gICAgZm9ybS5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoYm9keSk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChmb290ZXIpO1xuICAgIG1vZGFsLmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gICAgcmV0dXJuIG1vZGFsO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVNb2RhbDsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=