"use strict";
(self["webpackChunktodolist"] = self["webpackChunktodolist"] || []).push([["rightSide"],{

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

/***/ }),

/***/ "./src/rightSide.js":
/*!**************************!*\
  !*** ./src/rightSide.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addTaskModal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addTaskModal.js */ "./src/addTaskModal.js");


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

    const addTaskModal = (0,_addTaskModal_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
    rightSide.appendChild(addTaskModal);

    const containerTdl = document.createElement('div');
    containerTdl.classList.add('container-tdl');
    rightSide.appendChild(containerTdl);
    
    return rightSide;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createRightSide);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/rightSide.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmlnaHRTaWRlLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLFdBQVc7Ozs7Ozs7Ozs7Ozs7OztBQ3RGa0I7O0FBRTVDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEseUJBQXlCLDREQUFXO0FBQ3BDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxlQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvYWRkVGFza01vZGFsLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3JpZ2h0U2lkZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjcmVhdGVNb2RhbCgpIHtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ2FkZC10YXNrLW1vZGFsJyk7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBmb3JtLnNldEF0dHJpYnV0ZSgnbWV0aG9kJywgJyMnKTtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgndGFzay1tb2RhbC1oZWFkZXInKTtcbiAgICBjb25zdCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgaDMudGV4dENvbnRlbnQgPSAnTmV3IFRhc2snO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChoMyk7XG5cbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYm9keS5jbGFzc0xpc3QuYWRkKCd0YXNrLW1vZGFsLWJvZHknKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSAnVGl0bGUnO1xuICAgIGNvbnN0IGlucHV0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0VGl0bGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICBpbnB1dFRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RtLXRpdGxlJyk7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSAnRGVzY3JpcHRpb24nO1xuICAgIGNvbnN0IHRleHRhcmVhRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIHRleHRhcmVhRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdjb2xzJywgJzIwJyk7XG4gICAgdGV4dGFyZWFEZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ3Jvd3MnLCAnMycpO1xuICAgIHRleHRhcmVhRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgndG0tZGVzYycpO1xuXG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgZHVlRGF0ZS50ZXh0Q29udGVudCA9ICdEdWUgRGF0ZSc7XG4gICAgY29uc3QgaW5wdXRERCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXRERC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICAgIGlucHV0REQuY2xhc3NMaXN0LmFkZCgndG0tZGQnKTtcblxuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBwcmlvcml0eS50ZXh0Q29udGVudCA9ICdQcmlvcml0eSc7XG4gICAgY29uc3Qgc2VsZWN0UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBzZWxlY3RQcmlvcml0eS5jbGFzc0xpc3QuYWRkKCd0bS1wcmlvcml0eScpO1xuXG4gICAgY29uc3QgbG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBsb3cuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdMb3cnKTtcbiAgICBsb3cudGV4dENvbnRlbnQgPSAnTG93JztcblxuICAgIGNvbnN0IG1lZGl1bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgbWVkaXVtLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnTWVkaXVtJyk7XG4gICAgbWVkaXVtLnRleHRDb250ZW50ID0gJ01lZGl1bSc7XG5cbiAgICBjb25zdCBoaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBoaWdoLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnSGlnaCcpO1xuICAgIGhpZ2gudGV4dENvbnRlbnQgPSAnSGlnaCc7XG5cbiAgICAvLyBTZXQgdGhlIGRlZmF1bHQgc2VsZWN0ZWQgdmFsdWUgKGxvdylcbiAgICBsb3cuc2VsZWN0ZWQgPSB0cnVlO1xuXG4gICAgc2VsZWN0UHJpb3JpdHkuYXBwZW5kQ2hpbGQobG93KTtcbiAgICBzZWxlY3RQcmlvcml0eS5hcHBlbmRDaGlsZChtZWRpdW0pO1xuICAgIHNlbGVjdFByaW9yaXR5LmFwcGVuZENoaWxkKGhpZ2gpO1xuXG4gICAgcHJpb3JpdHkuYXBwZW5kQ2hpbGQoc2VsZWN0UHJpb3JpdHkpO1xuXG4gICAgYm9keS5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChpbnB1dFRpdGxlKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKHRleHRhcmVhRGVzY3JpcHRpb24pO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChpbnB1dEREKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKHByaW9yaXR5KTtcblxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCd0YXNrLW1vZGFsLWZvb3RlcicpO1xuICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNhbmNlbEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjYW5jZWwtbnQtYnRuJyk7XG4gICAgY2FuY2VsQnV0dG9uLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XG4gICAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FkZC1udC1idG4nKTtcbiAgICBhZGRCdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuICAgIGFkZEJ1dHRvbi50ZXh0Q29udGVudCA9ICdBZGQgVGFzayc7XG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGNhbmNlbEJ1dHRvbik7XG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGFkZEJ1dHRvbik7XG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChib2R5KTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGZvb3Rlcik7XG4gICAgbW9kYWwuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgICByZXR1cm4gbW9kYWw7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU1vZGFsOyIsImltcG9ydCBjcmVhdGVNb2RhbCBmcm9tIFwiLi9hZGRUYXNrTW9kYWwuanNcIjtcblxuZnVuY3Rpb24gY3JlYXRlUmlnaHRTaWRlKCkge1xuICAgIGNvbnN0IHJpZ2h0U2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJpZ2h0U2lkZS5jbGFzc0xpc3QuYWRkKCdyaWdodC1zaWRlJyk7XG5cbiAgICBjb25zdCByaWdodFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICByaWdodFRpdGxlLmNsYXNzTGlzdC5hZGQoJ3JpZ2h0LXRpdGxlJyk7XG4gICAgLy8gSW5ib3ggLyBUb2RheSAvIFVwY29taW5nIC8gUHJvamVjdFxuICAgIHJpZ2h0VGl0bGUudGV4dENvbnRlbnQgPSAnSW5ib3gnO1xuICAgIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhZGRUYXNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FkZC10YXNrLWJ0bicpO1xuICAgIGFkZFRhc2tCdXR0b24udGV4dENvbnRlbnQgPSAnKyBBZGQgVGFzayc7XG4gICAgcmlnaHRTaWRlLmFwcGVuZENoaWxkKHJpZ2h0VGl0bGUpO1xuICAgIHJpZ2h0U2lkZS5hcHBlbmRDaGlsZChhZGRUYXNrQnV0dG9uKTtcblxuICAgIGNvbnN0IGFkZFRhc2tNb2RhbCA9IGNyZWF0ZU1vZGFsKCk7XG4gICAgcmlnaHRTaWRlLmFwcGVuZENoaWxkKGFkZFRhc2tNb2RhbCk7XG5cbiAgICBjb25zdCBjb250YWluZXJUZGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXJUZGwuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyLXRkbCcpO1xuICAgIHJpZ2h0U2lkZS5hcHBlbmRDaGlsZChjb250YWluZXJUZGwpO1xuICAgIFxuICAgIHJldHVybiByaWdodFNpZGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVJpZ2h0U2lkZTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=