"use strict";
(self["webpackChunktodolist"] = self["webpackChunktodolist"] || []).push([["leftSide"],{

/***/ "./src/leftSide.js":
/*!*************************!*\
  !*** ./src/leftSide.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createLeftSide);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/leftSide.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVmdFNpZGUuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxjQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbGVmdFNpZGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gU2lkZSBOYXYgd2l0aCBhY3RpdmUgSW5ib3ggXG5mdW5jdGlvbiBjcmVhdGVMZWZ0U2lkZSgpIHtcbiAgICBjb25zdCBsZWZ0U2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxlZnRTaWRlLmNsYXNzTGlzdC5hZGQoJ2xlZnQtc2lkZScpO1xuXG4gICAgY29uc3QgdG9wTmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9wTmF2LmNsYXNzTGlzdC5hZGQoJ3RvcC1uYXYnKTtcbiAgICBjb25zdCBpbmJveEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IHRvZGF5QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgdXBjQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICBjb25zdCBidXR0b25zID0gW2luYm94QnV0dG9uLCB0b2RheUJ1dHRvbiwgdXBjQnV0dG9uXTtcbiAgICBidXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2l0ZW0nKTtcbiAgICB9KTtcblxuICAgIGluYm94QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2luYm94LWJ0bicpO1xuICAgIGluYm94QnV0dG9uLnRleHRDb250ZW50ID0gJ/Cfk6kgSW5ib3gnO1xuICAgIHRvZGF5QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3RvZGF5LWJ0bicpO1xuICAgIHRvZGF5QnV0dG9uLnRleHRDb250ZW50ID0gJ/Cfk4wgVG9kYXknO1xuICAgIHVwY0J1dHRvbi5jbGFzc0xpc3QuYWRkKCd1cGMtYnRuJyk7XG4gICAgdXBjQnV0dG9uLnRleHRDb250ZW50ID0gJ/Cfl5PvuI8gVXBjb21pbmcnO1xuICAgIGJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICB0b3BOYXYuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGJvdHRvbU5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJvdHRvbU5hdi5jbGFzc0xpc3QuYWRkKCdib3R0b20tbmF2Jyk7XG4gICAgY29uc3QgcHJvamVjdHNIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0c0hlYWRlci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0cy1oZWFkZXInKTtcbiAgICBjb25zdCBwcm9qZWN0c1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdHNUaXRsZS50ZXh0Q29udGVudCA9ICdQcm9qZWN0cyc7XG4gICAgcHJvamVjdHNUaXRsZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0cy10aXRsZScpO1xuICAgIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGRQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FkZC1wcm9qZWN0LWJ0bicpO1xuICAgIGFkZFByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSAnKyBBZGQgUHJvamVjdCc7XG4gICAgcHJvamVjdHNIZWFkZXIuYXBwZW5kQ2hpbGQocHJvamVjdHNUaXRsZSk7XG4gICAgcHJvamVjdHNIZWFkZXIuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEJ1dHRvbik7XG4gICAgYm90dG9tTmF2LmFwcGVuZENoaWxkKHByb2plY3RzSGVhZGVyKTtcbiAgICAvLyBBZGQgUHJvamVjdCBNb2RhbFxuICAgIGNvbnN0IGFkZFByb2plY3RNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFkZFByb2plY3RNb2RhbC5jbGFzc0xpc3QuYWRkKCdhZGQtcHJvamVjdC1tb2RhbCcpO1xuICAgIFxuICAgIGNvbnN0IG1vZGFsSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbW9kYWxIZWFkZXIuY2xhc3NMaXN0LmFkZCgnbW9kYWwtaGVhZGVyJyk7XG4gICAgY29uc3QgbW9kYWxUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XG4gICAgbW9kYWxUaXRsZS5jbGFzc0xpc3QuYWRkKCdtb2RhbC10aXRsZScpO1xuICAgIG1vZGFsVGl0bGUudGV4dENvbnRlbnQgPSAnTmV3IFByb2plY3QnO1xuICAgIG1vZGFsSGVhZGVyLmFwcGVuZENoaWxkKG1vZGFsVGl0bGUpO1xuXG4gICAgY29uc3QgbW9kYWxCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbW9kYWxCb2R5LmNsYXNzTGlzdC5hZGQoJ21vZGFsLWJvZHknKTtcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBuZXdQcm9qZWN0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgbmV3UHJvamVjdC5jbGFzc0xpc3QuYWRkKCduZXctcHJvamVjdCcpO1xuICAgIG1vZGFsQm9keS5hcHBlbmRDaGlsZChuZXdQcm9qZWN0KTtcblxuICAgIGNvbnN0IG1vZGFsRm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbW9kYWxGb290ZXIuY2xhc3NMaXN0LmFkZCgnbW9kYWwtZm9vdGVyJyk7XG4gICAgY29uc3QgY2FuY2VsTnBCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjYW5jZWxOcEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjYW5jZWwtbnAtYnRuJyk7XG4gICAgY2FuY2VsTnBCdXR0b24udGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcbiAgICBjb25zdCBhZGROcEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFkZE5wQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FkZC1ucC1idG4nKTtcbiAgICBhZGROcEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG4gICAgYWRkTnBCdXR0b24udGV4dENvbnRlbnQgPSAnQWRkIFByb2plY3QnO1xuICAgIG1vZGFsRm9vdGVyLmFwcGVuZENoaWxkKGNhbmNlbE5wQnV0dG9uKTtcbiAgICBtb2RhbEZvb3Rlci5hcHBlbmRDaGlsZChhZGROcEJ1dHRvbik7XG5cbiAgICBhZGRQcm9qZWN0TW9kYWwuYXBwZW5kQ2hpbGQobW9kYWxIZWFkZXIpO1xuICAgIGFkZFByb2plY3RNb2RhbC5hcHBlbmRDaGlsZChtb2RhbEJvZHkpO1xuICAgIGFkZFByb2plY3RNb2RhbC5hcHBlbmRDaGlsZChtb2RhbEZvb3Rlcik7XG4gICAgYm90dG9tTmF2LmFwcGVuZENoaWxkKGFkZFByb2plY3RNb2RhbCk7XG5cbiAgICAvLyBDb250YWluZXIgZm9yIGFsbCBwcm9qZWN0c1xuICAgIGNvbnN0IHByb2plY3RzQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RzQm9keS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0cy1ib2R5Jyk7XG4gICAgYm90dG9tTmF2LmFwcGVuZENoaWxkKHByb2plY3RzQm9keSk7XG5cbiAgICBsZWZ0U2lkZS5hcHBlbmRDaGlsZCh0b3BOYXYpO1xuICAgIGxlZnRTaWRlLmFwcGVuZENoaWxkKGJvdHRvbU5hdik7XG4gICAgcmV0dXJuIGxlZnRTaWRlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVMZWZ0U2lkZTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=